# 小米商城
## 项目创建
## 适配方案
## 接口请求封装
## 数据`Mock`
## 实现页面
### 登录
### 首页
### 分类页
### 我的
### 购物车
### 商品详情

## 通用组件设计
* sku选择组件(`MuiSku`)
* 选择城市(`MuiAddressSelect`)
* 模态框(`MuiDialog`)
* 全局提示(`MuiToast`)


## 第三方插件

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
