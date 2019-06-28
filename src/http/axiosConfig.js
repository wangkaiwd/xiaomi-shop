/**
 * Created by wangkai on 2019-06-27
 */

import axios from 'axios';
import store from 'store/store';

const http = axios.create({
  baseURL: 'https://easy-mock.com/mock/5d142f6686ff3d05898bef38/xiaomi',
  timeout: 10000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});

http.interceptors.request.use(
  (config) => {
    store.commit('changeLoading', true);
    return config;
  },
  error => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    store.commit('changeLoading', false);
    if (status === 200) {
      if (data.code === 0) {
        return response.data;
      }
      return Promise.reject(response);
    }
    return Promise.reject(response);
  },
  error => {
    store.commit('changeLoading', false);
    return Promise.reject(error);
  }
);
export default http;

// 常见错误：
// 1. 断网
// 2. 网络请求失败（服务器异常）
// 3. 请求超时
// 4. 请求数据成功后，数据是其它的成功情况，这时候需要我们手动处理错误
