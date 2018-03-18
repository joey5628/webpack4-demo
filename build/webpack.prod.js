'use strict';
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        // new CleanWebpackPlugin(['../dist']),
    ]
});