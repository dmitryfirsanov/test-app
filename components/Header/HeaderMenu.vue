<script setup lang="ts">
import FavoriteIcon from '@/assets/svg/favorite.svg';
import StockIcon from '@/assets/svg/stock.svg';
import BagIcon from '@/assets/svg/bag.svg';

const links = [
  {
    title: 'Избранное',
    icon: FavoriteIcon,
    to: '/favorite',
  },
  {
    title: 'Склад',
    icon: StockIcon,
    to: '/',
  },
  {
    title: 'Сделки',
    icon: BagIcon,
    to: '/deals',
  },
];
</script>

<template>
  <div class="header-menu">
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="header-menu__link"
      exact-active-class="header-menu__link--active"
    >
      <img
        :src="link.icon"
        alt="link icon"
      />
      {{ link.title }}
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.header-menu {
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 86px;
    height: 50px;
    padding: 6px 0 7px 0;
    border-radius: 10px;
    text-decoration: none;
    color: $primary;
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;

    &--active {
      background-color: $secondary;
    }
  }
}
</style>
