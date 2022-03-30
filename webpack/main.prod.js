const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const BaseConfig = require("./base");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const mainConfig = {
  mode: "production",
  entry: {
    "electron": resolve("../app/main/electron.ts")
  },
  optimization: [
    new TerserPlugin()
  ]
  target: "electron-main"
};

module.exports = merge(BaseConfig, mainConfig);