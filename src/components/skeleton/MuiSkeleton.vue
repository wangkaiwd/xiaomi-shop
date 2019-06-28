<template>
  <div class="mui-skeleton" style="z-index: 500;">
    <img src="~img/loading.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'MuiSkeleton',
    mounted () {
    }
  };
</script>

<style lang="scss" scoped>
  .mui-skeleton {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $white;
    z-index: 500;
  }
</style>
