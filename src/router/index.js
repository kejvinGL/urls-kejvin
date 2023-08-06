import { createRouter, createWebHistory } from 'vue-router'
import SiteView from '../views/SiteView.vue'
import Redirect from '../views/Redirect.vue'

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
      name: "redirect",
      component: Redirect,
    },
  ]
})

export default router
