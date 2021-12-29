const { merge } = require("webpack-merge");
const path = require("path");
const BaseConfig = require("./base");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const mainConfig = {
  mode: "development",
  entry: resolve("../app/main/electron.ts"),
  target: "electron-main",
  output: {
    filename: "[name].js"
  }
};
module.exports = merge(BaseConfig, mainConfig);
