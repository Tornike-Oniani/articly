const { dialog, getCurrentWindow } = require('electron').remote;
const elements = require('../views/elements');
const { renderAuthor, renderKeyword, clear } = require('../views/addView');

exports.init = () => {
  // Author add event
  elements.authors().addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      // Prevent form submit
      e.preventDefault();

      renderAuthor(elements.authors().value);
      elements.authors().value = '';
    }
  });

  // Add keyword
  elements.keywords().addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      // Prevent form submit
      e.preventDefault();

      renderKeyword(elements.keywords().value);
      elements.keywords().value = '';
    }
  });

  // Select file
  elements.btnSelect().addEventListener('click', async (e) => {
    // 1. Prevent form
    e.preventDefault();

    // 2. Open file dialog
    const path = await dialog.showOpenDialog(getCurrentWindow(), {
      properties: ['openFile'],
    });

    // 3. Get file name from full path
    const fileName = path.filePaths[0].replace(/^.*[\\\/]/, '');

    // 4. Write file name to file input
    elements.file().value = fileName;
  });

  // Clear
  elements.btnClear().addEventListener('click', (e) => {
    e.preventDefault();

    clear();
  });
};
