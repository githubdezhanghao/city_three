const { defineConfig } = require('@vue/cli-service')
// vue.config.js
module.exports = {
  // ...
  configureWebpack: {
    experiments: {
      topLevelAwait: true
    }
  }
};
