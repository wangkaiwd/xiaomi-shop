<template>
  <div class="mui-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MuiContent'
  };
</script>

<style lang="scss" scoped>
  .mui-content {
    flex: 1;
  }
</style>
