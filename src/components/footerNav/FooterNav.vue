<template>
  <transition name="slide">
    <ul class="footer-nav" v-if="visible">
      <router-link
        v-for="nav in footerNav"
        :key="nav.key"
        tag="li"
        active-class="active"
        :to="nav.key"
      >
        <mui-icon class="footer-nav-icon" :name="nav.icon"></mui-icon>
        <span>{{nav.title}}</span>
      </router-link>
    </ul>
  </transition>
</template>

<script>

  const footerNav = [
    { key: '/index', title: '首页', icon: 'home' },
    { key: '/category', title: '分类', icon: 'category' },
    { key: '/shopCart', title: '购物车', icon: 'shopCart' },
    { key: '/mine', title: '我的', icon: 'mine' },
  ];
  export default {
    name: 'FooterNav',
    props: {
      footerNav: {
        type: Array,
        default: () => footerNav
      }
    },
    computed: {
      visible () {
        return this.$route.meta.showFooter;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .footer-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: 52px;
    color: $text-color;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
    background-color: $white;
    li {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      &.active {color: $main-color;}
    }
    &-icon {
      font-size: 20px;
      margin-bottom: $space-xs;
    }
    &.slide-enter,
    &.slide-leave-to {
      transform: translateY(100%);
    }
    &.slide-enter-active,
    &.slide-leave-active {
      transition: transform 250ms;
    }
  }
</style>
