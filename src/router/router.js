import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: () => import(/* webpackChunkName: "home"*/'views/home/MiHome'),
    children: [
      {
        name: 'recommend',
        path: '',
        component: () => import('views/homeCategory/MiRecommend'),
        meta: { title: '推荐' }
      },
      {
        name: 'phone',
        path: 'phone',
        component: () => import('views/homeCategory/MiPhone'),
        meta: { title: '手机' }
      },
      {
        name: 'computer',
        path: 'computer',
        component: () => import('views/homeCategory/MiComputer'),
        meta: { title: '电脑' }
      },
      {
        name: 'video',
        path: 'video',
        component: () => import('views/homeCategory/MiVideo'),
        meta: { title: '电视' }
      },
      {
        name: 'around',
        path: 'around',
        component: () => import('views/homeCategory/MiAround'),
        meta: { title: '生活周边' }
      },
      {
        name: 'graduation',
        path: 'graduation',
        component: () => import('views/homeCategory/MiGraduation'),
        meta: { title: '毕业季' }
      },
      {
        name: 'intelligence',
        path: 'intelligence',
        component: () => import('views/homeCategory/MiIntelligence'),
        meta: { title: '智能' }
      },
      {
        name: 'houseElectrical',
        path: 'houseElectrical',
        component: () => import('views/homeCategory/MiHouseElectrical'),
        meta: { title: '家电' }
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import(/* webpackChunkName: "category"*/'views/category/MiCategory'),
    meta: { title: '分类', showHeader: true }
  },
  {
    name: 'shopCart',
    path: '/shopCart',
    component: () => import(/* webpackChunkName: "category"*/'views/shopCart/MiShopCart'),
    meta: { title: '购物车', showHeader: true }
  },
  {
    name: 'search',
    path: '/search',
    component: () => import(/* webpackChunkName: "category"*/'views/search/MiSearch'),
    meta: { title: '搜索' }
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import(/* webpackChunkName: "category"*/'views/mine/MiMine'),
    meta: { title: '我的' }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login"*/'views/login/MiLogin'),
    meta: { title: '登录' }
  },
];
export default new Router({ routes });
