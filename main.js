const { app, ipcMain } = require('electron');
const path = require('path');
const Window = require('./utils/window');

let mainWindow;

app.on('ready', () => {
  // Create window
  mainWindow = new Window({
    file: path.join(__dirname, 'pages', 'main.html'),
  });

  //* Quit app when main window gets closed
  mainWindow.on('closed', () => {
    app.quit();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

const loadPage = (page) => {
  mainWindow.loadFile(path.join(__dirname, 'pages', `${page}.html`));
};

// Catch content:change
ipcMain.on('page:change', (e, page) => {
  loadPage(page);
});
