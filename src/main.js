// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import axios from 'axios'

// handle cors issue
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://files.sirclocdn.xyz/frontend-test-37'

axios.defaults.baseURL = BASE_URL

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.prototype.$eventHub = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
