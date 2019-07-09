<template>
  <mui-layout class="select-sku">
    <mui-header class="goods-info">
      <div class="img-box">
        <img :src="currentGoods.imgUrl" alt="">
      </div>
      <div class="text-info">
        <p class="price">￥{{currentGoods.price}}</p>
        <p class="name">{{goodsName}} {{currentGoods.size}} {{currentGoods.color}} {{currentGoods.group}}</p>
      </div>
    </mui-header>
    <mui-content class="sku-item-placeholder">
      <div class="sku-item" v-for="item in buyOptions" :key="item.id">
        <div class="title">
          {{item.name}}
        </div>
        <div class="sku-sub-item-wrapper">
          <template v-for="option in item.options">
            <div
              class="sku-sub-item"
              :class="itemClasses(item,option)"
              :key="option.id"
              @click="changeSelect(item,option)"
            >
              <p>{{option.name}}</p>
              <p v-if="option.price">{{option.price}}</p>
            </div>
          </template>
        </div>
      </div>
    </mui-content>
    <mui-footer class="join-shop-cart">
      <p @click="joinCart">加入购物车</p>
    </mui-footer>
  </mui-layout>
</template>

<script>
  import MuiLayout from 'components/layout/MuiLayout';
  import MuiContent from 'components/layout/MuiContent';
  import MuiFooter from 'components/layout/MuiFooter';

  export default {
    name: 'SelectSku',
    components: { MuiFooter, MuiContent, MuiLayout },
    props: {
      buyOptions: {
        type: Array
      },
      currentGoods: {
        type: Object,
        default: () => {}
      },
      goodsName: { type: String }
    },
    computed: {
      selectItems () {
        return this.buyOptions.map(option => option.selectItem);
      },

    },
    mounted () {
    },
    methods: {
      itemClasses (item, option) {
        const selectId = item.selectItem.id;
        return {
          memory: item.name === '版本',
          active: option.id === selectId
        };
      },
      joinCart () {
        // 发起请求
        console.log(this.selectItems);
        this.$emit('on-sku-ok');
      },
      changeSelect (item, option) {
        item.selectItem = option;
        const buyOptionsCopy = JSON.parse(JSON.stringify(this.buyOptions));
        let target = buyOptionsCopy.find(buyOption => item.id === buyOption.id);
        target = item;
        this.$emit('update:buy-options', buyOptionsCopy);
        this.$emit('get-current-goods');
      },
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
      flex-shrink: 0;
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
        line-height: 1.4;
      }
    }
    .sku-item-placeholder {
      overflow-y: auto;
      overflow-x: hidden;
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
        margin-left: -$space-sm;
        margin-top: -$space-sm;
      }
      .sku-sub-item {
        border-radius: $space-xs;
        margin-left: $space-sm;
        margin-top: $space-sm;
        display: flex;
        justify-content: space-between;
        border: 1px solid $light-border;
        padding: $space-sm $space-lg;
        &.memory {
          width: 100%;
        }
        &.active {
          color: $main-color;
          border-color: $main-color;
        }
      }
    }
    .join-shop-cart {
      height: 54px;
      display: flex;
      align-items: center;
      p {
        background-color: $main-color;
        color: $white;
        border-radius: 16px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
  }
</style>
