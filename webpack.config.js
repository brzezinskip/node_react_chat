const webpack = require('webpack');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const BUILD_DIR = path.resolve(`${__dirname}/public`);
const APP_DIR = path.resolve(`${__dirname}/client/app`);

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
   loaders: [
     {
       test: /\.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/
     }
   ]
 },
 plugins: [
   new LiveReloadPlugin()
 ]
};

module.exports = config;
