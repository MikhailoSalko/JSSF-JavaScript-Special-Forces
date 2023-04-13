import { renderCategories, changeCategoryStyle } from './js/categories';
import { activateThemeToggle } from './js/theme-toggle';

const pageEl = document.querySelector('html');

// Build Categories list
renderCategories();

// На цей слухач кліків можна вішати всі кліки, що відбуваються на сторінці.
// Але не перевірено, чи коректно буде працювати на обох сторінках. Якщо ні - поправимо)
pageEl.addEventListener('click', event => {
  //   activate theme-toggle
  activateThemeToggle(event, pageEl);

  // change categories styles
  changeCategoryStyle(event);
});
