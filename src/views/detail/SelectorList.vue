<template>
  <div class="selector-list">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SelectorList'
  };
</script>

<style lang="scss" scoped>
  .selector-list {
    border: 1px solid $light-border;
    border-radius: $border-radius-md;
    font-size: $font-sm;
    .selector-list-item:last-child {
      border-bottom: none;
    }
  }
</style>
