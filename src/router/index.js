import { createRouter, createWebHistory } from 'vue-router'
import SiteView from '../views/SiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:code',
      component: Redirect,
    },
    {
      path: '/',
      name: 'home',
      component: SiteView
    }
  ]
})

export default router
