const path = require('path')
// import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const { name } = require('./package')

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${name}`
    config.output.globalObject = 'window'

    config.plugins = [...(config.plugins || []), new AntdDayjsWebpackPlugin()]

    // config.module.rules = [
    //   ...(config.module.rules || {}),
    //   {
    //     test: /\.(c|le)ss$/,
    //     use: [
    //       'style-loader',
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           importLoaders: 2,
    //           esModule: false, // 不转为 esModule 类型
    //         },
    //       },
    //       'postcss-loader',
    //       'less-loader',
    //     ],
    //   },
    // ]

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    }

    console.log(JSON.stringify(config))

    return config
  },

  devServer: (_) => {
    const config = _

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    }
    config.historyApiFallback = true
    config.hot = false
    config.watchContentBase = false
    config.liveReload = false
    config.open = false

    // config.proxy = {
    //   '/api': {
    //     target: 'https://api.github.com',
    //     pathRewrite: {"^/api" : ""},
    //     changeOrigin: true
    //   }
    // }


    return config
  },
}
