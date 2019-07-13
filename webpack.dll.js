const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'production',
  entry: {
    'vendor_vue': ['vue', 'vuex', 'vue-router'],
    'vendor_ui': ['vue-lazyload', 'vue-awesome-swiper', 'nprogress'],
    'vendor_tools': ['register-service-worker', 'axios', 'vconsole']
  },
  output: {
    path: path.resolve(__dirname, './dll'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, './dll/[name]_manifest.json')
    })
  ]
};
