import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // Mesma coisa que abaixo
  // router: router,
  router,
  render: h => h(App),
}).$mount('#app')
