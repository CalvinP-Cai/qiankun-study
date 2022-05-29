const { name } = require('./package');

module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  devServer: {
    open: false,
    port: 8082,
    historyApiFallback: {
      disableDotRule: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    }
  }
};
