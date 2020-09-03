const elements = require('../views/elements');
const { renderContent } = require('../views/mainView');
const addController = require('./addController.js');

// Set active
elements.home.classList.add('side-nav__item--active');

// Init
(() => {
  renderContent('home');
})();

// Content changed events
[elements.home, elements.add, elements.explore].forEach((control) => {
  control.addEventListener('click', async (e) => {
    const el = e.target.closest('.side-nav__item');
    await renderContent(el.id);
    addController.init();
  });

  // control.addEventListener('click', (e) => {
  //   const el = e.target.closest('.side-nav__item');
  //   ipcRenderer.send('page:change', el.id);
  // });
});
