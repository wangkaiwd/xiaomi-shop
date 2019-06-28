<template>
  <div id="app">
    <top-header></top-header>
    <router-view/>
<!--    <mui-skeleton></mui-skeleton>-->
  </div>
</template>
<script>

  import MiHome from 'views/home/MiHome';
  import MiIcon from 'components/icon/MuiIcon';
  import TopHeader from 'components/topHeader/TopHeader';
  import MuiSkeleton from 'components/skeleton/MuiSkeleton';

  export default {
    name: 'MiApp',
    components: { MiHome, MiIcon, TopHeader, MuiSkeleton },
    data () {
      return {};
    },
  };
</script>
<style lang="scss" scoped>
  #app {
    height: 100vh;
    overflow: auto;
  }
</style>
