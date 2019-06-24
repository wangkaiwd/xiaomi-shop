<template>
  <mui-layout class="mi-category">
    <mui-header>
      header
    </mui-header>
    <mui-layout>
      <mui-aside>
        aside
      </mui-aside>
      <mui-content>
        content
      </mui-content>
    </mui-layout>
    <mui-footer>
      <footer-nav></footer-nav>
    </mui-footer>
  </mui-layout>
</template>

<script>
  import { MuiLayout, MuiAside, MuiContent, MuiFooter, MuiHeader } from 'components/layout';
  import FooterNav from 'components/footerNav/FooterNav';

  export default {
    name: 'MiCategory',
    components: { MuiLayout, MuiFooter, MuiContent, MuiAside, MuiHeader, FooterNav }
  };
</script>

<style lang="scss" scoped>

</style>
