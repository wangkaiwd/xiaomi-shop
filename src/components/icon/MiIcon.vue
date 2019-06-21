<template>
  <svg class="mi-icon" aria-hidden="true">
    <use :xlink:href="`#mi-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'MiIcon',
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
