// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@assets": resolve("../assets"),
      "@src": path.join(__dirname, "../", "app/renderer"),
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
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: resolve("../dist")// 不添加则clean-webpack-plugin会失效
  },
  devtool: "inline-source-map"
};
