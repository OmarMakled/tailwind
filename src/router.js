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
      path: '/page-two',
      name: 'page-two',
      component: () => import('./components/Src/TailwindHero.vue')
    },
    {
      path: '/page-one',
      name: 'page-one',
      component: () => import('./components/Pages/TailwindHero.vue')
    }
  ]
})