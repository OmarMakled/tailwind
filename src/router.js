import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('./views/Nav.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('./views/Grid.vue')
    }
  ]
})