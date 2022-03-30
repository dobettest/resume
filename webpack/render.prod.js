const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BaseConfig = require("./base");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin =require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const mainConfig = {
  mode: "development",
  entry: {
    index: resolve("../app/renderer/app.tsx")
  },
  output: {
    filename: "[name].[contenthash:8].js"
  },
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
  ],
  target: "electron-renderer",
  devServer: {
    compress: true,
    hot: true,
    host: "127.0.0.1",
    port: 7001
  },
  optimization:[
    new CssMinimizerPlugin(),
    new TerserPlugin()
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../app/renderer/index.html"),
      filename: resolve("../dist/index.html"),
      chunks: ["index"]
    }),
    new MiniCssExtractPlugin()
  ]
};
module.exports = merge(BaseConfig, mainConfig);
