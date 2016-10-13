var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: __dirname + '/client',
  entry: './index.js',
  output: {
    path: __dirname + '/client/public/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      }
    ]
  }
}
