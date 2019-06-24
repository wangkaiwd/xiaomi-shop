<template>
  <div class="mui-footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MuiFooter'
  };
</script>

<style lang="scss" scoped>
  .mui-footer {
    min-height: 40px;
  }
</style>
