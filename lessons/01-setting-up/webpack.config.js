const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  devtool: 'eval-source-map',

  devServer: {
      contentBase: "./public",      //本地服务器加载的页面所在的目录
      historyApiFallback: true,     //不跳转
      inline: true,
      hot: true                     //热加载
  },

  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin()          //热加载插件
  ]

}
