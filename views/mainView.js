const elements = require('./elements');

const addMarkup = `
<form action="#" class="form">
<!-- Heading -->
<h2 class="heading-secondary">Add article</h2>

<!-- Title -->
<div class="form__group">
  <textarea
    class="form__input form__input--area"
    id="title"
    rows="3"
    cols="100"
    placeholder="Title"
    spellcheck="true"
    required
  ></textarea>
  <label for="title" class="form__label">Title</label>
</div>

<div class="form__authors-keywords">
  <!-- Authors -->
  <div class="form__group">
    <input
      type="text"
      class="form__input"
      placeholder="Authors"
      id="authors"
      required
    />
    <label for="authors" class="form__label">Authors</label>
    <div class="form__tags" id="tags-author">
      <!-- <span class="form__tags__item">Tolga Crossley</span>
      <span class="form__tags__item">Cassie Rutledge</span>
      <span class="form__tags__item">Felicity Sumner</span>
      <span class="form__tags__item">Myles Steadman</span>
      <span class="form__tags__item">James Clark</span>
      <span class="form__tags__item">Paisley Philip</span>
      <span class="form__tags__item">Lexi-Mae Contreras</span>
      <span class="form__tags__item">Mahi Mckenna</span> -->
    </div>
  </div>

  <!-- Keywords -->
  <div class="form__group">
    <input
      type="text"
      class="form__input"
      placeholder="Keywords"
      id="keywords"
      required
    />
    <label for="keywords" class="form__label">Keywords</label>
    <div class="form__tags" id="tags-keyword">
      <!-- <span class="form__tags__item">REM Sleep</span>
      <span class="form__tags__item">EEG</span>
      <span class="form__tags__item">rat</span>
      <span class="form__tags__item">sleep deprivation</span> -->
    </div>
  </div>
</div>

<!-- Year & SIC -->
<div class="form__year-sic">
  <div class="form__group">
    <input
      type="number"
      class="form__input form__input--year"
      placeholder="Year"
      id="year"
      required
    />
    <label for="year" class="form__label">Year</label>
  </div>
  <div class="form__sic">
    <input type="checkbox" tabindex="-1" id="sic" />
    <label for="sic">SIC</label>
  </div>
</div>

<!-- Personal Comment -->
<div class="form__group">
  <input
    type="text"
    class="form__input"
    placeholder="Personal Comment"
    id="personal-comment"
    required
  />
  <label for="personal-comment" class="form__label"
    >Personal Comment</label
  >
</div>

<!-- File -->
<div class="form__file">
  <input
    type="text"
    class="form__input form__input--year"
    placeholder="File"
    readonly
    required
  />
  <button class="btn" id="btn-select-file">Select File</button>
</div>

<div class="form__buttons">
  <button class="btn" id="btn-add">Add</button>
  <button class="btn" id="btn-clear">Clear</button>
</div>
</form>
`;

exports.renderContent = (section) => {
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
      elements.content.innerHTML = addMarkup;
      break;
    case 'explore':
      elements.content.innerHTML = '<h1>Explore</h1>';
      break;
    default:
      break;
  }
};
