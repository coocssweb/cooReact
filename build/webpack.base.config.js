const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {resolve} = require('./utils');

module.exports = function webpackBaseConfig (NODE_ENV = 'development') {
    const config = require('./config')[NODE_ENV];
    let plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('examples', 'index.html'),
            chunks: ['common', 'index'],
            hash: false,
            inject: 'body',
            xhtml: false,
            minify: {
                removeComments: true,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
    ];

    if (NODE_ENV === 'development') {
        // css热更新
        plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    } else {
        plugins.push(
            new ExtractTextPlugin({
                filename: `css/${config.filenameHash ? '[name].[contenthash:8]' : '[name]'}.css`,
                allChunks: true
            })
        );
    }

    const webpackConfig = {
        entry: {
            index: resolve('examples', 'index.js'),
        },
        output: {
            path: resolve('dist'),
            publicPath: '',
            filename: `js/${config.filenameHash ? '[name].[hash:8]': '[name]' }.js`,
            chunkFilename: `js/${config.filenameHash ? '[name].[hash:8]': '[name]'}.js`
        },
        devtool: config.devtool,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel'],
                    },
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                {
                    test: /\.jsx$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.ejs$/,
                    loader: 'ejs-loader'
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: `url-loader?limit=1&name=images/${config.filenameHash ? '[name].[hash:8]': '[name]'}.[ext]`
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: `file-loader?name=fonts/${config.filenameHash ? '[name].[hash:8]': '[name]'}.[ext]`
                },
                {
                    test: /\.(scss|css)$/,
                    use: NODE_ENV === 'development' ? ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'] : ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    minimize: true,
                                }
                            },
                            'postcss-loader',
                            'sass-loader?sourceMap',
                        ],
                        fallback: 'style-loader'
                    })
                },
            ]
        },
        plugins,
        resolve: {
            alias: {
                components: resolve('components')
            },
            // 文件后缀自动补全
            extensions: ['.js', '.jsx']
        },
    };

    // 开发环境服务器配置
    if (NODE_ENV === 'development') {
        webpackConfig.devServer = {
            contentBase: resolve('dist'),
            compress: false,
            host: '127.0.0.1',
            port: config.port,
            hot: true,
            disableHostCheck: true,
            historyApiFallback: true
        };
    } else {
        webpackConfig.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    dead_code: true
                },
                sourceMap: false,
                output: {
                    comments: false
                }
            })
        );
    }

    return webpackConfig;
};
