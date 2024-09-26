<script setup lang="ts">
import { useMainStore } from '~/store/main';

import NavPanel from '~/components/Navigation/NavPanel.vue';

const mainStore = useMainStore()

const products = mainStore.$state.filter((product) => product.inDeals);

const dealTypes = new Set(products.map((product) => product.dealType));
</script>

<template>
  <NavPanel :types="[...dealTypes]" />

  <div class="offer-cards">
    <OfferCard
      v-for="(product) of products"
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
