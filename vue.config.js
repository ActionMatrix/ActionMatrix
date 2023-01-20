const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    port: "8080",
    client: {
      webSocketURL: 'ws://139.199.36.160:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
