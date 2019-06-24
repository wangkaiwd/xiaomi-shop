<template>
  <div class="mi-home">

  </div>
</template>

<script>
  import MiIcon from 'components/icon/MiIcon';

  export default {
    name: 'MiHome',
    components: { MiIcon },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .mi-home {
    display: flex;
    flex-direction: column;
    .footer-menu {
      height: 52px;
    }
    .main-wrapper {
      flex: 1;
    }
  }
</style>
