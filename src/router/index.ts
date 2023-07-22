import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAME, ROUTE_PATH } from './enums'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_PATH.home,
      name: ROUTE_NAME.home,
      component: () => import('@/app/isc-app/isc-app.vue')
    },
    {
      path: ROUTE_PATH.generator,
      name: ROUTE_NAME.generator,
      component: () => import('@/app/generator')
    },
  ]
})

export default router
