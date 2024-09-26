<script setup lang="ts">
import HeaderMenu from './HeaderMenu.vue';
</script>

<template>
<div class="header ">
  <div class="header__top">
  </div>

  <HeaderMenu class="header__menu" />
</div>
</template>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__top {
    width: 100%;
    height: 40px;
    background-color: $border;
    border-radius: 0 0 10px 10px;
  }
}
</style>