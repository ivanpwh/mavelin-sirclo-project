import Vue from 'vue'
import Vuex from 'vuex'

// import module
import dashboard from './dashboard'

// use plugin
Vue.use(Vuex)

// spread store
export default new Vuex.Store({
  modules: {
    dashboard
  }
})
