/**
 * Created by zhaoyongsheng on 16/10/18.
 */

var webpack = require('webpack');
var config = require('./webpack.base.config');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.devtool = 'inline-source-map';
config.output.filename = '[name].js';
config.devServer = {
    port: 8082,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
};

config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({                                                                     // 构建html文件
        template: './src/index.html',
        inject: 'body'
    }),
    new OpenBrowserPlugin({
        url: 'http://localhost:8082'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            ENV: JSON.stringify('development'),
            NODE_ENV: JSON.stringify('development')
        }
    })
]);

module.exports = config;