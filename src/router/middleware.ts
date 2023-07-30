import { useCharacter } from '@/stores/character'
import { ROUTE_PATH } from './enums'
import type { NavigationGuardNext, RouteLocation } from 'vue-router'

export const hasCharacter = (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) => {
  if (from.path === ROUTE_PATH.home) return next()
  const {
    character: { nickname }
  } = useCharacter()

  if (!nickname) next(ROUTE_PATH.home)
  else next()
}
