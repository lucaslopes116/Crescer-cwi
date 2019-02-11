const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const WebPack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js',
    indexEntry: './src/page/index.page.js',
    registerEntry: './src/page/register.page.js',
    loginEntry: './src/page/login.page.js',
    homeEntry: './src/page/home.page.js',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebPackPlugin(['./dist']),
    new HtmlWebPackPlugin({
      title: 'WebPack',
      filename: 'index.html',
      template: 'src/template/index.html',
      chunks: ['main', 'indexEntry']
    }),
    new HtmlWebPackPlugin({
      title: 'WebPack',
      filename: 'login.html',
      template: 'src/template/login.html',
      chunks: ['main', 'loginEntry']
    }),
    new HtmlWebPackPlugin({
      title: 'WebPack',
      filename: 'registro.html',
      template: 'src/template/registro.html',
      chunks: ['main', 'registerEntry']
    }),
    new HtmlWebPackPlugin({
      title: 'WebPack',
      filename: 'home.html',
      template: 'src/template/home.html',
      chunks: ['main', 'homeEntry']
    }),
    new WebPack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
