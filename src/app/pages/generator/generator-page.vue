<template>
  <GeneratorNavbar />
  <section class="generator">
    <div><DollarIcon /></div>
    <div><SocialIcon /></div>
    <div><WellbeingIcon /></div>
    <div><StatusIcon /></div>
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
const DollarIcon = defineAsyncComponent(() => import('@/assets/icons/dollar-icon.vue'))
const SocialIcon = defineAsyncComponent(() => import('@/assets/icons/social-icon.vue'))
const WellbeingIcon = defineAsyncComponent(() => import('@/assets/icons/brain-icon.vue'))
const StatusIcon = defineAsyncComponent(() => import('@/assets/icons/star-icon.vue'))
</script>

<style scoped>
@import url('./generator-page.scss');
</style>
