import { setTheme, activateThemeToggle } from './js/theme-toggle';
import { renderCategories, changeCategoryStyle } from './js/categories';
import { currentPageSwitcher } from './js/current-page-switcher';
import { changeMobileMenuIcon } from './js/mobile-menu-icon-switcher';
import './js/support-ukraine';
import './js/authorization-modal';

const pageEl = document.querySelector('html');

// Початкові налаштування теми
setTheme(pageEl);

// На сторінці Shop List шукати за класом ".shop-link"
const currentPage = document.querySelector('.nav__link');
currentPageSwitcher(currentPage);

// Build Categories list
renderCategories();

// На цей слухач кліків можна вішати всі кліки, що відбуваються на сторінці.
// Але не перевірено, чи коректно буде працювати на обох сторінках. Якщо ні - поправимо)
pageEl.addEventListener('click', event => {
  //   activate theme-toggle
  activateThemeToggle(event, pageEl);

  // change categories styles
  //Можна цю функцію помістити у функцію запиту категорій у Інни, але не нахімічити із імпортами
  changeCategoryStyle(event);
});

//Змінює іконку відкриття/закриття модалки на мобілкі. Пізніше привʼяжемо ще відкриття і закриття самої модалки
const mobileMenuButtonIconRef = document.querySelector('.mobile-menu__icon');
mobileMenuButtonIconRef.addEventListener('click', changeMobileMenuIcon);
