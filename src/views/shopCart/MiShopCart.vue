<template xmlns="http://www.w3.org/1999/html">
  <mui-layout class="mi-shop-cart">
    <mui-header class="header-placeholder"></mui-header>
    <mui-content>
      <transition-group name="list" tag="div">
        <mi-cart-item
          class="list-item"
          v-for="goods in shopData"
          :shopData.sync="shopData"
          :key="goods.id"
          :goods="goods"
        >
        </mi-cart-item>
      </transition-group>
      <guess-love :header="header" :items="recommendList"></guess-love>
    </mui-content>
  </mui-layout>
</template>

<script>
  import MiCartItem from 'views/shopCart/MiCartItem';
  import MuiLayout from 'components/layout/MuiLayout';
  import GuessLove from 'components/guessLove/GuessLove';
  import { fetchGuessLove } from 'api/index';

  export default {
    name: 'MiShopCart',
    components: {
      MuiLayout,
      MiCartItem,
      GuessLove
    },
    beforeRouteEnter (to, from, next) {
      fetchGuessLove().then(
        res => {
          next(vm => {
            vm.setGuessLove(res);
          });
        }
      );
    },
    data () {
      return {
        shopData: [
          { id: 1, name: 'Redmi K20 Pro 全网通版 8GB+256GB 冰川蓝 256GB', price: '2999' },
          { id: 2, name: 'Redmi K20 Pro 全网通版 8GB+256GB 冰川蓝 256GB', price: '2998' },
          { id: 3, name: 'Redmi K20 Pro 全网通版 8GB+256GB 冰川蓝 256GB', price: '2997' },
          { id: 4, name: 'Redmi K20 Pro 全网通版 8GB+256GB 冰川蓝 256GB', price: '2996' },
          { id: 5, name: 'Redmi K20 Pro 全网通版 8GB+256GB 冰川蓝 256GB', price: '2995' },
          { id: 6, name: 'Redmi K20 Pro 全网通版 8GB+256GB 冰川蓝 256GB', price: '2995' },
          { id: 7, name: 'Redmi K20 Pro 全网通版 8GB+256GB 冰川蓝 256GB', price: '2995' },
        ],
        header: {},
        recommendList: []
      };
    },
    methods: {
      setGuessLove (res) {
        this.header = res.data.header;
        this.recommendList = res.data.recommend_list;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mi-shop-cart {
    .list-item {
      overflow: hidden;
      transition: all 0.8s;
    }
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateX(80%);
    }
    .list-leave-active {
      position: absolute;
    }
  }


</style>
