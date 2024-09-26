import { defineStore } from 'pinia'

import products from '~/public/mock/products.json'

import type { Product } from '~/types'

export const useMainStore = defineStore('mainStore', {
  state: (): Product[] => {
    return products
  },
  actions: {
    toggleFavorite(id: number) {
      const productState = this.$state.find((product: Product) => product.id === id)

      if (productState) {
        productState.favorites = !productState.favorites
      }
    },

    addToDeals(id: number) {
      const productState = this.$state.find((product: Product) => product.id === id)

      if (productState) {
        productState.inDeals = true;
      }
    },

    pay(id: number) {
      const productState = this.$state.find((product: Product) => product.id === id)

      if (productState) {
        productState.isPayed = true;
      }
    }
  }
})