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
