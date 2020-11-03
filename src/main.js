import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// 注入的是 vuex中的 store
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
