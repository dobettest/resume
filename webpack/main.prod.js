const { merge } = require("webpack-merge");
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
  target: "electron-main"
};

module.exports = merge(BaseConfig, mainConfig);