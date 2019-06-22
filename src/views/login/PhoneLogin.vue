<template>
  <div class="phone-login">
    <div class="input">
      <div class="input-wrapper">
        <transition name="slide-left" appear>
          <span class="phone-prefix">
            +86 <mi-icon class="prefix-icon" name="right"></mi-icon>
          </span>
        </transition>
        <input
          type="text"
          placeholder="手机号码"
          v-model="phoneNo"
        >
      </div>
      <div class="input-wrapper">
        <input type="text" v-model="codeNo" placeholder="短信验证码">
        <span
          class="get-code"
          @click="getCode"
          :class="{isCountDown}"
        >
          {{codeText}}
        </span>
      </div>
    </div>
    <div class="input-error">
      <mi-icon name="error"></mi-icon>
      <span class="error-text">输入错误</span>
    </div>
    <div class="buttons">
      <button>立即登录/注册</button>
      <button @click="loginToggle">用户名密码登录</button>
    </div>
  </div>
</template>

<script>
  import MiIcon from 'components/icon/MiIcon';

  export default {
    name: 'PhoneLogin',
    components: { MiIcon },
    props: {},
    data () {
      return {
        phoneNo: '',
        codeNo: '',
        codeText: '获取验证码',
        timerId: null,
        isCountDown: false,
        time: 60,
      };
    },
    methods: {
      loginToggle () {
        this.$emit('loginToggle', false);
      },
      getCode () {
        // 这里可以通过setTimeout来模拟setInterval
        if (this.timerId) return;
        this.time = 60;
        this.countDownStart();
        this.timerId = setInterval(() => {
          if (this.time <= 0) {
            this.countDownEnd();
            return;
          }
          this.countDownStart();
        }, 1000);
      },
      countDownEnd () {
        clearInterval(this.timerId);
        this.timerId = null;
        this.codeText = '重新发送';
        this.isCountDown = false;
      },
      countDownStart () {
        this.time--;
        this.codeText = `重新发送(${this.time})`;
        this.isCountDown = true;
      }
    },
    beforeDestroy () {
      this.countDownEnd();
    }
  };
</script>

<style lang="scss" scoped>
  .phone-login {
    margin-top: $space-sm;padding: 0 $space-lg;
    .input {
      input {
        &::placeholder {color: $light-text;}
        flex: 1;padding: $space-lg 0;font-size: $font-xl;
      }
    }
    .phone-prefix {
      font-size: $font-xl;height: 100%;display: flex;align-items: center;
      justify-content: center;color: $light-text;padding-right: $space-md;
      &.slide-left-enter {
        transform: translateX(-100%);
      }
      &.slide-left-enter-active {
        transition: all .4s;
      }
    }
    .prefix-icon {font-size: $font-lg;}
    .get-code {
      display: inline-block;
      vertical-align: top;
      padding: $space-xs;
      color: $blue;
      &.isCountDown {color: $light-text;}
    }
    .input-wrapper {
      overflow: hidden;
      display: flex;align-items: center;border-bottom: 1px solid $border-color;
      &.hasError {border-color: $main-color;}
    }
    .input-error {
      display: flex;
      align-items: center;
      line-height: 1.15;
      padding-top: $space-lg;
      color: $main-color;
    }
    .error-text {
      margin-left: $space-xs;
    }
    .buttons {
      display: flex;flex-direction: column;
      button {
        margin-top: $space-xxl;font-size: $font-xl;width: 100%;padding: $space-sm 0;
        border: 1px solid $border-color;border-radius: $border-radius-md;
        &:first-child {
          background-color: $main-color;color: $white;
        }
        &:last-child {
          background-color: $white;
        }
      }
    }
  }
</style>
