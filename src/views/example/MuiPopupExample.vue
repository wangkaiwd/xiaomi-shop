<template>
  <div class="mui-example">
    <button @click="visible=true">click me</button>
    <mui-popup v-model="visible" title="服务说明" position="right">
      <ul>
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
        <li>内容6</li>
        <li>内容7</li>
      </ul>
    </mui-popup>
  </div>
</template>

<script>
  export default {
    name: 'MuiExample',
    data () {
      return {
        visible: false
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
