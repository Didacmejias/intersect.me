<template>
  <main class="main">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
@import url('./app.scss');
</style>
