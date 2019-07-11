<template>
  <transition name="slide">
    <div class="detail-footer" v-if="visible">
      <div class="home icon-wrapper">
        <span><mui-icon name="home"></mui-icon></span>
        <span><router-link to="/index">首页</router-link></span>
      </div>
      <div class="cart icon-wrapper">
        <span><mui-icon name="shopCart"></mui-icon></span>
        <span><router-link to="/shopCart">购物车</router-link></span>
      </div>
      <div class="join-cart" @click="$emit('join-cart')">
        加入购物车
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'DetailFooter',
    data () {
      return {
        visible: false,
      };
    },
    mounted () {
      this.visible = true;
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .detail-footer {
    position: fixed;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    display: flex;
    align-items: center;
    height: 52px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12);
    border-radius: $border-radius-md;
    background-color: $white;
    &-icon {
      font-size: 20px;
      margin-bottom: $space-xs;
    }
    &.slide-enter,
    &.slide-leave-to {
      transform: translate(-50%, 100%);
    }
    &.slide-enter-active,
    &.slide-leave-active {
      transition: transform 250ms;
    }
    .icon-wrapper {
      color: $text-color;
      padding-left: $space-xxl;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span:first-child {
        font-size: $font-xxl;
      }
      span:last-child {
        font-size: $font-sm;
      }
    }
    .join-cart {
      margin-left: auto;
      margin-right: $space-md;
      padding: 0 $space-xxl;
      border-radius: 16px;
      color: $white;
      background-color: $main-color;
      height: 32px;
      line-height: 32px;
    }
  }

</style>