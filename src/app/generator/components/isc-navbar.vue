<template>
  <nav class="nav nav__container">
    <span>You are playing as:</span>
    <span class="nav__nickname">{{ nickname }}</span>
  </nav>
</template>

<script setup lang="ts">
import { useCharacter } from '@/stores/character'

const {
  character: { nickname }
} = useCharacter()
</script>

<style scoped>
@import url('./isc-navbar.scss');
</style>
