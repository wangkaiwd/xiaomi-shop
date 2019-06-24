<template>
  <mui-layout class="mi-home">
    <mui-header class="mi-header">
      <div class="header-top">
        search
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
      <footer-nav></footer-nav>
    </mui-footer>
  </mui-layout>
</template>

<script>
  import MiIcon from 'components/icon/MiIcon';
  import { MuiLayout, MuiAside, MuiContent, MuiFooter, MuiHeader } from 'components/layout';
  import FooterNav from 'components/footerNav/FooterNav';

  const headerNav = [
    { key: '/index', title: '手机', exact: true },
    { key: '/index/computer', title: '电脑' },
    { key: '/index/video', title: '电视' },
  ];
  export default {
    name: 'MiHome',
    components: { MiIcon, MuiLayout, MuiContent, MuiHeader, MuiFooter, MuiAside, FooterNav },
    data () {
      return {
        headerNav,
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
