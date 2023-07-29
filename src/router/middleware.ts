import { useCharacter } from '@/stores/character'
import { ROUTE_PATH } from './enums'

export const hasCharacter = (to, from, next) => {
  if (from.path === ROUTE_PATH.home) return next()
  const {
    character: { nickname }
  } = useCharacter()

  if (!nickname) next(ROUTE_PATH.home)
  else next()
}
