const elements = require('../views/elements');
const { renderAuthor, renderKeyword } = require('../views/addView');

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
};
