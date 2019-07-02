/**
 * Created by wangkai on 2019-07-02
 */
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import loadingImg from 'assets/img/mi-img-loading.gif';
import './routeNavigation';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadingImg,
  attempt: 8
});

if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole');
  const vConsole = new VConsole();
}

