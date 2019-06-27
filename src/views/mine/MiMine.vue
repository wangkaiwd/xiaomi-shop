<template>
  <mui-layout class="mi-mine">
    <mui-content>
      内容区域
    </mui-content>
    <mui-footer>
      <footer-nav :footer-nav="footerNav"></footer-nav>
    </mui-footer>
  </mui-layout>
</template>

<script>
  import { MuiLayout, MuiHeader, MuiFooter, MuiContent } from 'components/layout';
  import FooterNav from 'components/footerNav/FooterNav';
  import { footerNav } from '@/config/navConfig';

  export default {
    name: 'MiMine',
    components: { MuiLayout, MuiHeader, MuiFooter, MuiContent, FooterNav },
    data () {
      return {
        footerNav
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
