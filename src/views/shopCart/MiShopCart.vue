<template>
  <mui-layout class="mi-shop-cart">
    <mui-header class="header-placeholder"></mui-header>
    <mui-content>
      <mi-cart-item v-for="goods in shopData" :key="goods.id" :goods="goods"></mi-cart-item>
    </mui-content>
  </mui-layout>
</template>

<script>
  import MiCartItem from 'views/shopCart/MiCartItem';
  import MuiLayout from 'components/layout/MuiLayout';

  export default {
    name: 'MiShopCart',
    components: {
      MuiLayout,
      MiCartItem,
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
        ]
      };
    }
  };
</script>

<style scoped>

</style>
