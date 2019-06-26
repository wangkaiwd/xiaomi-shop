<template>
  <mui-layout class="mi-home">
    <mui-header class="mi-header">
      <div class="header-top">
        <mi-icon class="logo-icon" name="logo"></mi-icon>
        <div class="search">
          <mi-icon class="search-icon" name="search"></mi-icon>
          <span>搜索商品名称</span>
        </div>
        <mi-icon class="mine-icon" @click="$router.push('/login')" name="mine"></mi-icon>
      </div>
      <div class="header-nav">
        <ul class="nav-wrapper" ref="navWrapper">
          <li
            v-for="(nav,i) in headerNav"
            :key="nav.key"
          >
            <router-link
              :to="nav.path"
              :exact="nav.exact"
              :active-class="nav.activeClass || 'active'"
              @click.native="onClickHeaderNav(i)"
            >
              {{nav.title}}
            </router-link>
          </li>
        </ul>
        <div class="dialog-icon-placeholder">
          <span
            class="dialog-icon"
            @click="visible = !visible"
          >
            <mi-icon
              class="down-icon"
              :class="{'dialog-show':visible}"
              name="down"
            >
            </mi-icon>
          </span>
        </div>
        <transition name="height">
          <div class="dialog" v-if="visible">
            <div class="all">全部</div>
            <ul>
              <li
                v-for="nav in headerNav"
                :key="nav.key"
                @click="onClickTag(nav.path)"
              >
                <span :class="activeTab(nav.path)">{{nav.title}}</span>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </mui-header>
    <mui-content class="mi-content">
      <transition :name="reverse?'slide-reverse':'slide'">
        <router-view class="category" :style="randomColor()"></router-view>
      </transition>
      <transition name="fade">
        <div class="mask" @click="visible=false" v-if="visible"></div>
      </transition>
    </mui-content>
    <mui-footer class="mi-footer">
      <footer-nav :footer-nav="footerNav"></footer-nav>
    </mui-footer>
  </mui-layout>
</template>

<script>
  import MiIcon from 'components/icon/MiIcon';
  import { MuiLayout, MuiAside, MuiContent, MuiFooter, MuiHeader } from 'components/layout';
  import FooterNav from 'components/footerNav/FooterNav';
  import { footerNav, headerNav } from '@/config/navConfig';
  import scrollTo from 'helpers/dom/scroll';

  export default {
    name: 'MiHome',
    components: { MiIcon, MuiLayout, MuiContent, MuiHeader, MuiFooter, MuiAside, FooterNav },
    data () {
      return {
        headerNav,
        footerNav,
        reverse: false,
        visible: false
      };
    },
    watch: {
      '$route.fullPath' (newVal, oldVal) {
        const prevIndex = headerNav.findIndex(nav => nav.path === oldVal);
        const nextIndex = headerNav.findIndex(nav => nav.path === newVal);
        this.reverse = nextIndex < prevIndex;
      }
    },
    mounted () {
    },
    methods: {
      activeTab (path) {
        if (path === this.$route.fullPath) {
          return 'active';
        }
        return '';
      },
      randomColor () {
        const getRandomRgb = () => {
          return Array.apply(null, { length: 3 }).map(item => Math.random() * 255).join(',');
        };
        return {
          backgroundColor: `rgba(${getRandomRgb()})`,
          color: '#fff',
          fontSize: '20px'
        };
      },
      onClickTag (path) {
        this.visible = false;
        this.$router.push(path);
      },
      onClickHeaderNav (i) {
        const element = this.$refs.navWrapper;
        let sum = 0;
        for (let j = 0; j < element.children.length; j++) {
          sum += element.children[j].offsetWidth;
        }
        const maxScrollLeft = sum - element.offsetWidth;
        const { left, width } = element.children[i].getBoundingClientRect();
        const distance = left - element.offsetWidth / 2 + width / 2;
        const to = distance + element.scrollLeft;
        scrollTo(to, element, maxScrollLeft, element.children[i]);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .mi-home {
    .mi-header {
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2);
    }
    .header-top {
      height: 42px;
      display: flex;
      align-items: center;
      color: $text-color;
      .logo-icon,
      .mine-icon {
        margin: 0 $space-md;
        font-size: 24px;
      }
      .logo-icon {
        color: $main-color;
      }
    }
    .dialog-icon-placeholder {
      position: relative;
      width: 34px;
      height: 28px;
      background-color: $bgc-color;
      &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 100%;
        width: 20px;
        height: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.002), $bgc-color);
      }
    }
    .dialog-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      width: 34px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background-color: $bgc-color;
      color: $light-text;
      z-index: 2;
      .down-icon {
        transition: transform 250ms;
      }
      .dialog-show {
        transform: rotate(180deg);
      }
    }
    .dialog {
      position: absolute;top: 0;left: 0;width: 100%;
      background-color: $bgc-color;
      z-index: 1;
      padding: 0 $space-md;
      max-height: 200px;
      overflow: hidden;
      .all {
        margin-top: $space-md;
        font-size: $font-lg;
        color: #3c3c3c;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: $space-md;
        margin-left: -$space-md;
        overflow: auto;
      }
      li {
        margin-top: $space-md;
        flex-shrink: 0;
        width: 25%;
        text-align: center;
        padding-left: $space-md;
        span {
          font-size: $font-md;
          display: inline-block;
          vertical-align: top;
          line-height: 28px;
          border: 1px solid $border-color;
          background-color: $white;
          border-radius: $border-radius-sm;
          width: 100%;
          color: $text-color;
        }
        span.active {
          background-color: #fde0d5;
          border-color: #ff6700;
          color: #ff6700;
        }
      }
      &.height-enter,
      &.height-leave-to {
        max-height: 0;
      }
      &.height-enter-active,
      &.height-leave-active {
        transition: max-height 250ms;
      }
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .2);
      bottom: 0;
      &.fade-enter,
      &.fade-leave-to {
        opacity: 0;
      }
      &.fade-enter-active,
      &.fade-leave-active {
        transition: opacity 250ms;
      }
    }
    .search {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 8px $space-sm;
      background-color: $white;
      font-size: $font-lg;
      border-radius: $border-radius-sm;
      color: rgba(0, 0, 0, .3);
    }
    .search-icon {
      margin-right: $space-sm;
    }
    .header-nav {
      position: relative;
      display: flex;
    }
    .nav-wrapper {
      display: flex;
      flex: 1;
      color: $text-color;
      overflow: auto;
      li {
        padding: 0 13px;flex-shrink: 0;
        a {
          position: relative;
          display: inline-block;
          vertical-align: top;
          line-height: 30px;
          &.active {color: $main-color;}
          &.active::after {
            content: '';
            position: absolute;bottom: 0;left: 0;
            width: 100%;height: 2px;background: $main-color;
          }
        }
      }
    }
    .category {
      min-height: 100%;
      &.slide-enter {
        transform: translateX(100%);
        opacity: 0;
      }
      &.slide-reverse-enter {
        opacity: 0;
        transform: translateX(-100%);
      }
      &.slide-enter-active,
      &.slide-leave-active {
        transition: all 250ms;
      }
      &.slide-leave-active {
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
      }
      &.slide-reverse-enter-active,
      &.slide-reverse-leave-active {
        transition: all 250ms;
      }
      &.slide-reverse-leave-active {
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
      }
      &.slide-leave-to {
        transform: translateX(-100%);
      }
      &.slide-reverse-leave-to {
        transform: translateX(100%);
      }
    }
    .mi-content {
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
