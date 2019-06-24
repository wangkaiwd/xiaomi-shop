<template>
  <mui-layout class="mi-home">
    <mui-header class="mi-header">
      <div class="header-top">
        search
      </div>
      <div class="header-nav">
        <ul class="nav-wrapper">
          <li>
            <router-link to="/index" :exact="true" active-class="active">手机</router-link>
          </li>
          <li>
            <router-link to="/index/computer" active-class="active">电脑</router-link>
          </li>
          <li>
            <router-link to="/index/video" active-class="active">电视</router-link>
          </li>
          <li>
            <router-link to="/login" active-class="active">内容4</router-link>
          </li>
          <li>
            <router-link to="/login" active-class="active">内容5</router-link>
          </li>
          <li>
            <router-link to="/login" active-class="active">内容6</router-link>
          </li>
          <li>
            <router-link to="/login" active-class="active">内容7</router-link>
          </li>
          <li>
            <router-link to="/login" active-class="active">内容8</router-link>
          </li>
        </ul>
      </div>
    </mui-header>
    <mui-content class="mi-content">
      <router-view class="category"></router-view>
    </mui-content>
    <mui-footer class="mi-footer">footer</mui-footer>
  </mui-layout>
</template>

<script>
  import MiIcon from 'components/icon/MiIcon';
  import { MuiLayout, MuiAside, MuiContent, MuiFooter, MuiHeader } from 'components/layout';

  export default {
    name: 'MiHome',
    components: { MiIcon, MuiLayout, MuiContent, MuiHeader, MuiFooter, MuiAside },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .mi-home {
    .nav-wrapper {
      background-color: pink;
      display: flex;
      width: 100%;
      overflow: auto;
      li {
        padding: 0 13px;flex-shrink: 0;
        a {
          position: relative;
          display: inline-block;
          vertical-align: top;
          line-height: 30px;
          &.active:after {
            position: absolute;content: '';bottom: 0;left: 0;
            width: 100%;height: 2px;background: blue;
          }
        }
      }
    }
    .mui-content {
      overflow: auto;
    }
  }
</style>
