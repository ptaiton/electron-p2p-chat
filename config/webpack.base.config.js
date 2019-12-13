'use strict'

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  externals: {
    uws: "uws",
    express: 'commonjs express',
    bufferutil: 'commonjs bufferutil',
    'utf-8-validate': 'commonjs utf-8-validate',
    'socket.io': 'commonjs socket.io'
  },
  plugins: [
    new CopyPlugin([
      { from: 'ressources/icon.png', to: '' }
    ]),
  ]
}
