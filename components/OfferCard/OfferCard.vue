<script setup lang="ts">
import { useMainStore } from '~/store/main';

import IconFavorite from '~/components/shared/IconFavorite.vue';

import type { Product } from '~/types';

defineProps<{
  product: Product;
}>();

const mainStore = useMainStore();

const formatter = new Intl.NumberFormat('ru-RU', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
</script>

<template>
  <div class="offer-card">
    <div class="offer-card__info">
      <img
        class="offer-card__image"
        src="~/assets/images/product.png"
      />
      <div class="offer-card__details">
        <p class="offer-card__deal-type">{{ product.dealType }}</p>
        <h3 class="offer-card__name">{{ product.name }}</h3>
        <div class="offer-card__geo">
          <img
            class="offer-card__geo-mark"
            src="~/assets/svg/geo-mark.svg"
            alt="geo mark"
          />
          <p class="offer-card__geo-address">
            {{ product.address.city }}, {{ product.address.street }}
          </p>
        </div>
        <div class="offer-card__parameter">
          <p class="offer-card__parameter-name">Продавец</p>
          <p class="offer-card__parameter-value">{{ product.seller }}</p>
        </div>
        <div class="offer-card__product-type">
          <div class="offer-card__parameter">
            <p class="offer-card__parameter-name">Вид товара</p>
            <p class="offer-card__parameter-value">{{ product.type }}</p>
          </div>
        </div>
        <p class="offer-card__description">
          {{ product.description }}
        </p>
      </div>
    </div>
    <div class="offer-card__sell">
      <h1 class="offer-card__price">
        {{ formatter.format(product.count * product.price) }} ₽
      </h1>
      <div class="offer-card__parameters">
        <div class="offer-card__parameter">
          <p class="offer-card__parameter-name">Количество</p>
          <p class="offer-card__parameter-value">{{ product.count }} шт.</p>
        </div>
        <div class="offer-card__parameter">
          <p class="offer-card__parameter-name">Стоимость за штуку</p>
          <p class="offer-card__parameter-value">
            {{ formatter.format(product.price) }} ₽
          </p>
        </div>
      </div>
      <div class="offer-card__controls">
        <UIButton
          v-if="product.inDeals && product.isPayed"
          disabled
        >
          Оплачено
        </UIButton>
        <UIButton
          v-else-if="product.inDeals && !product.isPayed"
          @click="mainStore.pay(product.id)"
          variant="pay"
        >
          Оплатить
        </UIButton>

        <UIButton
          v-else
          @click="mainStore.addToDeals(product.id)"
        >
          Добавить в сделки
        </UIButton>
        <UIButton
          is-icon-button
          @click="mainStore.toggleFavorite(product.id)"
          :variant="product.favorites ? 'primary' : 'secondary'"
        >
          <IconFavorite :fill="product.favorites ? '#E5E5E5' : '#2D3B87'" />
        </UIButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.offer-card {
  display: flex;
  width: 1166px;
  height: 366px;
  border: 1px solid $border;
  border-radius: 20px;
  margin: 20px auto;

  &__info {
    width: 852px;
    height: 306px;
    padding: 20px;
    display: flex;
    gap: 20px;
  }

  &__sell {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 314px;
    height: 100%;
    border-left: 1px solid $border;
    border-radius: 20px;
    padding: 20px;
  }

  &__image {
    width: 256px;
    height: 256px;
    border-radius: 10px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__deal-type {
    @include text-m;
    line-height: 20px;
    color: $light-blue;
  }

  &__name {
    @include title-m-v2;
    color: $primary;
  }

  &__geo {
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    margin-top: 20px;
    padding: 4px 8px;
    border-radius: 5px;
    background-color: $secondary;

    &-address {
      @include text-m;
      color: $blue;
    }
  }

  &__parameter {
    display: flex;
    align-items: center;
    gap: 4px;
    @include text-m;

    &-name {
      color: $light-blue;
    }

    &-value {
      color: $primary;
    }
  }

  &__product-type {
    width: fit-content;
    padding: 8px;
    background-color: $secondary;
    border-radius: 10px;

    .offer-card__parameter {
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }
  }

  &__description {
    @include text-m-v3;
    color: $primary;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__price {
    @include title-xl;
    color: $primary;
  }

  &__parameters {
    display: flex;
    flex-direction: column;

    .offer-card__parameter {
      padding: 5.5px 0;
      justify-content: space-between;
    }
  }

  &__controls {
    float: bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }
}
</style>
