<script setup lang="ts">
import NavTypes from './NavTypes.vue';
import NavSearch from './NavSearch.vue';

defineProps<{
  types: string[]
}>()
</script>

<template>
  <div class="nav-panel">
    <NavTypes class="nav-panel__types" :types="types"/>
    <NavSearch class="nav-panel__search" />
  </div>
</template>

<style lang="scss">
.nav-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 77px;
}
</style>
