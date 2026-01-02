const { app, BrowserWindow } = require('electron');

process.on('uncaughtException', (err) => {
  console.error('Main process uncaught exception:', err);
});

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('./renderer/index.html').catch((err) => {
    console.error('Failed to load renderer:', err);
  });

  // Open DevTools so the renderer console is visible for debugging
  win.webContents.openDevTools();
});