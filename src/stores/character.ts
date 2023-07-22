import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Character } from './types'

export const useCharacter = defineStore('character', () => {
  const character: Ref<Character> = ref({
    nickname: ''
  })

  const setNickname = (name: string) => {
    character.value.nickname = name
  }

  return { character, setNickname }
})
