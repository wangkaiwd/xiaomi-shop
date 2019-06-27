<template>
  <transition name="slide">
    <div class="mui-top-header" v-if="visible">
      <span @click="$router.go(-1)">
        <mi-icon name="left"></mi-icon>
      </span>
      <h3 class="mui-top-header-text">{{title}}</h3>
      <span @click="$router.push('/search')">
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
    props: {},
    data () {
      return {};
    },
    computed: {
      visible () {
        return this.$route.meta.showHeader;
      },
      title () {
        return this.$route.meta.title;
      }
    },
    // watch: {
    //   '$route.path' (newVal) {
    //     if (newVal === '/category' || newVal === '/shopCart') {
    //       this.$emit('update:visible', true);
    //       this.title = this.$route.meta.title;
    //     } else {
    //       this.$emit('update:visible', false);
    //       this.title = '';
    //     }
    //   }
    // },
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
