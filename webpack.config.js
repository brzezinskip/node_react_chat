const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(`${__dirname}/public`);
const APP_DIR = path.resolve(`${__dirname}/client/app`);

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style!css!sass',
      },
    ]
  },
};
