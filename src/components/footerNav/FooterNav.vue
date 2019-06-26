<template>
  <ul class="footer-nav">
    <router-link
      v-for="nav in footerNav"
      :key="nav.key"
      tag="li"
      active-class="active"
      :to="nav.key"
    >
      <mi-icon class="footer-nav-icon" :name="nav.icon"></mi-icon>
      <span>{{nav.title}}</span>
    </router-link>
  </ul>
</template>

<script>
  import MiIcon from 'components/icon/MuiIcon';

  const footerNav = [
    { key: '/index', title: '首页', icon: 'home' },
    { key: '/category', title: '分类', icon: 'category' },
    { key: '/shopCart', title: '购物车', icon: 'shopCart' },
    { key: '/mine', title: '我的', icon: 'mine' },
  ];
  export default {
    name: 'FooterNav',
    components: { MiIcon },
    props: {
      footerNav: {
        type: Array,
        default: () => footerNav
      }
    }
  };
</script>

<style lang="scss" scoped>
  .footer-nav {
    display: flex;
    height: 52px;
    color: $text-color;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
    li {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      &.active {
        color: $main-color;
      }
    }
    &-icon {
      font-size: 20px;
      margin-bottom: $space-xs;
    }
  }
</style>
