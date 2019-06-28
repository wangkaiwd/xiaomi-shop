<template>
  <mui-layout class="mui-skeleton" style="z-index: 500;" v-if="loading">
    <mui-header class="mui-skeleton-header"></mui-header>
    <mui-content>
      <img src="~img/loading.png" alt="">
    </mui-content>
    <mui-footer class="mui-skeleton-footer"></mui-footer>
  </mui-layout>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'MuiSkeleton',
    computed: {
      ...mapState(['loading'])
    },
    mounted () {
    },
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
    &-header {
      background-color: $bgc-color;
      height: 50px;
      box-shadow: 0 3px 14px -2px rgba(0, 0, 0, 0.24);
      margin-bottom: 2px;
    }
    &-footer {
      height: 50px;
      box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
    }
  }
</style>
