var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");



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
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      
      { 
        test: /\.png$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ],

  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }