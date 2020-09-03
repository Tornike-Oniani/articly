const fs = require('fs');
const util = require('util');
const path = require('path');
const elements = require('./elements');

const readFile = util.promisify(fs.readFile);
let addMarkup;

exports.renderContent = async (section) => {
  // 1. Change selected nav-item
  const el = document.querySelector('.side-nav__item--active');
  if (el) el.classList.remove('side-nav__item--active');
  elements[section].classList.add('side-nav__item--active');

  // 2. Host content
  switch (section) {
    case 'home':
      elements.content.innerHTML = '<h1>Home</h1>';
      break;
    case 'add':
      addMarkup = await readFile(path.join(__dirname, '../pages', 'add.html'));
      elements.content.innerHTML = addMarkup;
      break;
    case 'explore':
      elements.content.innerHTML = '<h1>Explore</h1>';
      break;
    default:
      break;
  }
};
