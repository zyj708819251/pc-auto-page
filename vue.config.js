const path = require('path');

// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'prod' ?
    './' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      },
      sass: {
        prependData: '@import "@assets/scss/scss.scss";'
      }
    }
  },
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  configureWebpack: { // 覆盖webpack默认配置的都在这里
    resolve: { // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@api': path.resolve(__dirname, './src/api'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@views': path.resolve(__dirname, './src/views'),
        '@com': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets')
      }
    }
  },

  devServer: {
    open: true,
    host: 'localhost',
    port: 8888,
    // proxy: {
    //   '/myJk': {
    //     target: process.env.VUE_APP_URL, // target host
    //     ws: false, // proxy websockets
    //     changeOrigin: true, // needed for virtual hosted sites
    //     pathRewrite: {
    //       '^/myJk': ''
    //     }
    //   }
    // }
  }
}
