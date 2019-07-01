<template>
  <div class="category-item">
    <div class="sub-item-body" v-for="subItem in subItems" :key="subItem.id">
      <div class="title">
        <span>{{subItem.categoryName}}</span>
      </div>
      <div class="item-content">
        <div
          class="item"
          @click="$router.push(`/detail/${list.id}`)"
          v-for="list in subItem.list"
          :key="list.id"
        >
          <img v-lazy="list.imgUrl"
               alt="">
          <span class="item-text">
            {{list.title}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CategoryItem',
    props: {
      subItems: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style lang="scss" scoped>
  .category-item {
    padding: 0 $space-md;
    .title {
      margin-top: $space-sm;
      height: 66px;
      line-height: 66px;
      text-align: center;
      color: $dark-text;
      span {
        position: relative;
        display: inline-block;
        padding: 0 $space-lg;
      }
      span::after,
      span::before {
        content: '';
        position: absolute;top: 50%;
        transform: translateY(-50%);
        background-color: #e0e0e0;;
        height: 1px;width: 22px;
      }
      span::after {left: 100%;}
      span::before {right: 100%;}
    }
    .item-content {
      display: flex;
      flex-wrap: wrap;
      margin-top: -$space-md;
    }
    .item {
      margin-top: $space-md;
      display: flex;
      flex-direction: column;
      width: 33%;
      font-size: $font-sm;
      color: $light-text;
      align-items: center;
      img {
        width: 52px;
        height: 52px;
      }
    }
    .item-text {
      text-align: center;
      width: 100%;
      margin-top: $space-md;
      @include ell;
    }
  }
</style>
