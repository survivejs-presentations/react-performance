/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

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
  entry: [
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ["", ".jsx", ".js"]
  },
  resolveLoader: {
    alias: {
      content: path.join(__dirname, 'loaders', 'content')
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
      loader: "style-loader!css-loader"
    }, {
      test: /\.gif$/,
      loader: "url?limit=10000&mimetype=image/svg+xml",
      include: PATHS.images
    }, {
      test: /\.(png|jpg)$/,
      loader: "url-loader?limit=8192",
      include: PATHS.images
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml",
      include: PATHS.images
    }]
  }
};
