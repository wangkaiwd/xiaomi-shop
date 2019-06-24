<template>
  <div id="app">
    <router-view/>

  </div>
</template>
<script>

  import MiHome from 'views/home/MiHome';

  export default {
    name: 'MiApp',
    components: { MiHome },
    data () {
      return {};
    }
  };
</script>
<style lang="scss" scoped>
  #app {
    height: 100vh;
    overflow: auto;
  }
</style>
