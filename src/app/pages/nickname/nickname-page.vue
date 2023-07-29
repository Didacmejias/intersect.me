<template>
  <section class="section">
    <h1 class="section__title">Intersect me!</h1>
    <div class="form form__container">
      <input
        class="form__input"
        :class="{ 'form__input--is-error': error }"
        :type="INPUT_TYPE.text"
        maxlength="15"
        v-model="nickname"
        placeholder="Williams"
      />
      <label v-if="error" class="form__label">{{ error }}</label>
      <label v-else class="form__label">Enter your nickname to start the game</label>
      <button class="form__button" :type="BUTTON_TYPE.button" @click="onSubmit">Start!</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { INPUT_TYPE, BUTTON_TYPE } from '@/app/shared/enums'
import { useInput } from './useInput'
import { ROUTE_NAME } from '@/router/enums'
import { useCharacter } from '@/stores/character'
import { Step } from '@/stores/types'

const router = useRouter()
const { nickname, error, isLiveValidation, validateInput } = useInput()
const { setCharacter } = useCharacter()

const onSubmit = () => {
  if (!isLiveValidation.value) isLiveValidation.value = true
  validateInput(nickname.value)
  if (!error.value) {
    setCharacter({ name: nickname.value, step: Step.first })
    router.push({ name: ROUTE_NAME.generator })
  }
}
</script>

<style lang="scss" scoped>
@import url('./nickname-page.scss');
</style>
