<template>
  <div class="search">
    <input
      class="search__input"
      type="text"
    />
    <UIButton
      class="search__button"
      variant="primary"
      is-icon-button
    >
      <img src="~/assets/svg/search.svg" />
    </UIButton>
  </div>
</template>

<style lang="scss">
.search {
  position: relative;

  &__input {
    width: 274px;
    height: 48px;
    border: 1px solid $border;
    border-radius: 10px;
    padding: 20px 44px 20px 20px;
    font-size: 15px;
    line-height: 15px;
    color: $primary;

    outline: none;
  }

  &__button {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
}
</style>
