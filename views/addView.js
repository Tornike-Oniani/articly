const elements = require('./elements');

exports.renderAuthor = (author) => {
  const authorMarkup = `<span class="form__tags__item">${author}</span>`;
  elements.tagsAuthor().insertAdjacentHTML('beforeend', authorMarkup);
};

exports.renderKeyword = (keyword) => {
  const authorMarkup = `<span class="form__tags__item">${keyword}</span>`;
  elements.tagsKeyword().insertAdjacentHTML('beforeend', authorMarkup);
};
