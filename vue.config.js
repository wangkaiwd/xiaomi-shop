const path = require('path');
const resolve = dir => path.resolve(__dirname, `src/${dir}/`);
const argv = process.argv;
const mode = argv[argv.indexOf('--project-mode') + 1];
const isPro = process.env.NODE_ENV === 'production';
module.exports = {
  // 前端配置
  // devServer: {
  //   // proxy: {
  //   //   '/api': {
  //   //     target: 'http://localhost:1234',
  //   //     ws: true,
  //   //     changeOrigin: true
  //   //   }
  //   // }
  //   // 只能将本地前端代码对应的服务地址进行代理
  //   // 设置代理时不用设置axios的baseURL的协议域名和端口号,否则会出错
  //   proxy: 'http://localhost:1234'
  // },
  // 关闭eslint
  lintOnSave: false,
  publicPath: isPro ? '/xiaomi-shop/' : '/',
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
    // 这里用到了webpack.DefinePlugin
    config.plugin('define').tap(args => {
      // 这里必须要使用`"string"`,字符串必须要单双引号俩层嵌套，否则使用到process.env的时候会报错
      // 文档：这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引用。通常，有俩种方式
      // 来达到这个效果，使用'"production"',或者使用JSON.stringify('production')
      args[0]['process.env'].MODE = `"${mode}"`;
      return args;
    });
    // 这里的具体配置都可以在文档的链接中找到
    // 配置别名
    config.resolve
      .alias
      .set('@', resolve(''))
      .set('api', resolve('api'))
      .set('helpers', resolve('helpers'))
      .set('http', resolve('http'))
      .set('views', resolve('views'))
      .set('components', resolve('components'))
      .set('assets', resolve('assets'))
      .set('styles', resolve('assets/styles'))
      .set('img', resolve('assets/img'))
      .set('filters', resolve('filters'))
      .set('mixins', resolve('mixins'))
      .set('store', resolve('store'))
      .set('layouts', resolve('layouts'))
      .set('router', resolve('router'))
      .end()
      // 扩展名省略
      .extensions
      .add('.scss');
  },
  css: {
    loaderOptions: {
      // 自动引入scss
      sass: {
        data: `
          @import "styles/_mixins.scss";
          @import "styles/_vars.scss";
        `
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico'
    }
  }
};
