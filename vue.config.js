const path = require('path');

// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  remUnit: 16
})

module.exports = {
  // 部署应用时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'dist',
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 构建多页面应用，页面的配置
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '我的vue页面',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          // postcss
        ]
      },
      sass: {
        prependData: '@import "@assets/scss/scss.scss";'
      }
    }
  },
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  // 配置文件解析别名
  configureWebpack: {
    resolve: {
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
  chainWebpack(config) {
    config.optimization.minimize(false)
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
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
