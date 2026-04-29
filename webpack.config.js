const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },

  devServer: {
    static: './dist',
    open: true,
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        oneOf: [
          {
            resourceQuery: /raw/,
            type: 'asset/source'
          },
          {
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};