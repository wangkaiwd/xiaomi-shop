<template>
  <mui-layout class="mi-mine">
    <mui-content class="mi-mine-content">
      <header>
        <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
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
      <mine-list
        v-for="lists in payList"
        :key="lists.id"
        :list="lists.list"
      >
      </mine-list>
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
  import MineList from 'views/mine/MineList';

  const payList = [
    {
      id: 1,
      list: [
        { id: 1, iconName: 'vip', iconColor: '#fdbf2d', title: '会员中心' },
        { id: 2, iconName: 'pay', iconColor: '#50bce0', title: '我的优惠' },
      ]
    },
    {
      id: 2,
      list: [
        { id: 1, iconName: 'service', iconColor: '#fa6b5e', title: '服务中心' },
        { id: 2, iconName: 'home', iconColor: '#fe8b43', title: '小米之家' },
      ]
    },
    { id: 3, list: [{ id: 3, iconName: 'f', iconColor: '#ffb300', title: 'F码通道' }] },
    { id: 4, list: [{ id: 4, iconName: 'settings', iconColor: '#818c99', title: '设置' }] },
  ];
  export default {
    name: 'MiMine',
    components: { MuiLayout, MuiHeader, MuiFooter, MuiContent, FooterNav, MuiIcon, MineList },
    data () {
      return {
        footerNav,
        payList
      };
    }
  };
</script>

<style lang="scss" scoped>
  .mi-mine {
    &-content {
      overflow: auto;
    }
    header {
      display: flex;
      align-items: center;
      padding: $space-lg;
      background-image: url("https://m.mi.com/static/img/bg.63c8e19851.png");
      background-color: #f37d0f;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-right: $space-sm;
        border: 3px solid hsla(0, 0%, 100%, .4);
      }
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
