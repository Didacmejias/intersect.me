<template>
  <GeneratorNavbar />
  <section class="generator generator__container">Text</section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const GeneratorNavbar = defineAsyncComponent(() => import('./components/generator-navbar'))
</script>

<style scoped>
@import url('./generator-page.scss');
</style>
