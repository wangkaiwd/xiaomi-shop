<template>
  <div class="mi-cart-item">
    <div class="shop-picture">
      <img src="//i1.mifile.cn/a1/pms_1558857678.14769305.jpg" alt="">
    </div>
    <div class="shop-info">
      <div class="shop-name">{{goods.name}}</div>
      <div class="shop-price">
        <span>售价：</span>
        <span>{{goods.price}}</span>
      </div>
      <div class="shop-tool">
        <span class="minus" @click="onMinus">
          <mui-icon name="minus"></mui-icon>
        </span>
        <span class="number">{{number}}</span>
        <span class="add" @click="onAdd" :class="{disabled}">
          <mui-icon name="plus"></mui-icon>
        </span>
      </div>
    </div>
    <span class="check" @click="onClickCheck" :class="{checked}">
      <mui-icon name="check"></mui-icon>
    </span>
    <span class="delete" @click="onClickDelete(goods.id)">
      <mui-icon name="delete"></mui-icon>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'MiCartItem',
    props: {
      goods: {
        type: Object,
        default: () => {}
      },
      shopData: {
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
        number: 0,
        checked: false
      };
    },
    computed: {
      disabled () {
        return this.number >= 11;
      }
    },
    methods: {
      onMinus () {
        this.number--;
      },
      onAdd () {
        this.number++;
      },
      onClickDelete (id) {
        const shopDataCopy = JSON.parse(JSON.stringify(this.shopData));
        const i = shopDataCopy.findIndex(data => data.id === id);
        shopDataCopy.splice(i, 1);
        this.$emit('update:shopData', shopDataCopy);
      },
      onClickCheck () {
        this.checked = !this.checked;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mi-cart-item {
    position: relative;
    display: flex;
    padding: $space-md 32px;
    background-color: $white;
    margin-bottom: $space-sm;
    .shop-picture {
      flex-shrink: 0;
      width: 92px;
      height: 92px;
      border: 1px solid $light-border;
      margin-right: $space-sm;
      border-radius: $border-radius-sm;
    }
    .shop-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    .shop-name {
      color: $text-color;
    }
    .shop-price {
      font-size: $font-sm;
      color: $light-text;
    }
    .shop-tool {
      flex-grow: 0;
      display: inline-flex;
      border: 1px solid $light-border;
    }
    .number {
      vertical-align: top;
      line-height: 32px;
      text-align: center;
      min-width: 2em;
    }
    .minus, .add {
      vertical-align: top;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      background-color: #f4f4f4;
      color: $text-color;
      &.disabled {
        opacity: 0.3;
        background-color: #f2f2f2;
        color: $light-text;
      }
    }
    .check {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 6px;
      font-size: 22px;
      color: lighten($light-text, 30%);
      &.checked {
        color: $main-color;
      }
    }
    .delete {
      position: absolute;
      bottom: $space-md;
      right: $space-md;
      font-size: 22px;
      color: $light-text;
    }
  }

</style>
