<script setup lang="ts">
const props =withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'pay';
    isIconButton?: boolean;
    disabled?: boolean;
  }>(),
  {
    variant: 'secondary',
    isIconButton: false,
    disabled: false
  }
);
</script>

<template>
  <button
    :class="[
      'ui-button',
      `ui-button--${variant}`,
      { 'ui-button--icon': isIconButton },
      { 'ui-button--disabled': disabled },
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
.ui-button {
  border: 1px solid transparent;
  width: 222px;
  height: 40px;
  border-radius: 10px;

  font-size: 15px;
  line-height: 15px;
  font-weight: 500;
  cursor: pointer;

  &--primary {
    color: $white;
    background-color: $primary;
  }

  &--secondary {
    color: $primary;
    background-color: $secondary;
  }

  &--pay {
    color: $white;
    background-color: $green;
  }

  &--icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
  }

  &--disabled {
    cursor: not-allowed;
    border: 1px solid $border;
    background-color: $white;
    color: $light-blue;
  }
}
</style>
