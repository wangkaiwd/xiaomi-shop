<template>
  <div class="select-sku">
    <div class="goods-info">
      <div class="img-box">
        <img src="//i8.mifile.cn/a1/pms_1558857746.29161362.jpg" alt="">
      </div>
      <div class="text-info">
        <p class="price">￥2499</p>
        <p class="name">Redmi K20 Pro 6GB+64GB 火焰红</p>
      </div>
    </div>
    <div class="sku-item">
      <div class="title">
        版本
      </div>
      <div class="sku-sub-item-wrapper">
        <div class="sku-sub-item">
          <p>6GB+64GB</p>
          <p>2499元</p>
        </div>
        <div class="sku-sub-item">
          <p>6GB+64GB</p>
          <p>2499元</p>
        </div>
        <div class="sku-sub-item">
          <p>6GB+64GB</p>
          <p>2499元</p>
        </div>
      </div>
    </div>
    <div class="sku-item">
      <div class="title">
        颜色
      </div>
      <div class="sku-sub-item-wrapper">
        <div class="sku-sub-item">
          <p>红色</p>
        </div>
        <div class="sku-sub-item">
          <p>蓝色</p>
        </div>
        <div class="sku-sub-item">
          <p>黑色</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectSku',
    props: {
      buyOptions: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  .select-sku {
    .goods-info {
      padding: 30px 0 $space-sm;
      display: flex;
    }
    .img-box {
      width: 100px;
      height: 100px;
      border: 1px solid $light-border;
    }
    .text-info {
      margin: $space-lg $space-sm;
      .price {
        font-size: 26px;
        color: $main-color;
      }
      .name {
        margin-top: $space-sm;
        color: $dark-text;
      }
    }
    .sku-item {
      color: $dark-text;
      font-size: $font-sm;
      .title {
        padding: $space-lg 0 $space-sm;
      }
      .sku-sub-item-wrapper {
        display: flex;
        flex-wrap: wrap;
      }
      .sku-sub-item {
        display: flex;
        justify-content: space-between;
        border: 1px solid $light-border;
        padding: $space-sm $space-lg;
        /*&:not(:first-child) {
          margin-top: $space-sm;
        }*/
      }
    }
  }
</style>
