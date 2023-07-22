<template>
  <nav class="nav nav__container">
    {{ nickname }}
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
