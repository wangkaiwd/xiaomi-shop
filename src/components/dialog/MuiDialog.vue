<template>
  <transition name="scale" :duration="1000">
    <div class="mui-dialog" v-if="visible">
      <div class="mui-dialog-mask">
      </div>
      <div class="mui-dialog-wrapper">
        <header class="mui-dialog-title">
          标题
        </header>
        <main class="mui-dialog-content">
          <slot></slot>
        </main>
        <footer class="mui-dialog-footer">
          <p @click="onCancel">{{cancelText}}</p>
          <p>{{okText}}</p>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MuiDialog',
    model: {
      prop: 'visible',
      event: 'change'
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      message: {
        type: String
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确认'
      }
    },
    methods: {
      onCancel () {
        this.$emit('change', false);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mui-dialog {
    &.scale-enter-active,
    &.scale-leave-active {
      transition: all 1s;
    }
    &.scale-enter,
    &.scale-leave-to {
      opacity: 0;
      .mui-dialog-wrapper {
        transform: scale(0.5);
      }
    }
    &-wrapper {
      border-radius: $border-radius-md;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 76%;
      background-color: $white;
      color: $dark-text;
    }
    &-title {
      padding-top: $space-xxl;
      text-align: center;
      font-weight: 500;
      font-size: $font-lg;
    }
    &-content {
      padding: $space-md $space-xxl $space-xxl;
      text-align: center;
      color: $light-text;
      line-height: 1.4;
    }
    &-mask {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.7);
    }
    &-footer {
      display: flex;
      height: 50px;
      line-height: 50px;
      border-top: 1px solid $light-border;
      p {
        text-align: center;
        flex: 1;
        &:first-child {
          border-right: 1px solid $light-border;
        }
      }
    }
  }
</style>
