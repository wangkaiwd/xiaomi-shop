# 仿小米商城 -- `vue`通用组件实战
> 这是一个仿小米商城的`vue`全家桶项目，[点击预览](https://wangkaiwd.github.io/xiaomi-shop/)

项目环境介绍：  
* 系统：`macos`
* 包管理工具： `yarn`
* `Node`: `v12.4.0`

项目会完成的页面和功能：  
* 登录页面 -> 封装表单校验方法
* 首页 -> 实现前进后退路由动画
* 分类页 -> 使用第三方懒加载组件
* 详情 -> 封装`popup`组件
* 购物车 -> `vue`列表动画

项目中有适当加入一些动画来使交互更加丰富

项目涉及到的大概知识：  
* `vue 3.x`最新脚手架使用
* `webstorm`使用小技巧
* `webpack`配置优化
* `vue`通用组件封装
* `vw`移动端适配及踩坑实践
* `jsDOC`来为工具函数编写注释  
* `mockjs`进行数据模拟  
* 打包部署到`github page`  
......等等相关知识

在编写代码的过程中我会注意自己的代码规范以及命名的可读性，我也会在这个过程中边学习边记录。接下来让我们一起开启这一段令人期待的旅程吧！

## 项目创建
这里我们使用`vue`官方提供的`vue cli`来进行项目初始化：  
```npm
yarn global add @vue/cli
vue create xiaomi-shop
```
如果发现我们之前已经安装过了`vue cli`，为了确保使用的`cli`工具是最新版本，我们可以为版本进行升级:  
```npm
yarn global upgrade @vue/cli
```
之后可以根据`cli`工具的提示来选择自己需要的模块和工具来进行开发，笔者用到的是如下选项：  
`Babel`+`Router(mode:hash)`+`Vuex`+`Sass/SCSS(with dart-sass)`

> 这里使用`dart-sass`是因为`node-sass`在下载安装过程中总是会有各种问题

### 配置`webpack`
接下来我们在`vue.config.js`对`webpack`进行配置，我的配置代码在这里：[传送门](./vue.config.js)

配置文件大概做了下面几件事：  
1. 关闭`eslint`
2. 设置全局变量，方便实现不同环境的打包
3. 配置路径别名
4. 配置文件扩展项
5. 自动引入全局`css`
6. 设置`icon`图标路径
7. 移除打包后的`console.log`
8. 通过`HardSourceWebpackPlugin`缓存打包中间步骤，提升性能
9. 开启`gzip`
10. 使用`autodll-webpack-plugin`将第三方模块和一些不经常更改的文件进行提前打包，提升打包速速

这里也有一份社区总结的一份`vue.config.js`的详细配置文件： [传送门](https://github.com/staven630/vue-cli3-config)

### `webstorm`实用技巧
我们可以为`webstorm`提供`webpack`配置文件，来让`webstorm`实现对路径别名以及后缀等配置的识别，极大的方便了`webstorm`对我们的路径补全和代码自动引入。

`vue`的`webpack.config.js`在这里，它会动态识别`vue.config.js`中的配置： 
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/xiaomi-shop-webstorm-webpack.png)

如果我们使用的是`react-create-app`进行项目构建，并且不想使用`eject`命令的话，可以通过写一个假的`webpack.config.js`文件来专门供`webstorm`识别：  
```js
// 这并不是真的webpack配置文件，只是用来让webpack识别相应的配置
const path = require('path');
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
};
```

项目中我们禁用了`eslint`插件，而是通过`webstorm`来控制我们的代码风格，配置好之后只需要格式化一下就好了：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/xiaomi-webstorm-code-style.png)

这里我们`JavaScript`的代码分格采用预设的标准代码风格，并且设置为每行结束都要加分号

在`code style`中也可以对`css,html,sass`等文件设置代码风格，大家可以自己研究一下。

这里再介绍几个个人觉得特别好用的快捷键：
> 笔者使用的是`mac`
  
* `shift+F6`: 可以对变量进行重命名，用到变量的地方也会进行更改，极大的方便了代码重构
* `ctrl+B`: 当不使用鼠标的时候,可以通过键盘跳转到函数或变量定义处
* `option+enter`: 弹出代码提示弹窗，在自动导入依赖模块的时候尤其好用
* `ctrl+[ / ctrl+]`: 可以跳转到我们之前或之后操作代码的位置，使通过`ctrl+B`跳转到定义处然后再回到使用位置的操作异常快捷


### 安装第三方项目依赖
项目中我们也用到了一些社区内优秀的第三方插件：  
* [`vue-awesome-swiper`](https://github.com/surmon-china/vue-awesome-swiper): `vue`版的`swiper`插件，支持所有`swiper`中的`api`
* [`vue-lazyload`](https://github.com/hilongjw/vue-lazyload): `vue`图片懒加载插件
* [`axios`](https://github.com/axios/axios) : 支持以`Promise`的形式来发送`http`请求
* [`nprogress`](https://github.com/rstacruz/nprogress)：实现头部加载进度条
* [`vConsole`](https://github.com/Tencent/vConsole): 移动端页面开发工具

这里只在开发环境使用`vConsole`:  
```js
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole');
  const vConsole = new VConsole();
}
```

程序界一直有一句话：不要重复造轮子。尤其是在工作中，开发比较注重效率，使用一些优秀的第三方插件以及第三方组件库可以更好的辅助我们的工作，我们更应该在原有的组件上进行二次封装提升开发效率。

但是如果是学习的话，手撸各种轮子还是能提升我们的个人实力的。虽然我们不反对不要重复造轮子，但是并不代表我们没有造轮子的能力。

## 适配方案
项目使用`vw`单位进行移动端适配，来兼容不同的机型。

首先我们要安装如下依赖：
```npm
yarn add cssnano cssnano-preset-advanced postcss-aspect-ratio-mini postcss-cssnext postcss-import postcss-px-to-viewport postcss-url postcss-viewport-units postcss-write-svg -D
```

然后在`postcss.config.js`中添加如下配置：  
```js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      'utf8': false
    },
    'postcss-cssnext': {},
    // document address: https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
    'postcss-px-to-viewport': {
      'viewportWidth': 375,
      'unitPrecision': 5,
      'selectorBlackList': [
        '.ignore',
        '.hairlines'
      ],
      'mediaQuery': false
    },
    'postcss-viewport-units': {
      // 过滤在使用伪元素时覆盖插件生成的content而在command line 中产生的warning:https://github.com/didi/cube-ui/issues/296
      filterRule: rule => rule.nodes.findIndex(i => i.prop === 'content') === -1
    },
    'cssnano': {
      'preset': 'advanced',
      'autoprefixer': false,
      'postcss-zindex': false
    }
  }
};
```
这里需要注意的是`viewportWidth`这个配置项，我们这里设置为了`375`，而在实际工作中`ui`设计师会给我们2倍图，也就是`750`。想要对应配置项的小伙伴可以去查阅文档：[传送门](https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md)

### 踩坑指南
在使用`vw`适配方案的过程中，大概遇到了下面俩个问题：  
* 使用伪元素添加`content`属性时命令行会提示`error`
* 设置的`style`无法转换为`vw`

这里对于命令行中的伪元素`content`报错我通过在`babel.config.js`中配置了如下代码来进行过滤：  
```js
'postcss-viewport-units': {
  // 过滤在使用伪元素时覆盖插件生成的content而在command line 中产生的warning:https://github.com/didi/cube-ui/issues/296
  filterRule: rule => rule.nodes.findIndex(i => i.prop === 'content') === -1
}
```

而`style`转换`vw`的问题是简单写了一个`js`方法来帮我们进行转换：  
```js
export const vw = (number) => {
  const htmlWidth = document.documentElement.offsetWidth;
  return number * (100 / htmlWidth);
};
```
这样我们简单的解决了目前开发遇到的一些小问题。

## 通用组件设计
对于通用组件，由于在全局很多地方会进行引入，所以为了使用方便，我们通过`webpack`中的`require.context`方法来自动全局注册，这要之后再添加全局组件也不用在进行注册了。笔者将它放到了一个单独的`js`文件中来执行：  
```js
// autoRegister.js
import Vue from 'vue';
// 不需要自动注册的组件
const blackList = ['MuiToast'];
const requireComponent = require.context('components', true, /Mui[A-Z]\w+\.vue$/);
requireComponent.keys().forEach(filename => {
  const componentConfig = requireComponent(filename);
  const start = filename.lastIndexOf('/') + 1;
  const end = filename.lastIndexOf('.');
  const componentName = filename.slice(start, end);
  if (blackList.includes(filename)) {return;}
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});
```
当然这里有需要我们定义好命名规范：**组件名必须要以`Mui`开头，并且遵循驼峰命名的规则**

根据项目需要，我实现了以下通用组件：
* `layout`布局组件(`MuiLayout,MuiHeder,MuiFooter,MuiAside,MuiContent`)
* `icon`字体图标组件(`MuiIcon`)
* `popup`弹出框组件(`MuiPopup`)
* `dialog`对话框组件(`MuiDialog`)
* `toast`全局提示(`MuiToast`)

这里主要讲一下`icon`和`Toast`组件的实现过程，其它组件的实现过程小伙伴可以看源代码。 
  
### `icon`组件
`icon`图标在项目中使用的特别频繁，我很有必要进行一个统一封装，方便使用。

项目中用到的`icon`图标是通过`iconfont`网站进行获取： [传送门](www.iconfont.cn)。这里我们使用的是`symbol`的方式来进行实现，可以支持多色图标，也可以通过`font-size`，`color`来进行样式的调整。

首先我们需要在图标库选好自己的图标，之后我们可以为我们图标所在的项目进行简单设置：  
![icon-font-prefix](./screenshots/icon-font-prefix.png)

然后我们选择`symbol`类型的图标，并将地址复制到`pubic/index.html`中。

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/xiaomi-icon-link.png)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title>小米商城</title>
  <script src="//at.alicdn.com/t/font_1253950_whicd7mh5w.js"></script>
</head>
<body>
<noscript>
  <strong>We're sorry but vue-cli-demo doesn't work properly without JavaScript enabled. Please enable it to
    continue.</strong>
</noscript>
<div id="app"></div>
<!-- built files will be auto injected -->
</body>
</html>
```

准备工作完成后，我们建立`MuiIcon`文件，添加如下代码：  
```vue
<template>
  <svg
    class="mui-icon"
    aria-hidden="true"
  >
    <use xlink:href="#icon-xxx"></use>
  </svg>
</template>

<script>
  export default {
    name: 'MiIcon',
  };
</script>

<style lang="scss" scoped>
  .mui-icon {
    display: inline-block;
    width: 1em; height: 1em;
    vertical-align: top;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```
> 接下来的内容不再介绍`css`

代码中的`xxx`在使用过程中需要替换为对应`icon`的名字，我们通过为`Icon`组件传入一个`name`属性来动态设置图标名称。由于上边为项目图标设置了统一前缀`mi`，所以这里要进行如下修改：  
```vue
<template>
  <svg
    class="mui-icon"
    aria-hidden="true"
  >
    <use :xlink:href="`#mi-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'MiIcon',
    props: {
      name: { type: String, required: true }
    }
  };
</script>
```
这样我们就实现了一个最基础的`icon`组件，可以在项目中这样使用：  
```vue
<mui-icon name="logo"></mui-icon>
```

在日常的项目中，我们还会遇到如下需求：  
* 鼠标移入`icon`图标，图标旋转
* 点击`icon`进行页面跳转

诸如此类的需求我们不可能一个一个为`icon`组件添加对应的属性和方法，这里我们运用到`vue`中几个不太常用的`api`:  
* `v-on`和`v-bind`绑定对象： 会将对象的属性分发到当前节点
* `$attrs`: 可以获取没有在`props`中定义的属性
* `$listens`：获取父作用域中不含`.native`修饰器的`v-on`事件监听器
* `inheritAttrs`： 可以让非`props`中添加的属性不再显示到`icon`组件的根节点上

```vue
<template>
  <svg
    class="mui-icon"
    aria-hidden="true"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <use :xlink:href="`#mi-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'MiIcon',
    inheritAttrs: false, // 默认值为true,是否在根节点上显示传入的没有通过props接收的属性
    props: {
      name: { type: String, required: true }
    }
  };
</script>
```
这样书写之后，`icon`组件就可以接受任意的`svg`原生支持的事件和属性。

在`react`中，我们也会碰到类似的需求，并且在`react`中不会帮我们对`class`进行合并。所以在`react`中的思路大概如下:  
* 单独对`class`进行处理，手动拼接为多类名格式(`Vue`这里已经帮我们做好)
* 通过`...restProps`将其余的属性扩展到对应的节点上

### `toast`组件
这里的`toast`和其它组件的使用方式不一样，它是通过使用`Vue.use`来进行全局注册。




## 结语
开源不易，希望大家能给个`start`给与鼓励，让社区中乐于分享的开发者创造出更好的作品。

源码地址： `https://github.com/wangkaiwd/xiaomi-shop`
