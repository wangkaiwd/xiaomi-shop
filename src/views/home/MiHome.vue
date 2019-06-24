<template>
  <div class="mi-home">
    <mui-layout>
      <mui-header>header</mui-header>
      <mui-content>content</mui-content>
      <mui-footer>footer</mui-footer>
    </mui-layout>
  </div>
</template>

<script>
  import MiIcon from 'components/icon/MiIcon';
  import { MuiLayout, MuiAside, MuiContent, MuiFooter, MuiHeader } from 'components/layout';

  export default {
    name: 'MiHome',
    components: { MiIcon, MuiLayout, MuiContent, MuiHeader, MuiFooter, MuiAside },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .mi-home {
    height: 100%;
  }
</style>
