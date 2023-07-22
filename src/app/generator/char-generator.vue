<template>
  <div>
    <ISCNavbar />
    Page
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ISCNavbar = defineAsyncComponent(() => import('./components/isc-navbar.vue'))
</script>

<style scoped></style>
