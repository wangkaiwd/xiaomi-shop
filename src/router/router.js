import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = [
  { path: '/', redirect: '/index' },
  {
    // name: 'index',
    path: '/index',
    component: () => import(/* webpackChunkName: "home"*/'views/home/MiHome'),
    children: [
      // { name: 'recommend', path: '/index/recommend', }
      { name: 'phone', path: '', component: () => import('views/homeCategory/MiPhone') },
      { name: 'computer', path: '/index/computer', component: () => import('views/homeCategory/MiComputer') },
      { name: 'video', path: '/index/video', component: () => import('views/homeCategory/MiVideo') }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login"*/'views/login/MiLogin')
  },
];
export default new Router({ routes });
