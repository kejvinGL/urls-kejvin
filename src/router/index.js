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
      path: '/:code', // Use a named route and include the dynamic parameter ":code"
      name: 'redirect',
      component: Redirect,
    },
  ]
})

export default router
