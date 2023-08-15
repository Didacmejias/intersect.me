import { type Ref, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Step, type Character } from './types'

export const useCharacter = defineStore('character', () => {
  const character: Ref<Character> = ref({
    nickname: '',
    step: Step.initial,
    moneyPercent: 20,
    socialPercent: 40,
    wellbeingPercent: 60,
    statusPercent: 80
  })

  const getMoneyPercent = computed(() => 100 - character.value.moneyPercent)
  const getSocialPercent = computed(() => 100 - character.value.socialPercent)
  const getWellbeingPercent = computed(() => 100 - character.value.wellbeingPercent)
  const getStatusPercent = computed(() => 100 - character.value.statusPercent)

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

  return {
    character,
    setCharacter,
    getMoneyPercent,
    getSocialPercent,
    getWellbeingPercent,
    getStatusPercent
  }
})
