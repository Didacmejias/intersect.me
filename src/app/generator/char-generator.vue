<template>
  <div>
    <ISCNavbar />
    Page
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAME } from '@/router/enums'
import { useCharacter } from '@/stores/character'
import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const ISCNavbar = defineAsyncComponent(() => import('./components/isc-navbar.vue'))

const {
  character: { nickname }
} = useCharacter()
const router = useRouter()

if (!nickname) router.push({ name: ROUTE_NAME.home })
</script>

<style scoped></style>
