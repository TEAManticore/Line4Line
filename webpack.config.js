var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'client'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      { 
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
