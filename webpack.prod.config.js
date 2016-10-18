/**
 * Created by zhaoyongsheng on 16/10/18.
 */

var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.output.filename = '[name].[hash].js';

config.plugins = (config.plugins || []).concat([
    new HtmlWebpackPlugin({                                                                     // 构建html文件
        template: './src/index.html',
        inject: 'body'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            ENV: JSON.stringify('production'),
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.OccurenceOrderPlugin(true),

    new webpack.optimize.UglifyJsPlugin({

        beautify: false,

        mangle: { screw_ie8: true },

        compress: {
            screw_ie8: true,
            warnings: false
        },
        comments: false
    })
]);

module.exports = config;