<template>
  <mui-layout class="mi-mine">
    <mui-content>
      <header>
        <img src="~img/avatar.png" alt="">
        <div class="login-and-register">
          <span>登录</span>/<span>注册</span>
        </div>
      </header>
      <div class="my-order">
        <div class="order">
          <h3 class="my-order-text">我的订单</h3>
          <span class="all-order-text">
            全部订单
            <mui-icon class="right-icon" name="right"></mui-icon>
          </span>
        </div>
        <div class="pay">
          <ul>
            <li>
              <span><mui-icon name="pay"></mui-icon></span>
              <span>代付款</span>
            </li>
            <li>
              <span><mui-icon name="delivery"></mui-icon></span>
              <span>待收货</span>
            </li>
            <li>
              <span><mui-icon name="settings"></mui-icon></span>
              <span>退换修</span>
            </li>
          </ul>
        </div>
      </div>
    </mui-content>
    <mui-footer>
      <footer-nav :footer-nav="footerNav"></footer-nav>
    </mui-footer>
  </mui-layout>
</template>

<script>
  import { MuiLayout, MuiHeader, MuiFooter, MuiContent } from 'components/layout';
  import FooterNav from 'components/footerNav/FooterNav';
  import { footerNav } from '@/config/navConfig';
  import MuiIcon from 'components/icon/MuiIcon';
  // [id:1,list:[{iconName:'',iconColor:'',title: '',link:''}]]
  export default {
    name: 'MiMine',
    components: { MuiLayout, MuiHeader, MuiFooter, MuiContent, FooterNav, MuiIcon },
    data () {
      return {
        footerNav
      };
    }
  };
</script>

<style lang="scss" scoped>
  .mi-mine {
    header {
      display: flex;
      align-items: center;
      padding: $space-lg;
      img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-right: $space-sm;
      }
      background-color: $main-color;
      color: $white;
      font-size: $font-sm;
    }
    .my-order {
      background-color: $white;
      color: $dark-text;
      .order {
        padding: 0 $space-lg;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 42px;
        border-bottom: 1px solid $border-color;
      }
      .all-order-text {font-size: $space-xs;}
      .right-icon {
        color: $text-color;
      }
    }
    .pay {
      padding: 0 40px;
      background-color: $white;
      ul {
        display: flex;
        justify-content: space-between;
        height: 88px;
      }
      ul li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span:first-child {
          font-size: 26px;
          color: $light-text;
          margin-bottom: $space-xs;
        }
        span:last-child { font-size: $font-sm; color: $dark-text;}
      }
    }
  }
</style>
