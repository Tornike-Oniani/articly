const elements = require('./elements');

exports.renderItem = (tags, item) => {
  const markup = `<span class="form__tags__item">${item}</span>`;
  elements[tags]().insertAdjacentHTML('beforeend', markup);
};

exports.getInput = () => {
  return {
    title: elements.title().value,
    year: elements.year().value,
    personalComment: elements.personalComment().value,
    sic: elements.sic().checked ? 1 : 0,
  };
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
