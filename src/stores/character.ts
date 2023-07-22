import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Character } from './types'

export const useCharacter = defineStore('character', () => {
  const character: Ref<Character> = ref({
    nickname: ''
  })

  const setNickname = (name: string) => {
    const nameParsed = name
      .toLowerCase()
      .replace(/\w/, firstLetter => firstLetter.toUpperCase());
    character.value.nickname = nameParsed
  }

  return { character, setNickname }
})
