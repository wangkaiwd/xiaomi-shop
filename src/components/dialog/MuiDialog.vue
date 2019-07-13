<template>
  <transition name="scale">
    <div class="mui-dialog" v-if="visible">
      <div class="mui-dialog-mask">
      </div>
      <div class="mui-dialog-wrapper">
        <header class="mui-dialog-title" v-if="title">
          {{title}}
        </header>
        <main class="mui-dialog-content">
          <slot></slot>
        </main>
        <footer class="mui-dialog-footer" :class="{hasFooterBorder}">
          <p class="mui-dialog-cancel" @click="onCancel" v-if="showCancelButton">{{cancelText}}</p>
          <p class="mui-dialog-ok" @click="onOk" v-if="showOkButton">{{okText}}</p>
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
      title: {
        type: String,
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
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      showOkButton: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      hasFooterBorder () {
        return this.showCancelButton && this.showOkButton;
      }
    },
    methods: {
      onCancel () {
        this.$emit('change', false);
        this.$emit('on-cancel');
        if (typeof this.reject === 'function') {
          this.reject('cancel');
        }
      },
      onOk () {
        this.$emit('on-ok');
        this.resolve('on-ok');
        if (typeof this.reject === 'function') {
          this.resolve('ok');
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mui-dialog {
    &.scale-enter-active,
    &.scale-leave-active {
      transition: all 250ms;
      .mui-dialog-wrapper {
        transition: all 250ms;
      }
    }
    &.scale-enter,
    &.scale-leave-to {
      opacity: 0;
      .mui-dialog-wrapper {
        transform: translate(-50%, -50%) scale(0.6);
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
      }
    }
    .hasFooterBorder {
      p {
        &:first-child {
          border-right: 1px solid $light-border;
        }
      }
    }
    &-ok {
      color: $main-color;
    }
  }
</style>
