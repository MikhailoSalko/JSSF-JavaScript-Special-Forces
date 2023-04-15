import { renderCategories, changeCategoryStyle } from './js/categories';
import { activateThemeToggle } from './js/theme-toggle';
import { changeTheme } from './js/theme-toggle';
import { currentPageSwitcher } from './js/current-page-switcher';
import './js/support-ukraine';
import './js/authorization-modal';

const pageEl = document.querySelector('html');
const burger = document.getElementById('burger-btn');
const menu = document.querySelector('.mobile-menu');

// На сторінці Shop List шукати за класом ".shop-link"
const currentPage = document.querySelector('.nav__link');

currentPageSwitcher(currentPage);

// Build Categories list
renderCategories();

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
// На цей слухач кліків можна вішати всі кліки, що відбуваються на сторінці.
// Але не перевірено, чи коректно буде працювати на обох сторінках. Якщо ні - поправимо)
pageEl.addEventListener('click', event => {
  //   activate theme-toggle
  activateThemeToggle(event, pageEl);

  // change categories styles
  changeCategoryStyle(event);
});
