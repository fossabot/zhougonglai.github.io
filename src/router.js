import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/positions',
      name: 'positions',
      component: () => import(/* webpackChunkName: "positions" */ '@/views/Positions.vue')
    },
    {
      path: '/dashboard',
      component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'userPanel',
          component: () => import(/* webpackChunkName: "Dashboard.userPanel" */ '@/views/Dashboard/UserPanel.vue')
        },
        {
          path: 'calendar',
          name: 'calendar',
          component: () => import(/* webpackChunkName: "Dashboard.calendar" */ '@/views/Dashboard/Calendar.vue')
        }
      ]
    }
  ]
})
