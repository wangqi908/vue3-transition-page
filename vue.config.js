'use strict'

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 8889,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'transition-page'
      return args
    })
  }
}
