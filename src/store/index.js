import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Gene",
    age: 18,
  },
  getters: {
    myAge(state) {
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
