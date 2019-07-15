const path = require('path');
const fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const webpack = require('webpack');
const resolve = dir => path.resolve(__dirname, `src/${dir}/`);
const buildMode = () => {
  const argv = process.argv;
  return argv[argv.indexOf('--project-mode') + 1];
};

const isPro = process.env.NODE_ENV === 'production';
const isAnalysis = process.env.VUE_APP_SELF_MODE === 'analysis';
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  publicPath: isPro ? '/xiaomi-shop/' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同。也可以通过vue cli的mode来实现
    // 这里用到了webpack.DefinePlugin
    config.plugin('define').tap(args => {
      // 这里必须要使用`"string"`,字符串必须要单双引号俩层嵌套，否则使用到process.env的时候会报错
      // 文档：这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引用。通常，有俩种方式
      // 来达到这个效果，使用'"production"',或者使用JSON.stringify('production')
      args[0]['process.env'].MODE = `"${buildMode()}"`;
      return args;
    });
    // 这里的具体配置都可以在文档的链接中找到
    // 配置别名: 这里配置的多了会影响打包性能
    config.resolve
      .alias
      .set('@', resolve(''))
      .set('api', resolve('api'))
      .set('helpers', resolve('helpers'))
      .set('views', resolve('views'))
      .set('components', resolve('components'))
      .set('assets', resolve('assets'))
      .end();
    // // 扩展名省略
    // .extensions
    // .add('.scss');
  },
  css: {
    loaderOptions: {
      // 自动引入全局scss
      sass: {
        data: `
          @import "assets/styles/_mixins.scss";
          @import "assets/styles/_vars.scss";
        `
      }
    }
  },
  pwa: {
    // 设置favicon图标路径
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  configureWebpack: config => {
    const plugins = [
      new HardSourceWebpackPlugin(),
    ];
    if (isPro) {
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']//移除console
            }
          },
          sourceMap: false,
          parallel: true
        }),
        // 开启gzip
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    if (isAnalysis) { // 分析模式加载打包分析插件
      plugins.push(new BundleAnalyzerPlugin());
    }
    config.plugins = [
      ...config.plugins,
      ...plugins
    ];
  }
};
