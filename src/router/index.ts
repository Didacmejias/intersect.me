import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTE_NAME, ROUTE_PATH } from './enums'
import { hasCharacter } from './middleware'

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

router.beforeEach(hasCharacter)

export default router
