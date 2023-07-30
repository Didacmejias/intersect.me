import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import { Step, type Character } from './types'

export const useCharacter = defineStore('character', () => {
  const character: Ref<Character> = ref({
    nickname: '',
    step: Step.initial
  })

  const setNickname = (name: string) => {
    const nameParsed = name
      .trim()
      .toLowerCase()
      .replace(/\w/, (firstLetter) => firstLetter.toUpperCase())
    character.value.nickname = nameParsed
  }

  const setStep = (step: number) => {
    character.value.step = step
  }

  const setCharacter = ({ name, step = Step.first }: { name: string; step?: number }) => {
    setNickname(name)
    setStep(step)
  }

  return { character, setCharacter }
})
