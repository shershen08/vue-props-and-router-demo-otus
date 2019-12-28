import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { timeParser } from './filters'

Vue.config.productionTip = false

Vue.filter('timeParse', timeParser)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
