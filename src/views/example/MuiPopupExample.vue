<template>
  <div class="mui-example">
    <button @click="visible=true">click me</button>
    <mui-popup get-container="body" v-model="visible" title="服务说明" position="right">
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

    <button @click="showDialog">show dialog</button>
  </div>
</template>

<script>
  import Dialog from 'components/dialog';

  export default {
    name: 'MuiExample',
    data () {
      return {
        visible: false
      };
    },
    methods: {
      showDialog () {
        Dialog.confirm({
          title: '标题',
          message: '代码是写出来给人看的，附带能在/n机器上运行'
        });
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
