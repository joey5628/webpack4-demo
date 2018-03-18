'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist'
    }
});