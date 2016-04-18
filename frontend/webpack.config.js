'use strict';
var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
var port = process.env.PORT || 3000;

var devtool ='source-map';
var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = {
  devtool: devtool,
  entry: './index.js',
  output: {
    filename: '../app/static/build.js',
    path: __dirname,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
    resolve: {
      extensions: ['', '.js']
    },
    plugins: plugins,
  }
};
