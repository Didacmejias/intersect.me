<template>
  <section class="section section__container">
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
      <button :type="BUTTON_TYPE.button" @click="onClick">Start!</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { INPUT_TYPE, BUTTON_TYPE } from '@/app/shared/enums'
import { useInput } from './useInput'
import { ROUTE_NAME } from '@/router/enums'
import { useCharacter } from '@/stores/character'

const router = useRouter()
const { nickname, error, validateInput } = useInput()
const { setNickname } = useCharacter()

const onClick = () => {
  validateInput(nickname.value)
  if (!error.value) {
    setNickname(nickname.value)
    router.push({ name: ROUTE_NAME.generator })
  }
}
</script>

<style lang="scss" scoped>
@import url('./isc-app.scss');
</style>
