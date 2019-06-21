<template>
  <div class="mi-home">
    小米首页
    <div class="test">
      hi
      <mi-icon name="alipay"></mi-icon>
    </div>
  </div>
</template>

<script>
  import MiIcon from 'components/icon/MiIcon';

  export default {
    name: 'MiHome',
    components: { MiIcon }
  };
</script>

<style lang="scss" scoped>
  .test {
    height: 40px;
    width: 40px;
    background-color: pink;
  }
</style>
