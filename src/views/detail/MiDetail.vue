<template>
  <div class="mi-detail">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(swiper,i) in swiperData" :key="i">
        <img :src="swiper.img_url" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <template #pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
    <div class="desc">
      <h3 class="desc-name">Redmi K20 Pro </h3>
      <div class="desc-text">
        「全版本赠移动电源。购机享分期6期免息，低至417元起/期。可选加20元得27W快充」
        骁龙855旗舰处理器 / 索尼4800万超广角三摄 / 前置2000万升降式相机 / 6.39"AMOLED全面屏 / 4000mAh超长续航 / 8层石墨立体散热 / 第七代屏下指纹解锁 / 多功能NFC
      </div>
      <div class="desc-price">
        <span>￥</span>2999
      </div>
    </div>
    <div class="parameter">
      <ul>
        <li v-for="parameter in parameters">
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
      <!--<div class="sales-promotion">

      </div>
      <div class="goods-select">
        <div class="specify-selector"></div>
        <div class="address-selector"></div>
        <div class="server-selector"></div>
      </div>-->
      <selector-list>
        <selector-list-item>
          <template #tag>
            促销
          </template>
          <div>赠小米移动电源2赠小米移动电源2赠小米移动电源2赠小米移动电源2</div>
        </selector-list-item>
        <selector-list-item>
          <template #tag>
            已选
          </template>
          <div>赠小米移动电源2</div>
        </selector-list-item>
        <selector-list-item>
          <template #tag>
            送至
          </template>
          <div>赠小米移动电源2</div>
        </selector-list-item>
        <selector-list-item>
          <div>赠小米移动电源2</div>
        </selector-list-item>
      </selector-list>
    </div>
    <div class="relative-recommend">

    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';

  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import SelectorList from 'views/detail/SelectorList';
  import SelectorListItem from 'views/detail/SelectorListItem';

  const swiperData = [
    {
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0337032429cc0085ab911ecc823624a0.jpg',
      'img_url_webp': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0337032429cc0085ab911ecc823624a0.jpg',
      'type': 'img'
    },
    {
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23920653ce71e984d71994c9c7680fce.jpg',
      'img_url_webp': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23920653ce71e984d71994c9c7680fce.jpg',
      'type': 'img'
    },
    {
      'img_url': '//i8.mifile.cn/v1/a1/c5ac16eb-bb5e-e45d-0d7e-1c4b23570d3e.webp',
      'img_url_webp': '//i8.mifile.cn/v1/a1/c5ac16eb-bb5e-e45d-0d7e-1c4b23570d3e.webp',
      'type': 'img'
    },
    {
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9e6dc89b7d6ae2710ac702e233d3530.jpg',
      'img_url_webp': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9e6dc89b7d6ae2710ac702e233d3530.jpg',
      'type': 'img'
    }
  ];
  const parameters = [
    {
      'bottom_title': '骁龙855八核',
      'icon': 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png',
      'is_page_show': true,
      'name': 'CPU',
      'top_title': 'CPU',
      'value': '骁龙855八核'
    },
    {
      'name': 'CPU主频',
      'value': '最高2.84GHz'
    },
    {
      'bottom_title': '4800万+800万+1300万像素',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png',
      'is_page_show': true,
      'name': '后置摄像头',
      'top_title': '三摄像头',
      'value': '4800万+800万+1300万像素'
    },
    {
      'name': '前置摄像头',
      'value': '2000万像素'
    },
    {
      'name': '屏幕',
      'value': '三星AMOLED 全面屏'
    },
    {
      'bottom_title': '6.39英寸',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png',
      'is_page_show': true,
      'name': '屏幕尺寸',
      'top_title': '超大屏',
      'value': '6.39英寸'
    },
    {
      'bottom_title': '2340×1080',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png',
      'is_page_show': true,
      'name': '屏幕分辨率',
      'top_title': '屏幕分辨率',
      'value': '2340×1080'
    },
    {
      'bottom_title': '8GB',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png',
      'is_page_show': true,
      'name': '运行内存',
      'top_title': '极速畅玩',
      'value': '8GB'
    },
    {
      'bottom_title': '256GB',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png',
      'is_page_show': true,
      'name': '存储容量',
      'top_title': '存储容量',
      'value': '256GB'
    },
    {
      'name': 'NFC',
      'value': '支持'
    },
    {
      'name': '指纹识别',
      'value': '第七代屏幕指纹'
    },
    {
      'bottom_title': '4000mAh',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png',
      'is_page_show': true,
      'name': '电池容量',
      'top_title': '超长待机',
      'value': '4000mAh'
    },
    {
      'name': '电池充电',
      'value': '有线快充'
    },
    {
      'bottom_title': '4G全网通',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png',
      'is_page_show': true,
      'name': '网络类型',
      'top_title': '运营商网络',
      'value': '4G全网通'
    },
    {
      'bottom_title': '双卡双待',
      'icon': 'https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png',
      'is_page_show': true,
      'name': '网络模式',
      'top_title': '网络模式',
      'value': '双卡双待'
    }
  ];
  export default {
    name: 'MiDetail',
    components: { swiper, swiperSlide, SelectorList, SelectorListItem },
    data () {
      return {
        swiperOption: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        },
        swiperData,
        parameters: parameters.filter(item => item.top_title)
      };
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
    }
  };
</script>

<style lang="scss" scoped>
  .mi-detail {
    background-color: $white;
    overflow: auto;
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
  }
</style>
