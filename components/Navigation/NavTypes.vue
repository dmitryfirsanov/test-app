<script setup lang="ts">
const props = defineProps<{
  types: string[]
}>()

const activeType = ref<string | null>('');

function changeType(type: string | null) {
  activeType.value = type;
}
</script>

<template>
  <div class="nav-types">
    <button
      :class="[
        'nav-types__button',
        {
          'nav-types__button--active': !activeType,
        },
      ]"
      @click="changeType(null)"
    >
      Все типы
    </button>
    <button
      v-for="(type, index) in types"
      :key="index"
      :class="[
        'nav-types__button',
        {
          'nav-types__button--active': activeType === type,
        },
      ]"
      @click="changeType(type)"
    >
      {{ type }}
    </button>
  </div>
</template>

<style lang="scss">
.nav-types {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 40px;
  padding: 12px;
  background-color: $secondary;
  border: 1px solid $border;
  border-radius: 10px;

  &__button {
    border: none;
    background-color: transparent;
    font-size: 15px;
    line-height: 15px;
    color: $light-blue;
    cursor: pointer;
    padding: 0;

    &--active {
      color: $primary;
    }
  }
}
</style>
