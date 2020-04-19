import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard
    },
    // otherwise go to here
    { path: '*', redirect: '/home' }
  ]
})
