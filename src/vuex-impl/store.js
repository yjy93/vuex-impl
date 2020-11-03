/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-11-03 21:33:41
 * @description: Vuex 的 store 对象
 */
import {applyMixin} from "./minxin"

const forEachValue = (obj, cb) => {
  Object.keys(obj).forEach((key) => {
    cb(obj[key], key)
  })
}
export let _Vue

// new Vuex.Store({state,getter,actions,mutations}}
export class Store {// vuex 是基于Vue 来实现的.
  constructor(options) {// 这里的 this是=>$store
    // this.state 是vuex中的state options.state 是用户配置的state
    // 哪里的数据是响应式的 ?  new Vue 实例中的 data 属性是响应式的
    let computed = {}
    this.getters = {}

    forEachValue(options.getters, (value, key) => {
      // this.getters[key] = value // value 是function, 但是 getters 是属性
      computed[key] = () => {// 靠 computed 属性,做了优化
        return value.call(this, this.state)
      }
      Object.defineProperty(this.getters, key, {
        // 每次取值,都会重新执行用户的方法,性能差, 我希望第一次取值,就能把结果缓存下来
        get: () => {
          return this._vm[key];//取 computed 的key属性,计算属性也会被代理到实例上
        },
      })
    })

    this._vm = new _Vue({
      // vue 中不会对 $ 开头的属性进行代理.
      data: { // 内部会使用代理, 把所有属性代理给 this._vm
        $$state: options.state // 这时用户vuex配置中的 state 就是响应式的
      },
      computed,
    })

    this.mutations = {}
    this.actions = {}
    forEachValue(options.mutations, (fn, key) => {
      this.mutations[key] = (payload) => {
        fn.call(this, this.state, payload)
      }
    })
    forEachValue(options.actions, (fn, key) => {
      this.actions[key] = (payload) => {
        fn.call(this, this, payload)
      }
    })
  }

  get state() {
    return this._vm._data.$$state
  }

  // ES7 类中的箭头函数, 不是es6 箭头函数
  commit = (type, payload) => {
    this.mutations[type](payload)
  }
  dispatch = (type, payload) => {// 原型方法
    this.actions[type](payload)
  }
}

// install 方法
export const install = (Vue) => {
  _Vue = Vue
  applyMixin(Vue)
}


