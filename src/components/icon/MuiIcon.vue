<template>
  <svg
    class="mui-icon"
    aria-hidden="true"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <use :xlink:href="`#mi-${name}`"></use>
  </svg>
</template>

<script>
  // todo 尝试消除v-on webstorm报错提示
  export default {
    name: 'MiIcon',
    inheritAttrs: false, // 默认值为true,是否在根节点上显示传入的没有通过props接收的属性
    props: {
      name: { type: String, required: true }
    }
  };
</script>

<style lang="scss" scoped>
  .mui-icon {
    display: inline-block;
    width: 1em; height: 1em;
    vertical-align: top;
    fill: currentColor;
    overflow: hidden;
  }
</style>
