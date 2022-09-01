const { resolve } = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 9000,
    open: true,
  },
  cache: false,
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new htmlWebpackPlugin({
      template: resolve(__dirname, "./public/index.html"),
    }),
  ],
  mode: "development",
};
