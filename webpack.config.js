/**
 * webpack 配置文件
 * 配置独立项、入口文件、输出项信息
 */
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');
var components_dir = path.join(__dirname, 'components')+"/";

//独立项
var deps = [
  'react/dist/react.min.js',
  'jquery/dist/jquery.min.js',
  'underscore/underscore-min.js'
];


//重定向文件
var alias= {
  Base          : components_dir + 'Base/Base.js',
  Confirm       : components_dir + 'Confirm/Confirm.js',
  HoldEdit      : components_dir + 'HoldEdit/HoldEdit.js',
  ImageCut      : components_dir + 'ImageCut/ImageCut.js',
  Loadmore      : components_dir + 'Loadmore/Loadmore.js',
  Pager         : components_dir + 'Pager/Pager.js',
  ScrollLoadmore: components_dir + 'ScrollLoadmore/ScrollLoadmore.js',
  SlideDelete   : components_dir + 'SlideDelete/SlideDelete.js',
  SlideList     : components_dir + 'SlideList/SlideList.js',
  SlidePushMenu : components_dir + 'SlidePushMenu/SlidePushMenu.js',
  Slider        : components_dir + 'Slider/SliderList.js',
  Tip           : components_dir + 'Tip/Tip.js',
  SignIn        : components_dir + 'SignIn/SignIn.js',
  SignUp        : components_dir + 'SignUp/SignUp.js',
  FindPwd       : components_dir + 'FindPwd/FindPwd.js',
  SetPwd        : components_dir + 'FindPwd/SetPwd.js',
  SearchBar     : components_dir + 'SearchBar/SearchBar.js',
  SearchBox     : components_dir + 'SearchBox/SearchBox.js',
  Dropdown      : components_dir + 'Dropdown/Dropdown.js'
};

var config = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server',
    './examples/Dropdown/Dropdown.js'
  ],
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: 'Dropdown.js',
    publicPath: '/public/'
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

//重定向文件赋值
config.resolve.alias = alias;

module.exports = config;