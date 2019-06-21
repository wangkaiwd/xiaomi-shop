<template>
  <svg
    class="mi-icon"
    aria-hidden="true"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <use :xlink:href="`#mi-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'MiIcon',
    inheritAttrs: false, // 默认值为true,是否在根节点上显示传入的没有通过props接收的属性
    props: {
      name: { type: String, required: true }
    }
  };
</script>

<style lang="scss" scoped>
  .mi-icon {
    display: inline-flex;
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
