<template>
  <transition name="slide">
    <div class="mui-top-header" v-if="visible">
      <span>
        <mi-icon name="left"></mi-icon>
      </span>
      <h3 class="mui-top-header-text">分类</h3>
      <span>
        <mi-icon name="search"></mi-icon>
      </span>
    </div>
  </transition>
</template>

<script>
  import MiIcon from 'components/icon/MuiIcon';

  export default {
    name: 'TopHeader',
    components: { MiIcon },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      '$route.path' (newVal) {
        if (newVal === '/category' || newVal === '/shopCart') {
          this.$emit('update:visible', true);
        } else {
          this.$emit('update:visible', false);
        }
      }
    },
    mounted () {
      document.body.appendChild(this.$el);
    },
    beforeDestroy () {
      this.$el.remove();
    }
  };
</script>

<style lang="scss" scoped>
  .mui-top-header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    align-items: center;
    color: $text-color;
    background-color: $bgc-color;
    span {
      display: flex;
      align-items: center;
      font-size: 22px;
      padding: 0 $space-sm;
    }
    .mui-top-header-text {
      flex: 1;
      font-size: $font-lg;
      text-align: center;
    }
    &.slide-enter,
    &.slide-leave-to {
      transform: translateY(-100%);
    }
    &.slide-enter-active,
    &.slide-leave-active {
      transition: transform 250ms;
    }
  }
</style>
