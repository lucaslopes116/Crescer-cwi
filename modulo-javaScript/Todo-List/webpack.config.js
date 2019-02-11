const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const WebPack = require('webpack')

module.exports = {
  entry: './src/index.js',  
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
      template: 'src/index.html'
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
