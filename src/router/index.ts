import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '@/views/AboutView.vue'
import homeRouter from './home.router'
import loginRouter from './login.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRouter,
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    loginRouter
  ]
})

export default router
