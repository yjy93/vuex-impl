import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from '@/vuex-impl/index'


// Vue.use 会默认调用 插件的 install 方法
Vue.use(Vuex)// Vuex 中是一个对象, 对象里有两个Store , install方法

export default new Vuex.Store({
  state: {
    name: "Gene",
    age: 18,
  },
  getters: {
    myAge(state) {
      console.log('myAge -> 执行');
      return state.age + 20
    }
  }, // computed
  mutations: {
    changeAge(state, payload) {
      state.age = state.age + payload
    }
  },
  actions: {
    /** action 的参数是 一个和store 具有相同属性和方法的上下文对象 context */
    changeAgeAsync({commit}, payload) {
      setTimeout(() => {
        commit('changeAge', payload)
      }, 1000)
    }
  },
  modules: {}
})
