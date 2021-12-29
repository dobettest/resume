import { app, BrowserWindow } from "electron";
import path from "path";

const isDev = process.env.NODE_ENV !== "production";
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 注入node模块
      contextIsolation: true
    }
  });
  if (isDev) {
    win.loadURL("http://127.0.0.1:7001");
  } else {
    win.loadURL(`file://${path.resolve(__dirname, "../dist/index.html")}`);
  }
}
app.whenReady().then(() => {
  createWindow();
  // 如果没有窗口打开则打开一个窗口 (macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
