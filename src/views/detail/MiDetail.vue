<template>
  <div class="mi-detail">
    <div class="mi-detail-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(swiper,i) in swiperData" :key="i">
          <img :data-src="swiper.img_url" class="swiper-lazy" alt="">
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
        <selector-list-item>
          <template #tag>
            促销
          </template>
          <div>赠小米移动电源</div>
        </selector-list-item>
        <selector-list-item>
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
  const images = [
    {
      'block_id': '3450085',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/310b7102ac959eb5ba54b2bff3dd7545.jpg?w=1080&h=680&bg=19294D'
    },
    {
      'block_id': '3450086',
      'img_url': '//i8.mifile.cn/v1/a1/e69fb280-b3e8-3452-a9ea-d56cf161e24f.webp?w=1080&h=701&bg=3A1F41'
    },
    {
      'block_id': '3450087',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dea076bca5b127b743e31e1c1caa78ab.jpg?w=1080&h=673&bg=43142D'
    },
    {
      'block_id': '3450088',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/93ca0cd71fd163f23ac33b60a55f23f7.jpg?w=1080&h=910&bg=251D2A'
    },
    {
      'block_id': '3450089',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fc4a4c9c74366bac42a40e47d39fb52.jpg?w=1080&h=1291&bg=211F24'
    },
    {
      'block_id': '3453628',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7d98dc55001d62e6349c4fc2d7f986b.jpg?w=2000&h=1000&bg=2A0206'
    },
    {
      'block_id': '3450090',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c93954d9d141e38deb2bcbce9a5653c.jpg?w=1080&h=572&bg=612156'
    },
    {
      'block_id': '3450091',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6dff26dbbbeae080b06af16459b506fa.jpg?w=1080&h=832&bg=0E0A0D'
    },
    {
      'block_id': '3450092',
      'img_url': '//i8.mifile.cn/v1/a1/8936471c-2134-3524-b53e-c37ef253cfe0.webp?w=1080&h=1001&bg=393448'
    },
    {
      'block_id': '3450093',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa0f0c79b8ca45109a94f89c347d85a9.jpg?w=1080&h=1297&bg=191A2A'
    },
    {
      'block_id': '3450094',
      'img_url': '//i8.mifile.cn/v1/a1/fc9ab041-c1f0-1a7b-0873-577346ecc5ba.webp?w=1080&h=1093&bg=194C74'
    },
    {
      'block_id': '3450095',
      'img_url': '//i8.mifile.cn/v1/a1/cc1d3601-9533-7ce5-1818-776fef22076d.webp?w=1080&h=862&bg=1C1429'
    },
    {
      'block_id': '3450096',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/04d0ca96e7e907295b08a41ca38f3eff.jpg?w=1080&h=1194&bg=321920'
    },
    {
      'block_id': '3450097',
      'img_url': '//i8.mifile.cn/v1/a1/df59af04-9a5e-0948-d138-7f93b326cba3.webp?w=1080&h=868&bg=0C0A25'
    },
    {
      'block_id': '3450098',
      'img_url': '//i8.mifile.cn/v1/a1/8cabe99d-89f5-fe61-2fbd-044195322f85.webp?w=1080&h=1776&bg=0D0629'
    },
    {
      'block_id': '3450099',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/79681260276e0cfb4ac02ff35f808cff.jpg?w=1080&h=572&bg=6F2359'
    },
    {
      'block_id': '3450100',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81f4fd24fa402d12c20b39d7e11ec203.jpg?w=1080&h=811&bg=111013'
    },
    {
      'block_id': '3450101',
      'img_url': '//i8.mifile.cn/v1/a1/008330b9-1f36-0cb4-e45b-d32108185d53.webp?w=1080&h=928&bg=0C070B'
    },
    {
      'block_id': '3450102',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9d595bfac41464e10972d9a92d9b578.jpg?w=1080&h=684&bg=4E6683'
    },
    {
      'block_id': '3450103',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/108a31549b6a8c22d2fc18dd802bc1fa.jpg?w=1080&h=1028&bg=1F2328'
    },
    {
      'block_id': '3450239',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8405f7e53f05dc1692add705dcd8e7e5.jpg?w=1920&h=1440&bg=FFFFFF'
    },
    {
      'block_id': '3450104',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b51864d36db18685f90a07e9d7794a66.jpg?w=1080&h=1319&bg=425067'
    },
    {
      'block_id': '3450105',
      'img_url': '//i8.mifile.cn/v1/a1/a75975c7-6da0-9d59-60fa-d220b8447e3c.webp?w=1080&h=354&bg=3D4D6C'
    },
    {
      'block_id': '3450106',
      'img_url': '//i8.mifile.cn/v1/a1/9c77d762-66f0-8755-d216-3cf3562801b2.webp?w=1080&h=431&bg=3B4B62'
    },
    {
      'block_id': '3450109',
      'img_url': '//i8.mifile.cn/v1/a1/ad95e33c-39c6-b3ba-4d5d-2aee114cbdf6.webp?w=1080&h=496&bg=080609'
    },
    {
      'block_id': '3450356',
      'img_url': '//i8.mifile.cn/v1/a1/731bb8ae-70f9-54fb-e209-383b16ff2bf3.webp?w=1280&h=720&bg=CAA254'
    },
    {
      'block_id': '3450110',
      'img_url': '//i8.mifile.cn/v1/a1/72c6bd15-65e1-be1e-e819-689961960d32.webp?w=1080&h=537&bg=09070B'
    },
    {
      'block_id': '3450357',
      'img_url': '//i8.mifile.cn/v1/a1/016301ee-a039-899e-6ade-86d013f321d1.webp?w=1280&h=720&bg=383736'
    },
    {
      'block_id': '3450111',
      'img_url': '//i8.mifile.cn/v1/a1/601943e2-ec8c-6dd9-4cc6-e530fa6e44d3.webp?w=1080&h=572&bg=0A060B'
    },
    {
      'block_id': '3471987',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e538a4319b38d3f955e5e2fa762a0bfb.jpg?w=1080&h=1080&bg=FFFFFF'
    },
    {
      'block_id': '3450112',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/56a24a90bf8606061ed662fbf1c2ac67.jpg?w=1080&h=572&bg=3F1654'
    },
    {
      'block_id': '3450113',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ceae109bf8d37914a1ce614832aa430b.jpg?w=1080&h=936&bg=16081D'
    },
    {
      'block_id': '3450114',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffdb17ca34d0c18f9ee3577cb16e5d3d.jpg?w=1080&h=891&bg=1D1851'
    },
    {
      'block_id': '3450115',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0985e9e7fc838223c4a270aef9aa82b.jpg?w=1080&h=1254&bg=0F0C2D'
    },
    {
      'block_id': '3450116',
      'img_url': '//i8.mifile.cn/v1/a1/a96a9bfd-90e6-9042-4cc3-07f417456d62.webp?w=1080&h=829&bg=8D86C8'
    },
    {
      'block_id': '3450117',
      'img_url': '//i8.mifile.cn/v1/a1/45caebb2-0f36-ce06-68b3-be610c7a08be.webp?w=1080&h=907&bg=4C374F'
    },
    {
      'block_id': '3450118',
      'img_url': '//i8.mifile.cn/v1/a1/1fd56bdf-d58d-fa8a-5d05-cec6da0532b0.webp?w=1080&h=1344&bg=310D13'
    },
    {
      'block_id': '3450119',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1556a2a65a55c534decc371be251015f.jpg?w=1080&h=1132&bg=0F0406'
    },
    {
      'block_id': '3450120',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/112325ff6f75ba370993047adbc359dd.jpg?w=1080&h=850&bg=210A1A'
    },
    {
      'block_id': '3450121',
      'img_url': '//i8.mifile.cn/v1/a1/2b68cdb9-c8d7-35cb-e0f6-aba69d95dbb2.webp?w=1080&h=572&bg=6A1D59'
    },
    {
      'block_id': '3450122',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68faa4b09f86c929a58ea03eb066e678.jpg?w=1080&h=878&bg=0C090B'
    },
    {
      'block_id': '3450123',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f257fb27a204477280fb6f1facb45c2.jpg?w=1080&h=1394&bg=1E1E22'
    },
    {
      'block_id': '3450124',
      'img_url': '//i8.mifile.cn/v1/a1/a7931f92-da09-a5e9-d7b4-3a7506cc971b.webp?w=1080&h=638&bg=070609'
    },
    {
      'block_id': '3450125',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/164ac336b72e540a496ec39b4fee4ac8.jpg?w=1080&h=1523&bg=1C232A'
    },
    {
      'block_id': '3450126',
      'img_url': '//i8.mifile.cn/v1/a1/166c0d0c-07ab-b5bc-6503-ef231d6dae7f.webp?w=1080&h=1080&bg=0E0D0D'
    },
    {
      'block_id': '3450127',
      'img_url': '//i8.mifile.cn/v1/a1/5138c57d-dc94-60d1-a6f3-2dad0dc4c6c5.webp?w=1080&h=1542&bg=25151E'
    },
    {
      'block_id': '3454617',
      'img_url': '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb4f103efc4ba14699534fabeb29591e.jpg?w=1080&h=1311&bg=331E3A'
    },
    {
      'block_id': '3450128',
      'img_url': '//i8.mifile.cn/v1/a1/afa22f7b-807f-6089-2810-530423752edf.webp?w=1080&h=782&bg=0E0E0E'
    }
  ];
  export default {
    name: 'MiDetail',
    components: { swiper, swiperSlide, SelectorList, SelectorListItem },
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
        swiperData,
        parameters: parameters.filter(item => item.top_title),
        images
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
  }
</style>
