const elements = require('./elements');

exports.renderAuthor = (author) => {
  const authorMarkup = `<span class="form__tags__item">${author}</span>`;
  elements.tagsAuthor().insertAdjacentHTML('beforeend', authorMarkup);
};

exports.renderKeyword = (keyword) => {
  const authorMarkup = `<span class="form__tags__item">${keyword}</span>`;
  elements.tagsKeyword().insertAdjacentHTML('beforeend', authorMarkup);
};

exports.clear = () => {
  elements.title().value = null;
  elements.authors().value = null;
  elements.tagsAuthor().innerHTML = null;
  elements.keywords().value = null;
  elements.tagsKeyword().innerHTML = null;
  elements.year().value = null;
  elements.personalComment().value = null;
  elements.file().value = null;
};
