import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTE_NAME, ROUTE_PATH } from './enums'
import { useCharacter } from '@/stores/character'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_PATH.home,
      name: ROUTE_NAME.home,
      component: () => import('@/app/pages/nickname')
    },
    {
      path: ROUTE_PATH.generator,
      name: ROUTE_NAME.generator,
      component: () => import('@/app/pages/generator'),
      beforeEnter: (to, from, next) => {
        const {
          character: { nickname }
        } = useCharacter()

        if (!nickname) next(ROUTE_PATH.home)
        else next()
      },
      redirect: ROUTE_PATH.firstStep,
      children: [
        {
          path: ROUTE_PATH.firstStep,
          name: ROUTE_NAME.firstStep,
          component: () => import('@/app/pages/generator/steps/first-step')
        }
      ]
    }
  ]
})

export default router
