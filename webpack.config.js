/**
 * webpack 配置文件
 * 配置独立项、入口文件、输出项信息
 */
var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var components_dir = path.join(__dirname, 'components');
var examples_dir = path.join(__dirname,'examples');

//独立项
var deps = [
  'react/dist/react.min.js',
  'jquery/dist/jquery.min.js',
  'underscore/underscore-min.js'
];

var alias=[
    'SlideDelete/SlideDelete.js',
    'Slider/Slider.js',
    'Confirm/Confirm.js',
    'Tip/Tip.js'
];

//入口文件
var entrys = ['HoldEdit/HoldEdit.js'];

var config = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: 'HoldEdit.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: []
  },
  module: {
    noParse : [],
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }]
  }
}

//加载 alias项
deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.module.noParse.push(depPath);
 });

//加载入口文件
entrys.forEach(function(entry){
  var entryPath = path.resolve(examples_dir, entry);
  config.entry.push(entryPath);
});

module.exports = config;