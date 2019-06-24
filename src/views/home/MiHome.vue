<template>
  <mui-layout class="mi-home">
    <mui-header class="mi-header">
      <div class="header-top">
        <mi-icon class="logo-icon" name="logo"></mi-icon>
        <div class="search">
          <mi-icon class="search-icon" name="search"></mi-icon>
          <span>搜索商品名称</span>
        </div>
        <mi-icon class="mine-icon" name="mine"></mi-icon>
      </div>
      <div class="header-nav">
        <ul class="nav-wrapper">
          <li
            v-for="nav in headerNav"
            :key="nav.key"
          >
            <router-link
              :to="nav.key"
              :exact="nav.exact"
              :active-class="nav.activeClass || 'active'"
            >
              {{nav.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </mui-header>
    <mui-content class="mi-content">
      <transition :name="reverse?'slide-reverse':'slide'">
        <router-view class="category"></router-view>
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

  export default {
    name: 'MiHome',
    components: { MiIcon, MuiLayout, MuiContent, MuiHeader, MuiFooter, MuiAside, FooterNav },
    data () {
      return {
        headerNav,
        footerNav,
        reverse: false
      };
    },
    watch: {
      '$route.path' (newVal, oldVal) {
        const prevIndex = headerNav.findIndex(nav => nav.key === oldVal);
        const nextIndex = headerNav.findIndex(nav => nav.key === newVal);
        this.reverse = nextIndex < prevIndex;
      }
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .mi-home {
    .header-top {
      height: 42px;
      display: flex;
      align-items: center;
      background-color: $bgc-color;
      color: $text-color;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2);
      .logo-icon,
      .mine-icon {
        margin: 0 $space-md;
        font-size: 24px;
      }
      .logo-icon {
        color: $main-color;
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
    .nav-wrapper {
      background-color: $bgc-color;
      display: flex;
      width: 100%;
      overflow: auto;
      color: $text-color;
      li {
        padding: 0 13px;flex-shrink: 0;
        a {
          position: relative;
          display: inline-block;
          vertical-align: top;
          line-height: 30px;
          &.active {color: $main-color;}
          &.active:after {
            position: absolute;content: '';bottom: 0;left: 0;
            width: 100%;height: 2px;background: $main-color;
          }
        }
      }
    }
    .category {
      height: 100%;
      &.slide-enter {
        transform: translateX(100%);
      }
      &.slide-reverse-enter {
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
    .mui-content {
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
