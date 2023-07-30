import { setActivePinia, createPinia } from 'pinia'
import { useCharacter } from './character'

describe('useCharacter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should set the initial values', () => {
    const store = useCharacter()

    expect(store.character.nickname).toBe('')
    expect(store.character.step).toBe(0)

    store.setCharacter({ name: 'testname' })

    expect(store.character.nickname).toBe('Testname')
    expect(store.character.step).toBe(1)
  })
})
