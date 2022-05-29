const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devServer: {
  //   // 服务可以访问的域名， 将允许访问开发服务器的服务列入白名单
  //   allowedHosts: [
  //     'host.com',
  //     'subdomain.host.com',
  //     'subdomain2.host.com',
  //     'host2.com'
  //   ],
    
  //   bonjour: true, // 启动时通过 ZeroConf 网络广播服务器
  //   compress: true, // 一切服务都启用gzip 压缩
  //   devMiddleware: '',
  //   headers: {},
  //   historyApiFallback: true,
  //   host: '0.0.0.0',
  //   hot: true,
  //   http2: true,
  //   https: true,
  //   ipc: false,
  //   liveReload: true,
  //   magicHtml: false,
  //   onAfterSetupMiddleware: function () {},
  //   onBeforeSetupMiddleware: function () {},
  //   onListening: true,
  //   open: true,
  //   port: 8080,
  //   proxy: {},
  //   server: true,
  //   setupExitSignals: '',
  //   setupMiddlewares: '',
  //   static: '',
  //   watchFiles: '',
  //   webSocketServer: '',
  // },
  target: 'web',
  // 监听文件改变后，刷新
  watch: true,
  devServer: {
    port: 8080,
    hot: true,
    // hotOnly: true,
    // 自动打开浏览器
    open: false,
    // 压缩
    compress: true,
  
    historyApiFallback: {
      disableDotRule: true,
    },

    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [{}],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 配置输出html的模板
    // https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'Webpack入门到入坑到放弃',
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
}
