/**
 * Created by wangkai on 2019-06-27
 */
import http from './axiosConfig';

const request = {
  get (url) {
    return (params) => {
      return http.get(url, { params });
    };
  },
  post (url) {
    return params => http.post(url, params);
  }
};

export default request;
