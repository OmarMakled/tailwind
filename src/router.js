import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/src/tailwindHero',
      component: () => import('./components/Src/TailwindHero.vue')
    },
    {
      path: '/page/tailwindHero',
      component: () => import('./components/Pages/TailwindHero.vue')
    },
    {
      path: '/page/1Password',
      component: () => import('./components/Pages/1Password.vue')
    },
    {
      path: '/page/Todo',
      component: () => import('./components/Pages/Todo.vue')
    }
  ]
})