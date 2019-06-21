import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = [
  { path: '/', redirect: '/index' },
  {
    name: 'index',
    path: '/index',
    component: () => import(/* webpackChunkName: "home"*/'views/home/MiHome')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login"*/'views/login/MiLogin')
  },
];
export default new Router({ routes });
