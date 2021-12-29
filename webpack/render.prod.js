const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BaseConfig = require("./base");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const mainConfig = {
  mode: "development",
  entry: {
    index: resolve("../app/renderer/app.jsx")
  },
  output: {
    filename: "[name].[contenthash:8].js"
  },
  target: "electron-renderer",
  devServer: {
    compress: true,
    hot: true,
    host: "127.0.0.1",
    port: 7001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../app/renderer/index.html"),
      filename: resolve("../dist/index.html"),
      chunks: ["index"]
    })
  ]
};
module.exports = merge(BaseConfig, mainConfig);
