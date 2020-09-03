/* eslint-disable no-undef */
module.exports = {
  content: document.querySelector('.host'),
  home: document.getElementById('home'),
  add: document.getElementById('add'),
  explore: document.getElementById('explore'),

  title: () => document.getElementById('title'),
  authors: () => document.getElementById('authors'),
  keywords: () => document.getElementById('keywords'),
  tagsAuthor: () => document.getElementById('tags-author'),
  tagsKeyword: () => document.getElementById('tags-keyword'),
  year: () => document.getElementById('year'),
  personalComment: () => document.getElementById('personal-comment'),
  file: () => document.getElementById('file'),
  btnSelect: () => document.getElementById('btn-select-file'),
  btnClear: () => document.getElementById('btn-clear'),
  btnAdd: () => document.getElementById('btn-add'),
};
