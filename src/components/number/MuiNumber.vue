<template>
  <div class="mui-number">
    <span class="mui-number-minus" :class="{disabled: disabledMinus}" @click="onMinus">
      <mui-icon name="minus"></mui-icon>
    </span>
    <span class="mui-number-count">{{number}}</span>
    <span class="mui-number-add" @click="onAdd" :class="{disabled:disabledAdd}">
      <mui-icon name="plus"></mui-icon>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'MuiNumber',
    props: {
      maxNumber: {
        type: Number,
        default: 999999
      },
      minNumber: {
        type: Number,
        default: 0
      },
      number: {
        type: Number,
        required: true
      }
    },
    data () {
      return {};
    },
    computed: {
      disabledAdd () {
        return this.number >= this.maxNumber;
      },
      disabledMinus () {
        return this.number <= this.minNumber;
      }
    },
    methods: {
      onAdd () {
        if (this.number >= this.maxNumber) {
          alert('达到最大购买数量');
          return;
        }
        this.$emit('on-add');
      },
      onMinus () {
        console.log(this.number, this.minNumber);
        if (this.number <= this.minNumber && this.number >= 0) {
          alert(`最少需购买${this.number}件商品`);
          return;
        }
        this.$emit('on-minus');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mui-number {
    flex-grow: 0;
    display: inline-flex;
    border: 1px solid $light-border;
    &-count {
      vertical-align: top;
      line-height: 32px;
      text-align: center;
      min-width: 3em;
      font-size: $font-lg;
      padding: 0 $space-xs;
    }
    &-minus, &-add {
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
  }
</style>
