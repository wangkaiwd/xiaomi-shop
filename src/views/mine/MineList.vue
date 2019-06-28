<template>
  <div class="mine-list">
    <div class="list-item" v-for="(item,i) in list" :key="i">
      <span class="list-icon" :style="{color: item.iconColor}">
        <mui-icon :name="item.iconName"></mui-icon>
      </span>
      <div class="list-content" :class="{hasBorder:hasBorder(i)}">
        <span class="list-text">{{item.title}}</span>
        <span class="list-right">
          <mui-icon name="right"></mui-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'MineList',
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      hasBorder (i) {
        return this.list.length !== i + 1;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mine-list {
    margin: $space-sm 0;
    background-color: $white;
    .list-icon {
      display: inline-block;
      font-size: 22px;
      height: 100%;
      display: flex;
      align-items: center;
      padding-right: $space-lg;
    }
    .list-item {
      padding-left: $space-lg;
      display: flex;
      align-items: center;
      height: 58px;
    }
    .list-content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: $dark-text;
      flex: 1;
      padding-right: $space-lg;
      &.hasBorder {
        border-bottom: 1px solid $border-color;
      }
      .list-right {
        color: $text-color;
      }
    }
  }
</style>
