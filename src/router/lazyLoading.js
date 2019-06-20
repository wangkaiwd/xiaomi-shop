const lazyLoading = (dir) => () => import(`views/${dir}`);
export default lazyLoading;
