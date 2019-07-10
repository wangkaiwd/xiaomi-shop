import Vue from 'vue';
import MuiDialog from './MuiDialog';

const initInstance = (options) => {
  const componentClass = Vue.extend(MuiDialog);
  const { message, ...restOptions } = options;
  const instance = new componentClass({
    propsData: restOptions
  });
  instance.$slots.default = [message];
  instance.$mount();
  document.body.appendChild(instance.$el);
  return instance;
};

const Dialog = (options) => {
  options.visible = true;
  initInstance(options);
};

Dialog.confirm = Dialog;

export default Dialog;