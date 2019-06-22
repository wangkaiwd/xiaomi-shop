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
    <!--<div class="mi-login-input">
      <div class="mi-login-input-wrapper">
        <div class="mi-login-input-first-wrapper">
          <transition name="slide-left" appear>
            <span class="mi-login-phone-prefix" v-if="loginConfig[loginWay].firstInput.hasPrefix">
              +86 <mi-icon class="mi-login-phone-prefix-icon" name="right"></mi-icon>
            </span>
          </transition>
          <input
            @change="errorMsg=''"
            class="mi-login-input-first"
            type="text"
            v-model="loginConfig[loginWay].firstInput.value"
            :placeholder="loginConfig[loginWay].firstInput.placeholder"
          >
        </div>
        <div class="mi-login-input-second-wrapper">
          <input
            @change="errorMsg=''"
            class="mi-login-input-second"
            :type="loginConfig[loginWay].secondInput.type"
            v-model="loginConfig[loginWay].secondInput.value"
            :placeholder="loginConfig[loginWay].secondInput.placeholder"
            :class="{hasError}"
          >
          <span
            v-if="loginWay === 'phone'"
            class="mi-login-get-code"
            @click="sendCode"
            :class="{isCountDown,hasError}"
          >
            {{loginConfig[loginWay].secondInput.codeText}}
          </span>
          <span v-else class="mi-login-eye" :class="{openEye}" @click="onClickEye">
            <mi-icon name="eye"></mi-icon>
          </span>
        </div>
      </div>
      <div class="mi-login-input-error" v-if="hasError">
        <mi-icon name="error"></mi-icon>
        <span class="mi-login-input-error-text">{{errorMsg}}</span>
      </div>
      <div class="mi-login-buttons">
        <button
          class="mi-login-button-instant"
          @click="onSubmit"
        >
          {{loginConfig[loginWay].instantButton}}
        </button>
        <button class="mi-login-button-switch" @click="switchLoginWay">
          {{loginConfig[loginWay].switchButton}}
        </button>
      </div>
    </div>-->
    <phone-login
      v-if="isPhoneLogin"
      @loginToggle="loginToggle"
    >
    </phone-login>
    <password-login
      v-else
      @loginToggle="loginToggle"
    >
    </password-login>
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
  /*
  * 写业务和组件目前的一个心得：
  *   1. 类名不必要都加前缀，感觉看起来会不是很清晰
  *   2. 要通过各种并不会犯错的小技巧来进行降低工作量
  *   3. 其实这里的手机登录和密码登录应该进行拆分组件
  * */
  import MiIcon from 'components/icon/MiIcon';
  import PhoneLogin from './PhoneLogin';
  import regExpConfig from 'helpers/regConfig';
  import PasswordLogin from './PasswordLogin';

  const loginConfig = {
    phone: {
      firstInput: {
        hasPrefix: true,
        placeholder: '手机号码',
        value: '',
      },
      secondInput: {
        type: 'text',
        placeholder: '短信验证码',
        codeText: '获取验证码',
        value: ''
      },
      instantButton: '立即登录/注册',
      switchButton: '用户名密码登录'
    },
    password: {
      firstInput: {
        hasPrefix: false,
        placeholder: '邮箱/手机号码/小米ID',
        value: ''
      },
      secondInput: {
        placeholder: '密码',
        iconName: 'eye',
        type: 'password',
        value: ''
      },
      instantButton: '登录',
      switchButton: '手机短信登录/注册'
    }
  };
  export default {
    name: 'MiLogin',
    components: { MiIcon, PhoneLogin, PasswordLogin },
    data () {
      return {
        isPhoneLogin: true
      };
    },
    computed: {},
    methods: {
      loginToggle (status) {
        this.isPhoneLogin = status;
      }
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
    /*&-input {margin-top: $space-sm;padding: 0 $space-lg;}
    &-input-wrapper {display: flex;flex-direction: column;overflow: hidden;}
    &-input-first-wrapper,
    &-input-second-wrapper {
      display: flex;align-items: center;border-bottom: 1px solid $border-color;
      &.hasError {border-color: $main-color;}
    }
    &-input-error {
      display: flex;
      align-items: center;
      line-height: 1.15;
      padding-top: $space-lg;
      color: $main-color;
    }
    &-input-error-text {
      margin-left: $space-xs;
    }
    &-phone-prefix {
      font-size: $font-xl;height: 100%;display: flex;align-items: center;
      justify-content: center;color: $light-text;padding-right: $space-md;
      !*&.slide-left-enter,
      &.slide-left-leave-to {
        transform: translateX(-100%);
      }
      &.slide-left-enter-active,
      &.slide-left-leave-active {
        transition: all .4s;
      }*!
      !*先去掉结束时的动画*!
      &.slide-left-enter {
        transform: translateX(-100%);
      }
      &.slide-left-enter-active {
        transition: all .4s;
      }
    }
    &-phone-prefix-icon {font-size: $font-lg;}
    &-get-code {
      color: $blue;
      &.isCountDown {
        color: $light-text;
      }
    }
    &-eye {
      color: #4d4d4d; font-size: $space-xl;
      &.openEye {
        color: $main-color;
      }
    }
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
    &-button-switch {background-color: $white;}*/
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
