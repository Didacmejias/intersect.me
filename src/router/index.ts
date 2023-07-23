import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAME, ROUTE_PATH } from './enums'
import { useCharacter } from '@/stores/character'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_PATH.home,
      name: ROUTE_NAME.home,
      component: () => import('@/app/pages/nickname'),
    },
    {
      path: ROUTE_PATH.generator,
      name: ROUTE_NAME.generator,
      component: () => import('@/app/pages/generator'),
      beforeEnter: (to, from, next) => {
        const {
          character: { nickname }
        } = useCharacter()
      
        if(!nickname) next(ROUTE_PATH.home)
        else next()
      }
    },
  ]
})

export default router
