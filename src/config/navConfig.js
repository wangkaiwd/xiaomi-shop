const headerNav = [
  { key: 'recommend', path: '/index', title: '推荐', exact: true },
  { key: 'phone', path: '/index/phone', title: '手机' },
  { key: 'computer', path: '/index/computer', title: '电脑' },
  { key: 'video', path: '/index/video', title: '电视' },
  { key: 'recommend1', path: '/index?1', title: '推荐1', exact: true },
  { key: 'phone1', path: '/index/phone?1', title: '手机1' },
  { key: 'computer1', path: '/index/computer?1', title: '电脑1' },
  { key: 'video1', path: '/index/video?1', title: '电视1' },
  { key: 'recommend2', path: '/index?2', title: '推荐2', exact: true },
  { key: 'phone2', path: '/index/phone?2', title: '手机2' },
  { key: 'computer2', path: '/index/computer?2', title: '电脑2' },
  { key: 'video2', path: '/index/video?2', title: '电视2' },
];

const footerNav = [
  { key: '/index', title: '首页', icon: 'home' },
  { key: '/category', title: '分类', icon: 'category' },
  { key: '/shopCart', title: '购物车', icon: 'shopCart' },
  { key: '/mine', title: '我的', icon: 'mine' },
];

export { headerNav, footerNav };
