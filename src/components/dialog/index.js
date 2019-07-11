import Vue from 'vue';
import MuiDialog from './MuiDialog';

let instance = null;
const initInstance = (options) => {
  const componentClass = Vue.extend(MuiDialog);
  const { message, ...restOptions } = options;
  const instance = new componentClass({
    propsData: restOptions
  });
  instance.$slots.default = [message];
  instance.$mount();
  document.body.appendChild(instance.$el);
  // vm.$on: 监听当前实例上的自定义事件。事件可以由vm.$emit触发,实现通过点击关闭按钮时关闭弹窗
  instance.$on('change', visible => {
    instance.visible = visible;
  });
  return instance;
};
const closeDialog = () => {
  instance.$destroy();
  instance.$el.remove();
  instance = null;
};

const Dialog = (options) => {
  if (instance) {
    closeDialog();
  }
  options.visible = true;
  instance = initInstance(options);
  return new Promise((resolve, reject) => {
    // 这里的instance是dialog组件的实例，我们不仅可以使用上面的方法，还可以为其添加属性
    // 之后在组件中可以通过this来调用
    instance.resolve = resolve;
    instance.reject = reject;
  });
};
Dialog.close = () => {
  if (instance) {
    instance.visible = false;
    closeDialog();
  }
};

Dialog.confirm = Dialog;
Dialog.alert = (options) => {
  options.showCancelButton = false;
  return Dialog(options);
};

export default Dialog;