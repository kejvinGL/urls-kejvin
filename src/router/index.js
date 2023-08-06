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
      path: "/:code",
      redirect: (to) => {
        const redirectTo = `https://urls-kejvin-server-f69fa1281575.herokuapp.com/${to.params.code}`;
        return redirectTo;
      },
    },
  ]
})

export default router
