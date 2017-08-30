"use strict";

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  /**
   * 解析 (Resolve)
   * @see https://webpack.js.org/configuration/resolve/
   */
  resolve: {
    // 自动解析确定的扩展，能够使用户在引入模块时不带扩展
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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