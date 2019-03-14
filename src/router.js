import Vue from 'vue'
import Router from 'vue-router'
//import Login from './views/login/Login.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login/Login.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import(/* webpackChunkName: "store" */ './views/home/Store.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue')
    },
    {
      path: '/orderform',
      name: 'orderform',
      component: () => import(/* webpackChunkName: "orderform" */ './views/orderform/Orderform.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "my" */ './views/my/My.vue')
    },
    {
      path: '/supermarket',
      name: 'supermarket',
      component: () => import(/* webpackChunkName: "supermarket" */ './views/supermarket/Supermarket.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import(/* webpackChunkName: "location" */ './views/location/Location.vue'),
    },
    {
      path: '/editLocation',
      name: 'editLocation',
      component: () => import(/* webpackChunkName: "supermarket" */ './views/location/EditLocation.vue')
    }
  ]
})
