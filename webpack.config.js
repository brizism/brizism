const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, 
      use: [{
          loader: "style-loader"  // creates style nodes from JS strings
      }, {
          loader: "css-loader", options: {  // translates CSS into CommonJS
              sourceMap: true
          }
      }, {
          loader: "sass-loader", options: {  // compiles Sass to CSS
              sourceMap: true
          }
      }]},
      { test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, use: 'url-loader?limit=100000' },
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer],
      },
    }),
  ]
};