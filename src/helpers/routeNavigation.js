/**
 * Created by wangkai on 2019-07-02
 */

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store/store';
import router from '@/router/router';

router.beforeEach((to, from, next) => {
  if (!from.name) {
    store.commit('changeLoading', true);
  }
  NProgress.start();
  next();
});
router.afterEach((to, from) => {
  if (!from.name) {
    store.commit('changeLoading', false);
  }
  NProgress.done();
});
