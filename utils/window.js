const { BrowserWindow } = require('electron');

const defaultOptions = {
  show: false,
  webPreferences: {
    nodeIntegration: true,
  },
};

class Window extends BrowserWindow {
  constructor({ file, ...options }) {
    super({ ...defaultOptions, ...options });

    this.loadFile(file);

    this.setMenuBarVisibility(false);

    this.on('ready-to-show', () => {
      this.show();
    });
  }
}

module.exports = Window;
