<template>
  <div class="selector-list-item" @click="$emit('click')">
    <div class="selector-list-item-tag" v-if="hasTag">
      <slot name="tag"></slot>
    </div>
    <div class="selector-list-item-content">
      <slot></slot>
    </div>
    <span class="selector-list-item-icon">
      <mui-icon name="right"></mui-icon>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'SelectorListItem',
    computed: {
      hasTag () {
        return this.$slots.tag;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .selector-list-item {
    background-color: #fafafa;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $light-border;
    padding: $space-md $space-sm;
    color: $dark-text;
    &-tag {
      color: $text-color;
      margin-right: $space-lg;
      flex-shrink: 0;
    }
    &-content {
      min-width: 0;
      flex: 1;
      @include ell;
    }
    &-icon {
      color: $text-color;
      padding-left: $space-lg;
    }
  }
</style>
