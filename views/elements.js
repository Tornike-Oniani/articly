/* eslint-disable no-undef */
module.exports = {
  content: document.querySelector('.host'),
  home: document.getElementById('home'),
  add: document.getElementById('add'),
  explore: document.getElementById('explore'),

  authors: () => document.getElementById('authors'),
  keywords: () => document.getElementById('keywords'),
  tagsAuthor: () => document.getElementById('tags-author'),
  tagsKeyword: () => document.getElementById('tags-keyword'),
};
