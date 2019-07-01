import Vue from 'vue';
import App from './MiApp.vue';
import './registerServiceWorker';
import router from './router/router';
import store from './store/store';
import 'styles/base.scss';
import 'helpers/autoRegister';
import VueLazyload from 'vue-lazyload';
import loadingImg from 'assets/img/mi-img-loading.gif';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadingImg,
  attempt: 1
});

if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole');
  const vConsole = new VConsole();
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // h 是 createElement的一个简写，这里通过createElement来创建一个组件，并在页面中渲染
  render: h => h(App)
}).$mount('#app');
