<template>
  <GeneratorNavbar />
  <section class="generator">
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const GeneratorNavbar = defineAsyncComponent(() => import('./components/generator-navbar'))
</script>

<style scoped>
@import url('./generator-page.scss');
</style>
