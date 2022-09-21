const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    port: 8888,
    host: "localhost",
    open: true,
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      },
      // [process.env.VUE_APP_BASE_API1]: {
      //   target: process.env.VUE_APP_SERVICE_URL1,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ["^"+process.env.VUE_APP_BASE_API1]: ""
      //   }
      // }
      // "/dev-api": {
      //   target: "http://localhost:3000",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/dev-api": ""
      //   }
      // }
    }
  },
  lintOnSave: false
})
