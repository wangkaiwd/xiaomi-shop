<template>
  <div class="key-params">
    <ul>
      <li
        v-for="(item,i) in items"
        :key="i"
      >
        <span>{{item.name}}</span>
        <span>{{item.value}}</span>
      </li>
    </ul>
    <div class="button" @click="$emit('on-ok')">
      完成
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KeyParams',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style lang="scss" scoped>
  .key-params {
    height: 100%;
    display: flex;
    flex-direction: column;
    ul {
      flex: 1;
      overflow: auto;
    }
    .button {
      height: 32px;
      line-height: 32px;
      text-align: center;
      color: $white;
      margin-bottom: $space-md;
      background-color: $main-color;
      border-radius: 16px;
    }
    li {
      display: flex;
      margin: $space-xxl 0;
      span:first-child {width: 102px;color: $text-color;}
      span:last-child {flex: 1;margin-right: $space-sm;color: $dark-text;}
    }
  }
</style>
