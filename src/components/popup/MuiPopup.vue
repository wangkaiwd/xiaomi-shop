<template>
  <div class="mui-popup" v-if="visible">
    <div class="mui-popup-mask"></div>
    <div class="mui-popup-content" :class="`position-${position}`">
      <h3 class="mui-popup-title" v-if="title">{{title}}</h3>
      <div class="mui-popup-content-item">
        <slot></slot>
      </div>
      <div class="mui-popup-close" @click="onClose">
        <mui-icon name="close"></mui-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MuiPopup',
    model: {
      prop: 'visible',
      event: 'update:visible'
    },
    props: {
      title: { type: String },
      visible: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        validator (value) {
          return ['left', 'top', 'right', 'bottom'].includes(value);
        },
        default: 'bottom'
      }
    },
    methods: {
      onClose () {
        this.$emit('update:visible', false);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mui-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
    }
    &-content {
      display: flex;
      flex-direction: column;
      padding: 0 $space-lg;
      position: absolute;
      min-height: 128px;
      max-height: 516px;
      background-color: $white;
      color: $dark-text;
      &.position-bottom {
        bottom: 0;
        width: 100%;
      }
    }
    &-title {
      padding: $space-lg 0;
      text-align: center;
      border-bottom: 1px solid $border-color;
      font-size: $font-lg;
    }
    &-close {
      position: absolute;
      top: $space-lg - $space-sm;
      right: $space-lg - $space-sm;
      font-size: $font-lg;
      padding: $space-sm;
      color: $text-color;
    }
    &-content-item {
      flex: 1;
      padding: $space-lg 0;
      overflow: auto;
    }
  }
</style>
