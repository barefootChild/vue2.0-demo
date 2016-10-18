/**
 * Created by zhaoyongsheng on 16/10/18.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: {
        '/main': './src/main'
    },

    output: {
        path: path.join(__dirname, './dist')
    },

    resolve: {
        alias: {
            'vux-components': 'vux/src/components'
        },
        extensions: ['.js', '.vue', '']
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/vux/src')]
            },
            {
                test: /vux.src.*?js$/,
                loader: 'babel'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/vux/src')]
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.json$/,
                loaders: ['json']
            }
        ]
    },

    plugins: [

    ]
};