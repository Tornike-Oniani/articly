const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  // Create window
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'pages', 'main.html'));

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  //* Quit app when main window gets closed
  mainWindow.on('closed', () => {
    app.quit();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
