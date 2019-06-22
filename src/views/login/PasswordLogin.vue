<template>
  <div class="password-login">
    <div class="input">
      <div class="input-wrapper">
        <input
          type="text"
          placeholder="邮箱/手机号码/小米ID"
          v-model="username"
        >
      </div>
      <div class="input-wrapper">
        <input v-model="password" :type="passwordType" placeholder="密码">
        <span class="eye" :class="{isEyeOpen}" @click="onClickEye">
            <mi-icon name="eye"></mi-icon>
          </span>
      </div>
    </div>
    <div class="input-error">
      <mi-icon name="error"></mi-icon>
      <span class="error-text">输入错误</span>
    </div>
    <div class="buttons">
      <button>登录</button>
      <button @click="loginToggle">手机短信登录/注册</button>
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
        username: '',
        password: '',
        isEyeOpen: false
      };
    },
    computed: {
      passwordType () {
        return this.isEyeOpen ? 'text' : 'password';
      }
    },
    methods: {
      loginToggle () {
        this.$emit('loginToggle', true);
      },
      onClickEye () {
        this.isEyeOpen = !this.isEyeOpen;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .password-login {
    margin-top: $space-sm;padding: 0 $space-lg;
    .input {
      input {
        &::placeholder {color: $light-text;}
        flex: 1;padding: $space-lg 0;font-size: $font-xl;
      }
    }
    .input-wrapper {
      display: flex;align-items: center;border-bottom: 1px solid $border-color;
      &.hasError {border-color: $main-color;}
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
    .eye {
      display: inline-block;padding: $space-xs;
      vertical-align: top;
      color: #4d4d4d; font-size: $space-xl;
      &.isEyeOpen {
        color: $main-color;
      }
    }
  }
</style>
