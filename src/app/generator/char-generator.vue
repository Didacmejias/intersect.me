<template>
  <ISCNavbar />
  <section class="generator generator__container">Text</section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ISCNavbar = defineAsyncComponent(() => import('./components/isc-navbar.vue'))
</script>

<style scoped>
@import url('./char-generator.scss');
</style>
