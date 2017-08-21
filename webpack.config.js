"use strict";

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        enforce: 'pre',
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader?cacheDirectory!awesome-typescript-loader',
      }
    ]
  }
}