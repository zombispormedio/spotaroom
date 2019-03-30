const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    openPage: '',
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
});
