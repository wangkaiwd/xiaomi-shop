import { routes } from '@/router/router';

const createHeaderNav = (routes) => {
  const indexRoute = routes.find(route => route.path === '/index');
  return indexRoute.children.map(route => {
    const isDefaultChild = !route.path;
    let path = null;
    if (route.path.indexOf('/') === 0) {
      path = route.path;
    } else {
      path = `/index/${route.path}`;
    }
    return {
      key: route.name,
      path: isDefaultChild ? '/index' : path,
      title: route.meta.title,
      exact: isDefaultChild
    };
  });

};
const headerNav = createHeaderNav(routes);
const footerNav = [
  { key: '/index', title: '首页', icon: 'home' },
  { key: '/category', title: '分类', icon: 'category' },
  { key: '/shopCart', title: '购物车', icon: 'shopCart' },
  { key: '/mine', title: '我的', icon: 'mine' },
];

export { headerNav, footerNav };
