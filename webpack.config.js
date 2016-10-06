// npm modules
const ip = require('ip')

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Config parts
const webpackParts = require('./libs/webpack.parts')

/**
 * Webpack configuration for development environment
 */
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    })
  ],
  devtool: 'source-map',
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json', '.css']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint']
      },
      {
        test: /\.css$/,
        loaders: ['postcss']
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: /\index.html/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: 'file'
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'url'
      }
    ]
  },
  postcss: webpackParts.postcss,
  devServer: {
    host: process.env.ANGULARJS_ES6_HOST || ip.address(),
    port: process.env.ANGULARJS_ES6_PORT || 3000,
    contentBase: ['./src', '../static'],
    historyApiFallback: true,
    inline: true,
    colors: true,
    stats: 'normal'
  }
}