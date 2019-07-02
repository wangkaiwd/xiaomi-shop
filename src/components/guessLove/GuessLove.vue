<template>
  <div class="guess-love">
    <div class="guess-love-header">
      <img v-lazy="header.img_url" alt="">
    </div>
    <div class="guess-love-item-wrapper">
      <div class="guess-love-item" v-for="(item,i) in items" :key="i">
        <div class="img-box">
          <img v-lazy="item.image_url" alt="">
        </div>
        <div class="guess-love-desc">
          <span class="guess-love-item-name">{{item.name}}</span>
          <div class="guess-love-item-price-wrapper">
            <span class="guess-love-item-price"><span>￥</span>{{item.price}}</span>
            <span class="guess-love-item-origin-price" v-if="item.price !== item.market_price">
            <span>￥</span><span>{{item.market_price}}</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuessLove',
    props: {
      header: {
        type: Object,
        default: () => {}
      },
      items: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style lang="scss" scoped>
  .guess-love {
    span {
      display: inline-block;
      vertical-align: top;
    }
    &-item-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &-item {
      width: 49.5%;
    }
    .img-box {
      position: relative;
      width: 100%;
      padding-top: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    &-item-name {
      width: 100%;
      color: $dark-text;
      @include ell;
    }
    &-item-price-wrapper {
      display: flex;
      align-items: center;
    }
    &-item-price {
      color: $main-color;
      font-size: $font-lg;
      span {
        font-size: $font-md;
      }
    }
    &-item-origin-price {
      margin-left: $space-xs;
      font-size: $font-sm;
      color: $text-color;
      span:last-child {
        text-decoration-line: line-through;
        text-decoration-color: $text-color;
      }
    }
    &-desc {
      padding: $space-md;
    }
  }
</style>
