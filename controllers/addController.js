const { dialog, getCurrentWindow } = require('electron').remote;
const elements = require('../views/elements');
const { renderItem, clear, getInput } = require('../views/addView');

let input = {
  authors: [],
  keywords: [],
};

const addItem = (e, itemName) => {
  // Prevent form submit
  e.preventDefault();

  // 1. Add item to input object
  const item = elements[itemName]().value;
  input[itemName].push(item);

  // 2. Render added item
  // eslint-disable-next-line no-unused-expressions
  itemName === 'authors'
    ? renderItem('tagsAuthor', item)
    : renderItem('tagsKeyword', item);
  elements[itemName]().value = '';
};

exports.init = () => {
  // Add author
  elements.authors().addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      addItem(e, 'authors');
    }
  });

  // Add keyword
  elements.keywords().addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      addItem(e, 'keywords');
    }
  });

  elements.tagsAuthor().addEventListener('click', (e) => {
    const el = e.target.closest('.form__tags__item');
    if (el) console.log(el.innerHtml);
  });

  // Select file
  elements.btnSelect().addEventListener('click', async (e) => {
    // 1. Prevent form
    e.preventDefault();

    // 2. Open file dialog
    const path = await dialog.showOpenDialog(getCurrentWindow(), {
      properties: ['openFile'],
    });

    // Check if path exists
    if (path.filePaths[0]) {
      // 3. Get file name from full path
      const fileName = path.filePaths[0].replace(/^.*[\\/]/, '');

      // 4. Write file name to file input
      elements.file().value = fileName;

      // 5. Add full file path to input object
      input.file = path.filePaths[0];
    }
  });

  // Clear
  elements.btnClear().addEventListener('click', (e) => {
    e.preventDefault();

    // 1. Clear input object
    input = {
      authors: [],
      keywords: [],
    };

    // 2. Clear UI
    clear();
  });

  // Add
  elements.btnAdd().addEventListener('click', (e) => {
    e.preventDefault();

    const finalInput = Object.assign(getInput(), input);

    console.log(finalInput);
  });
};
