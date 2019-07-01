<template>
  <div id="app">
    <top-header></top-header>
    <router-view class="mi-router-content"/>
    <mui-skeleton></mui-skeleton>
    <footer-nav :footer-nav="footerNav"></footer-nav>
  </div>
</template>
<script>

  import MiHome from 'views/home/MiHome';
  import TopHeader from 'components/topHeader/TopHeader';
  import FooterNav from 'components/footerNav/FooterNav';
  import { footerNav } from '@/config/navConfig';

  export default {
    name: 'MiApp',
    components: { MiHome, TopHeader, FooterNav },
    data () {
      return {
        footerNav
      };
    },
  };
</script>
<style lang="scss" scoped>
  #app {
    height: 100vh;
    overflow: auto;
    .mi-router-content {
      height: 100%;
    }
  }
</style>
