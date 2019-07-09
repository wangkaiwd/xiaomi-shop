<template>
  <div class="mui-toast">
    <div class="mui-toast-content" :class="{hasIcon}">
      <div class="mui-toast-icon" v-if="hasIcon">
        <mui-icon class="mui-toast-icon-loading" v-if="isLoading" name="loading"></mui-icon>
        <mui-icon v-else :name="icon"></mui-icon>
      </div>
      {{message}}
    </div>
    <div class="mui-toast-mask" v-if="mask"></div>
  </div>
</template>

<script>
  export default {
    name: 'MuiToast',
    props: {
      message: {
        type: String,
      },
      mask: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        validator (value) {
          return ['custom', 'success', 'loading'].includes(value);
        },
        default: 'custom'
      },
      icon: { type: String },
      duration: {
        type: Number,
        default: 3000
      }
    },
    computed: {
      isLoading () {
        return this.type === 'loading';
      },
      hasIcon () {
        return this.isLoading || this.icon;
      }
    },
    mounted () {
      this.autoClose();
    },
    methods: {
      closeToast () {
        this.$el.remove();
        this.$destroy();
      },
      autoClose () {
        if (this.duration === 0 || this.type === 'loading') {return;}
        setTimeout(() => {
          this.closeToast();
        }, this.duration);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mui-toast {
    color: $white;
    &-content {
      padding: 0.5em 1.6em;
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 90;
      max-width: 20em;
      min-width: 4em;
      transform: translate(-50%, -50%);
      line-height: 1.4;
      background-color: rgba(50, 50, 51, 0.88);
      border-radius: $border-radius-sm;
      &.hasIcon {
        padding: 1.6em;
      }
    }
    &-mask {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.7);
    }
    &-icon {
      text-align: center;
      font-size: 28px;
    }
    &-icon-loading {
      @include spin;
    }
  }
</style>
