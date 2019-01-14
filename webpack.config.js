/**
 * webpack 配置文件
 * 配置独立项、入口文件、输出项信息
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    inline: true,
    progress: true
  },
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    noParse : [],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /(node_modules|third)/,
      include: [
        path.join(__dirname,'src')
      ],
      query: {
        cacheDirectory: true,
        "presets": ["react", "es2015"],
        "env": {
          "development": {
            "presets": ["react-hmre"]
          }
        }
      }
    },{
      test: /\.css$/,
      exclude: /(node_modules|styles|third)/,
      loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'autoprefixer?{browsers:["> 5%", "ie 9"]}']
    },{
      test: /\.css$/,
      include: [
        path.join(__dirname,'node_modules'),
        path.join(__dirname,'styles')
      ],
      loaders: ['style', 'css']
    },{
      test: /\.(png|jpg|jpeg|gif)$/i,
      loader: 'file'
    },{
      test: /\.(svg|eot|ttf|woff)$/i,
      loader: 'url-loader'
    },{
      test: /\.html$/i,
      loader: 'file?name=[name].[ext]'
    },{
      test: /\.js/i,
      include:[
        path.join(__dirname,'third')
      ],
      loader: 'file?name=[name].[ext]'
    },{
      test: /\.css/i,
      include:[
        path.join(__dirname,'third')
      ],
      loader: 'file?name=[name].[ext]'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}


module.exports = config;