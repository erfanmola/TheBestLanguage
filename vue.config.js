const { defineConfig } = require('@vue/cli-service');
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pwa: {
    name: 'TheBestLanguage',
    themeColor: '#009688',
    msTileColor: '#102631',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      exclude: ['.htaccess'],
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement: tag => tag === 'chip'
        }
      }))
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    404: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: '404.html',
    },
  },
  outputDir: path.resolve(__dirname, "./docs/"),
})
