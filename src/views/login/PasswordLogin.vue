<template>
  <div class="password-login">
    <div class="input">
      <div class="input-wrapper" :class="{hasError:errors.username}">
        <input
          @input="errors={}"
          type="text"
          placeholder="邮箱/手机号码/小米ID"
          v-model="formValues.username"
        >
      </div>
      <div class="input-wrapper" :class="{hasError:errors.password}">
        <input
          @input="errors={}"
          v-model="formValues.password"
          :type="passwordType"
          placeholder="密码"
        >
        <span class="eye" :class="{isEyeOpen}" @click="onClickEye">
            <mui-icon name="eye"></mui-icon>
          </span>
      </div>
    </div>
    <div class="input-error" v-if="hasError">
      <mui-icon name="error"></mui-icon>
      <span class="error-text">{{errorMsg}}</span>
    </div>
    <div class="buttons">
      <button @click="onSubmit">登录</button>
      <button @click="loginToggle">手机短信登录/注册</button>
    </div>
  </div>
</template>

<script>
  import validator, { noError } from 'helpers/validator';

  const constraints = [
    { key: 'username', required: true, message: '请输入账号' },
    { key: 'password', required: true, message: '请输入密码' }
  ];
  export default {
    name: 'PhoneLogin',
    props: {},
    data () {
      return {
        formValues: {
          username: '',
          password: '',
        },
        username: '',
        password: '',
        isEyeOpen: false,
        errors: {}
      };
    },
    computed: {
      passwordType () {
        return this.isEyeOpen ? 'text' : 'password';
      },
      hasError () {
        return this.errorMsg !== '';
      },
      errorMsg () {
        if (Object.values(this.errors)[0]) {
          return Object.values(this.errors)[0][0];
        }
        return '';
      }
    },
    methods: {
      loginToggle () {
        this.$emit('loginToggle', true);
      },
      onClickEye () {
        this.isEyeOpen = !this.isEyeOpen;
      },
      onSubmit () {
        this.errors = validator(this.formValues, constraints, true);
        if (!noError(this.errors)) {return;}
        this.$router.push('/index');
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
