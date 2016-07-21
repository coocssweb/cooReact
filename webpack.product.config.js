var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: false,
    entry: {
        index: [
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    plugins: [
        new ExtractTextPlugin('index_[contenthash].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'COO移动端组件',
            template: 'index-temp.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('development')}
        })
    ],
    resolve: {
        modulesDirectories: [
            'node_modules', 'common', 'img'
        ]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: [
                path.join(__dirname,'src')
            ]
        },{
            test: /\.css$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loaders: ['style', 'css?modules&localIdentName=[name]_[local]_[hash:base64:5]','autoprefixer?{browsers:["> 5%", "ie 9"]}']
        },{
            test: /\.(svg|png|jpg|jpeg|gif)$/i,
            loaders: ['file', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
        }]
    }
};
