import { createRouter, createWebHistory } from 'vue-router'
import SiteView from '../views/SiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SiteView
    },
    {
      path: '/:code',
      redirect: 'https://urls-kejvin-server-f69fa1281575.herokuapp.com/:code'
    }

  ]
})

export default router
