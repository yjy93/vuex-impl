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

export class Store {
  constructor(options) {

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


