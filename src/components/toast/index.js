import Toast from './MuiToast';

let toastInstance = null;
// 比较关键的几个点：
//    1. 组件实例化之后，可以直接调用组件里的属性和方法
//    2. 如何编程式生成组件
export default {
  install (Vue) {
    Vue.prototype.$toast = (options) => {
      if (toastInstance) { // 这里可以通过实例来直接调用组件中的方法
        toastInstance.closeToast();
      }
      const componentClass = Vue.extend(Toast);
      toastInstance = new componentClass({
        propsData: options,
      });
      toastInstance.$mount();
      document.body.appendChild(toastInstance.$el);
      return toastInstance.closeToast;
    };
  }
};
