var path = require('path');

var app = {
  name: 'app',
  target: 'web',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      './src/index.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  devServer: {
    contentBase: './dist',
  },

  module: {

    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      }, {
        test: /\.tpl.html$/,
        loader: 'raw',
      }, {
        test: /index.html$/,
        loader: 'file?name=[name].[ext]',
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
    ],
  },

};

module.exports = [app];
