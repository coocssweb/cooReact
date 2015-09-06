/**
 * 用node 开启3000单口
 * 加载webpack.config.js 配置项，搭建热加载开发环境
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('3000端口已开启');
});
