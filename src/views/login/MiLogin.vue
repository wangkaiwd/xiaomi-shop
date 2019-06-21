<template>
  <div class="mi-login">
    <div class="mi-login-header">
      <div class="mi-login-logo">
        <mi-icon name="logo"></mi-icon>
      </div>
      <h3 class="mi-login-title">
        小米账号登录
      </h3>
    </div>
    <div class="mi-login-input">
      <div class="mi-login-input-wrapper">
        <div class="mi-login-input-first-wrapper">
          <span class="mi-login-phone-prefix">
            +86 <mi-icon class="mi-login-phone-prefix-icon" name="right"></mi-icon>
          </span>
          <input class="mi-login-input-first" type="text" placeholder="手机号码">
        </div>
        <div class="mi-login-input-second-wrapper">
          <input class="mi-login-input-second" type="text" placeholder="短信验证码">
          <span class="mi-login-get-code">获取验证码</span>
        </div>
      </div>
      <div class="mi-login-buttons">
        <button class="mi-login-button-instant">立即登录/注册</button>
        <button class="mi-login-button-switch">用户名密码登录</button>
      </div>
    </div>
    <div class="mi-login-mode">
      <div class="mi-login-mode-text">
        <span class="mi-login-line-left"></span>
        <span class="mi-login-text-center">其它方式登录</span>
        <span class="mi-login-line-right"></span>
      </div>
      <div class="mi-login-mode-icons">
        <mi-icon name="sina"></mi-icon>
        <mi-icon name="alipay"></mi-icon>
        <mi-icon name="wechat"></mi-icon>
      </div>
    </div>
    <div class="mi-login-footer">
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
  import MiIcon from 'components/icon/MiIcon';

  export default {
    name: 'MiLogin',
    components: { MiIcon },
    data () {
      return {
        loginWay: 'phone'
      };
    },
    computed: {
      instantText () {

      },
      switchText () {

      },
    }
  };
</script>

<style lang="scss" scoped>
  .mi-login {
    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px $space-xl 0;
    }
    &-logo {font-size: 48px;color: $main-color;margin-bottom: $space-lg;}
    &-title {font-size: $font-xl;}
    &-input {margin-top: $space-sm;padding: 0 $space-lg;}
    &-input-wrapper {display: flex;flex-direction: column;}
    &-input-first-wrapper,
    &-input-second-wrapper {display: flex;align-items: center;border-bottom: 1px solid $border-color;}
    &-phone-prefix {
      font-size: $font-xl;height: 100%;display: flex;align-items: center;
      justify-content: center;color: $light-text;padding-right: $space-md;
    }
    &-phone-prefix-icon {font-size: $font-lg;}
    &-get-code {color: $blue;}
    &-input-first,
    &-input-second {
      &::placeholder {color: $light-text;}
      flex: 1;padding: $space-lg 0;font-size: $font-xl;
    }
    &-buttons {display: flex;flex-direction: column;}
    &-button-instant,
    &-button-switch {
      margin-top: $space-xxl;font-size: $font-xl;width: 100%;padding: $space-sm 0;
      border: 1px solid $border-color;border-radius: $border-radius-md;
    }
    &-button-instant {background-color: $main-color;color: $white;}
    &-button-switch {background-color: $white;}
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
      position: fixed;bottom: 0;left: 0;
      width: 100%;height: 90px;
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
