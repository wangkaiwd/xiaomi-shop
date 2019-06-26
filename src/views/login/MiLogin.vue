<template>
  <div class="mi-login">
    <div class="mi-login-header">
      <div class="mi-login-logo">
        <mui-icon name="logo"></mui-icon>
      </div>
      <h3 class="mi-login-title">小米账号登录</h3>
    </div>
    <phone-login v-if="isPhoneLogin" @loginToggle="loginToggle"></phone-login>
    <password-login v-else @loginToggle="loginToggle"></password-login>
    <div class="mi-login-mode">
      <div class="mi-login-mode-text">
        <span class="mi-login-line-left"></span>
        <span class="mi-login-text-center">其它方式登录</span>
        <span class="mi-login-line-right"></span>
      </div>
      <div class="mi-login-mode-icons">
        <mui-icon name="sina"></mui-icon>
        <mui-icon name="alipay"></mui-icon>
        <mui-icon name="wechat"></mui-icon>
      </div>
    </div>
    <div class="mi-login-footer" ref="footer" :style="{top: `${footerTop}px`}">
      <ul class="mi-login-footer-text">
        <li>简体</li>
        <li>繁体</li>
        <li>English</li>
        <li>常见问题</li>
        <li>隐私政策</li>
      </ul>
    </div>
  </div>
</template>

<script>
  /*
  * 写业务和组件目前的一个心得：
  *   1. 类名不必要都加前缀，感觉看起来会不是很清晰
  *   2. 要通过各种并不会犯错的小技巧来进行降低工作量
  *   3. 其实这里的手机登录和密码登录应该进行拆分组件
  * */
  import MuiIcon from 'components/icon/MuiIcon';
  import PhoneLogin from './PhoneLogin';
  import PasswordLogin from './PasswordLogin';

  export default {
    name: 'MiLogin',
    components: { MuiIcon, PhoneLogin, PasswordLogin },
    data () {
      return {
        isPhoneLogin: true,
        footerTop: 0
      };
    },
    computed: {},
    mounted () {
      this.calculateTop();
    },
    methods: {
      loginToggle (status) {
        this.isPhoneLogin = status;
      },
      calculateTop () {
        const htmlHeight = document.documentElement.offsetHeight;
        const footerHeight = this.$refs.footer.offsetHeight;
        this.footerTop = htmlHeight - footerHeight;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mi-login {
    height: 100%;
    overflow: auto;
    position: relative;
    background-color: $white;
    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px $space-xl 0;
    }
    &-logo {font-size: 48px;color: $main-color;margin-bottom: $space-lg;}
    &-title {font-size: $font-xl;}
    &-mode {padding: 0 $space-lg;}
    &-mode-text {padding-top: 52px;display: flex;align-items: center;}
    &-line-left,
    &-line-right {display: inline-block;flex: 1;height: 1px;background-color: #f2f2f2;}
    &-text-center {padding: 0 2px;color: $light-text;font-size: $font-sm;}
    &-mode-icons {
      text-align: center;padding-top: $space-xl;font-size: 30px;
      svg {margin: 0 $space-sm;}
      svg:first-child {color: #ed9090;}
      svg:nth-child(2) {color: #6bb6ea;}
      svg:last-child {color: #00be00;}
    }
    &-footer {
      position: absolute;bottom: 0;left: 0;
      width: 100%;height: 90px;
      background-color: $white;
    }
    &-footer-text {
      display: flex;justify-content: center;
      li {
        position: relative;padding: 0 $space-sm;color: $light-text;
        &:not(:last-child)::after {
          content: '';position: absolute;top: 0;
          right: 0;background-color: $light-text;width: 1px;
          height: 100%;
        }
      }
    }
  }
</style>
