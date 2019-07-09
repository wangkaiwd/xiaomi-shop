/**
 * Created by wangkai on 2019-07-02
 */
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import MuiToast from 'components/toast';
import loadingImg from 'assets/img/lazyLoading.gif';
import './routeNavigation';

Vue.use(VueLazyload, {
  loading: loadingImg,
  attempt: 8
});

Vue.use(MuiToast);

if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole');
  const vConsole = new VConsole();
}

