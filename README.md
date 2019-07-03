# 小米商城
> 这是一个仿小米商城的`vue`全家桶项目，[点击预览](https://wangkaiwd.github.io/xiaomi-shop/)

有些时候，我们都想通过项目来提升自己的实战能力，但是又苦于找不到一个适合实战的项目，导致我们都比较迷茫。这里笔者通过业余时间，实现了一个基于`vue`全家桶的仿小米商城实战，目的在于提升自己的`vue`编码能力，也希望能为社区小伙伴提供一个可以练手的`vue`项目，提升实战能力。

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

在编写代码的过程中我会严格要求自己的代码规范以及命名的可读性，我也会在这个过程中边学习边记录。接下来让我们一起开启这一段令人期待的旅程吧！

## 项目创建
## 适配方案
### 安装依赖
### 踩坑指南
## 接口请求封装
## 数据`Mock`
项目中的接口数据是通过`easy-mock`来进行模拟，它的语法是根据`mockjs`来进行随机生成数据，可以通过[示例](http://mockjs.com/examples.html)来快速学习。  

在项目中我模拟了如下的一些接口，有小伙伴想要用来练习的话可以直接访问,节省数据`mock`时间：  
```text

```
## 实现页面
### 登录
### 首页
### 分类页
### 我的
### 购物车
### 商品详情

## 通用组件设计
对于通用组件，由于在全局很多地方会进行引入，所以为了使用方便，我们通过`webpack`中的`require.context`方法来自动全局注册，这要之后再添加全局组件也不用在进行注册了。  
```js
// autoRegister.js
import Vue from 'vue';

const requireComponent = require.context('components', true, /Mui[A-Z]\w+\.vue$/);
requireComponent.keys().forEach(filename => {
  const componentConfig = requireComponent(filename);
  const start = filename.lastIndexOf('/') + 1;
  const end = filename.lastIndexOf('.');
  const componentName = filename.slice(start, end);
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

根据项目需要，我们大概会实现以下通用组件：
* `layout`布局组件(`MuiLayout,MuiHeder,MuiFooter,MuiAside,MuiContent`)
* `icon`字体图标组件(`MuiIcon`)
* `popup`弹出框组件(`MuiPopup`)
* `dialog`对话框组件(`MuiDialog`)
* 选择城市(`MuiAddressSelect`)
* `toast`全局提示(`MuiToast`)

### `icon`组件
`icon`图标在项目中使用的特别频繁，我很有必要进行一个统一封装，方便使用

### `layout`组件


### `popup`组件
在项目的商品详情页面中，频繁的遇到了底部弹出层的交互效果，如商品`sku`选择、服务说明、关键参数等。为了处理这种类似的需求，我们需要封装一个`popup`组件。

首先我们先对详情页的分析以及相应需求的扩展，我们大概要实现如下`api`:  
* `visible`: 控制弹出框的显示和隐藏
* `title`: 莫泰框的标题,不传或者传入空会隐藏标题
* `content<slot>`: 通过插槽插入用户自定义的内容
* `position`: 控制弹出层的位置
* `onMaskClosable`: 是否可以点击模态框关闭
* `getContainer`: 通过一个方法返回想要挂载的父节点(有时候需要我们将弹出层放到`body`中，防止页面滚动或者`oveflow:hidden`造成影响)


## 第三方插件
项目中我们也用到了一些社区内优秀的第三方插件：  
* [`vue-awesome-swiper`](https://github.com/surmon-china/vue-awesome-swiper): `vue`版的`swiper`插件，支持所有`swiper`中的`api`
* [`vue-lazyload`](https://github.com/hilongjw/vue-lazyload): `vue`图片懒加载插件

业界内有一句很著名的话：不要重复造轮子。尤其是在工作中，开发比较注重效率，使用一些优秀的第三方插件以及第三方组件库可以更好的辅助我们的工作，我们更应该在原有的组件上进行二次封装提升开发效率。

但是如果是学习的话，手撸各种轮子还是能提升我们的个人实力的。虽然我们不反对不要重复造轮子，但是并不代表我们没有造轮子的能力。
## `todo`
1. 通过路由的钩子函数来提前加载数据
2. 全局使用NProgress来进行加载优化
3. 静态页面： 1. 详情  2. 购物车

## 知识补充
### `es6`模块化
这里是一个例子  
[![Edit patient-sun-to0wc](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/patient-sun-to0wc?fontsize=14)

* `import`命令具有提升效果，会提升到整个模块的头部，首先执行。本质：`import`命令是编译阶段执行的，在代码运行之前。
* `import`是静态执行的，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。如果想要使用表达式和变量可以使用`require`语法，但是要注意，此时的静态优化将不再有效
* `import`语句会执行所加载的模块，如果多次重复执行同一句`import`语句，那么只会执行一次
* 循环加载： `ES6`模块是动态引用，如果使用`import`从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值

### `CSS`
* `sass`中可以直接通过计算来设置属性  
  ![calc-scss](./screenshots/calc-scss.png)
* 文字特殊符号居中问题
* `MiApp`组件`z-index`问题
* 单行溢出隐藏问题
### `vue`
* 使用`dart-sass`实现深度作用
## 结语
开源不易，希望大家能给个`start`给与鼓励，让社区中乐于分享的开发者创造出更好的作品。

源码地址： `https://github.com/wangkaiwd/xiaomi-shop`
