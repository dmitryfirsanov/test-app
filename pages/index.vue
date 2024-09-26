<script setup lang="ts">
import { useMainStore } from '~/store/main';

import NavPanel from '~/components/Navigation/NavPanel.vue';

const mainStore = useMainStore()

const dealTypes = new Set(mainStore.$state.map((product) => product.dealType));
</script>

<template>
  <NavPanel :types="[...dealTypes]" />

  <div class="offer-cards">
    <OfferCard
      v-for="(product) of mainStore.$state"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style lang="scss">
.offers-cards {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
