<template>
  <div class="mui-header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MuiHeader'
  };
</script>

<style lang="scss" scoped>
  .mui-header {
    min-height: 40px;
  }
</style>
