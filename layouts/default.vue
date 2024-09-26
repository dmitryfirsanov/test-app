<script setup lang="ts">
import { useMainStore } from '~/store/main';

import Header from '~/components/Header/Header.vue';

const mainStore = useMainStore();

mainStore.$state 
</script>

<template>
  <div class="layout">
    <Header class="content-block" />
    <main class="content-block">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.layout {
  min-height: 100vh;
}
</style>
