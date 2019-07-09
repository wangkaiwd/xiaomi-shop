<template>
  <div class="mi-detail">
    <div class="mi-detail-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(swiper,i) in swiperData" :key="i">
          <img :data-src="swiper.img_url" class="swiper-lazy" alt="">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <!-- Optional controls -->
        <template #pagination>
          <div class="swiper-pagination"></div>
        </template>
      </swiper>
      <span class="back" @click="$router.go(-1)">
        <mui-icon name="left"></mui-icon>
      </span>
      <span class="share">
        <mui-icon name="share"></mui-icon>
      </span>
    </div>
    <div class="desc">
      <h3 class="desc-name">{{productInfo.name}} </h3>
      <div class="desc-text" v-html="productInfo.productDesc"></div>
      <div class="desc-price">
        <span>￥</span>{{currentGoods.price}}
      </div>
    </div>
    <div class="parameter" @click="showPopup('KeyParams')">
      <ul>
        <li v-for="parameter in parametersList">
          <img :src="parameter.icon" alt="">
          <span class="top-title">
            {{parameter.top_title}}
          </span>
          <span class="bottom-title">
            {{parameter.bottom_title}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-select-wrapper">
      <selector-list class="sales-promotion">
        <selector-list-item>
          <template #tag>
            促销
          </template>
          <div>
            <span class="gift">赠品</span>赠小米移动电源2赠
          </div>
        </selector-list-item>
      </selector-list>
      <selector-list class="goods-select">
        <selector-list-item @click="showSkuPopup('SelectSku')">
          <template #tag>
            已选
          </template>
          <div>Redmi K20 Pro 8GB+256GB 冰川蓝 x 1</div>
        </selector-list-item>
        <selector-list-item>
          <template #tag>
            送至
          </template>
          <div>北京市 东城区 <span>有现货</span></div>
        </selector-list-item>
        <selector-list-item>
          <span class="service">
            <mui-icon class="check-icon active" name="check"></mui-icon>小米自营
          </span>
          <span class="service">
            <mui-icon class="check-icon" name="check"></mui-icon>小米自营
          </span>
          <span class="service">
            <mui-icon class="check-icon" name="check"></mui-icon>小米自营
          </span>
        </selector-list-item>
      </selector-list>
    </div>
    <div class="body-images">
      <img v-for="img in images" :key="img.block_id" v-lazy="img.img_url" alt="">
    </div>
    <div class="relative-recommend">

    </div>
    <guess-love :header="header" :items="recommendList"></guess-love>
    <transition name="slide">
      <div class="mi-detail-footer" v-if="visible">
        <div class="home icon-wrapper">
          <span><mui-icon name="home"></mui-icon></span>
          <span><router-link to="/index">首页</router-link></span>
        </div>
        <div class="cart icon-wrapper">
          <span><mui-icon name="shopCart"></mui-icon></span>
          <span><router-link to="/shopCart">购物车</router-link></span>
        </div>
        <div class="join-cart">
          加入购物车
        </div>
      </div>
    </transition>
    <mui-popup
      get-container="body"
      v-model="popupInfo.visible"
      :title="popupInfo.title"
    >
      <component
        :is="popupInfo.componentName"
        :items="popupInfo.items"
        @on-ok="onOk"
      >
      </component>
    </mui-popup>
    <mui-popup
      get-container="body"
      v-model="buyOptionsVisible"
    >
      <select-sku
        :buy-options.sync="buyOptions"
        :goods-name="productInfo.name"
        @on-sku-ok="onSkuOk"
        :current-goods.sync="currentGoods"
        @get-current-goods="getCurrentGoods"
      >

      </select-sku>
    </mui-popup>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import SelectorList from 'views/detail/SelectorList';
  import SelectorListItem from 'views/detail/SelectorListItem';
  import { fetchDetail, fetchGuessLove } from 'api/index';
  import GuessLove from 'components/guessLove/GuessLove';
  import ServiceIntroduce from './ServiceIntroduce';
  import KeyParams from './KeyParams';
  import SelectSku from './SelectSku';

  export default {
    name: 'MiDetail',
    components: {
      swiper,
      swiperSlide,
      SelectorList,
      SelectorListItem,
      GuessLove,
      KeyParams,
      SelectSku,
      ServiceIntroduce
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: '.swiper-pagination',
          },
          lazy: {
            loadPrevNext: true,
          },
        },
        swiperData: [],
        parameters: {},
        images: [],
        productInfo: {},
        currentGoods: {},
        header: {},
        recommendList: [],
        buyOptions: [],
        visible: false,
        popupInfo: {
          visible: false,
          componentName: '',
          title: '',
          items: []
        },
        buyOptionsVisible: false
      };
    },

    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper;
      },
      parametersList () {
        if (this.parameters.list) {
          return this.parameters.list.filter(item => item.top_title);
        }
        return [];
      }
    },
    beforeRouteEnter (to, from, next) {
      Promise.all([fetchDetail(), fetchGuessLove()]).then(
        res => {
          const [detailInfo, guessLove] = res;
          next(vm => {
            vm.setDetailInfo(detailInfo);
            vm.setGuessLove(guessLove);
          });
        }
      );
    },
    mounted () {
      this.visible = true;
    },
    methods: {
      setDetailInfo (res) {
        const {
          gallery_view: swiperData,
          productInfo,
          class_parameters: classParameters,
          introduce_image: images,
          buy_option
        } = res.data;
        this.swiperData = swiperData;
        this.parameters = classParameters;
        this.images = images;
        this.productInfo = productInfo;
        this.buyOptions = buy_option;
        this.getCurrentGoods();
      },
      setGuessLove (res) {
        this.header = res.data.header;
        this.recommendList = res.data.recommend_list;
      },
      showPopup (componentName) {
        const dataMap = {
          'KeyParams': this.parameters
        };
        this.popupInfo.componentName = componentName;
        this.popupInfo.visible = true;
        this.popupInfo.title = dataMap[componentName].name;
        this.popupInfo.items = dataMap[componentName].list;
      },
      showSkuPopup () {
        this.buyOptionsVisible = true;
      },
      onOk () {
        this.popupInfo.visible = false;
      },
      onSkuOk () {
        this.buyOptionsVisible = false;
      },
      getCurrentGoods () {
        const result = {};
        this.buyOptions.map(option => {
          if (option.name === '版本') {
            result.price = option.selectItem.price;
            result.size = option.selectItem.name;
          }
          if (option.name === '颜色') {
            result.color = option.selectItem.name;
            result.imgUrl = option.selectItem.img_url;
          }
          if (option.name === '套餐') {
            if (option.selectItem.name !== '标配') {
              result.group = option.selectItem.name;
            } else {
              result.group = undefined;
            }
          }
        });
        this.currentGoods = result;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mi-detail {
    background-color: $white;
    overflow: auto;
    &-swiper {
      position: relative;
    }
    .back, .share {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: $space-md;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, .6);
      font-size: $font-lg;
      z-index: 1;
      color: $white;
    }
    .back {
      left: $space-md;
    }
    .share {
      right: $space-md;
    }
    .swiper-container {
      width: 100%;
      height: 412px;
    }
    /*使用dart cass 深度作用域要使用 ::v-deep*/
    /*@see:https://github.com/vuejs/vue-cli/issues/3399*/
    ::v-deep .swiper-pagination-bullet-active {
      background-color: $white;
    }
    .desc {
      padding: $space-md;
      line-height: 1.4;
    }
    .desc-name {
      font-size: $font-xxl;
      color: $dark-text;
    }
    .desc-text {
      color: $light-text;
      font-size: $font-sm;
    }
    .desc-price {
      span {
        font-size: $font-lg;
      }
      padding-top: $space-sm;
      color: $main-color;
      font-size: $font-xxl;
    }
    .parameter {
      ul {
        display: flex;
        overflow: auto;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: 0 $space-xs;
        width: 84px;
        &:not(:first-child),
        &:not(:last-child) {
          border-right: 1px solid $light-border;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
      .top-title {
        padding: $space-xs;
        font-size: $font-sm;
        color: $text-color;
        text-align: center;
      }
      .bottom-title {
        text-align: center;
        font-size: $font-sm;
        color: $light-text;
        width: 100%;
        @include ell;
      }
    }
    .goods-select-wrapper {
      padding: $space-lg;
    }
    .goods-select {
      margin-top: 8px;
    }
    .check-icon {
      color: lighten($light-text, 20%);
      margin-right: $space-xs;
      &.active {color: $main-color;}
    }
    .service:not(:first-child) {
      margin-left: $space-sm;
    }
    &-footer {
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
