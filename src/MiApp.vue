<template>
  <div id="app">
    <top-header :visible.sync="visible"></top-header>
    <router-view/>
  </div>
</template>
<script>

  import MiHome from 'views/home/MiHome';
  import MiIcon from 'components/icon/MuiIcon';
  import TopHeader from 'components/topHeader/TopHeader';

  export default {
    name: 'MiApp',
    components: { MiHome, MiIcon, TopHeader },
    data () {
      return {
        visible: false
      };
    },
  };
</script>
<style lang="scss" scoped>
  #app {
    height: 100vh;
    overflow: auto;
  }
</style>
