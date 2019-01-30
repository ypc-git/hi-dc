import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/store',
      name: 'store',
      component: () => import(/* webpackChunkName: "store" */ './views/Store.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/orderform',
      name: 'orderform',
      component: () => import(/* webpackChunkName: "orderform" */ './views/Orderform.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import(/* webpackChunkName: "location" */ './views/Location.vue')
    }
  ]
})
