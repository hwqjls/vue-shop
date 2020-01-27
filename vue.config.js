const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)


}

module.exports = {
  runtimeCompiler: true,
  publicPath: '',
  productionSourceMap: false,
  devServer: {
    //跨域
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack (config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}