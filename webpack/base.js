// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": resolve("../app/renderer")
    }
  },
  module: {
    rules: [
      {
        test: /\.(mjs|ts|jsx|tsx)$/,
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: resolve("../dist")// 不添加则clean-webpack-plugin会失效
  },
  devtool: "inline-source-map",
  plugins: [
    // new CleanWebpackPlugin()
  ]
};
