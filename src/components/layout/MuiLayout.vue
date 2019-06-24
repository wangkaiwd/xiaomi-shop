<template>
  <div class="mui-layout" :class="hasAsideClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MuiLayout',
    data () {
      return {
        hasAsideClass: {}
      };
    },
    computed: {},
    mounted () {
      this.getLayoutClass();
    },
    methods: {
      getLayoutClass () {
        const hasAside = this.$children.some(vm => vm.$options.name === 'MuiAside');
        this.hasAsideClass = { 'mui-layout-hasAside': hasAside };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mui-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    &.mui-layout-hasAside {
      flex-direction: row;
    }
    & & {
      height: auto;
      flex: 1;
    }
  }
</style>
