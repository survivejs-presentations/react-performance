/* eslint-disable */
const path = require("path");
const webpack = require("webpack");

const PATHS = {
  images: path.join(__dirname, 'images'),
  presentation: [
    path.join(__dirname, 'index.js'),
    path.join(__dirname, 'images', 'index.js'),
    path.join(__dirname, 'presentation'),
    path.join(__dirname, 'node_modules', 'react-tweet-embed')
  ]
};

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  resolveLoader: {
    alias: {
      content: path.join(__dirname, 'loaders', 'content')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      include: PATHS.presentation
    }, {
      test: /\.css$/,
      loaders: ["style", "raw"],
      include: __dirname
    }, {
      test: /\.gif$/,
      loader: "url?limit=10000&mimetype=image/svg+xml",
      include: PATHS.images
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml",
      include: PATHS.images
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=10000mimetype=image/png",
      include: PATHS.images
    }, {
      test: /\.jpg$/,
      loader: "url-loader?limit=10000mimetype=image/jpg",
      include: PATHS.images
    }]
  }
};
