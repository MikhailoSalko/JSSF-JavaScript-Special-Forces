import { setTheme, activateThemeToggle } from './js/theme-toggle';
import { renderCategories, changeCategoryStyle } from './js/categories';
import {
  setActivePage,
  blockReloadIfCurrent,
} from './js/current-page-switcher';
import { changeMobileMenuIcon } from './js/mobile-menu-icon-switcher';
import './js/support-ukraine';
import './js/authorization-modal';
import './js/authorization-form';
import './js/options-modal';
import './js/pop-up-modal-window';
import './js/firebase';
import './js/books-card-rendering';

const pageEl = document.querySelector('html');

// Початкові налаштування теми
setTheme(pageEl);

//Показ активної сторінки
setActivePage();

const userAutherizedBtnRef = document.querySelector('.user-authorized__btn');

userAutherizedBtnRef.addEventListener('click', () => {
  const logOutBtnRef = document.querySelector('.user-log-out');
  logOutBtnRef.classList.toggle('lo-open');
});

// Build Categories list
renderCategories();

// На цей слухач кліків можна вішати всі кліки, що відбуваються на сторінці.
// Але не перевірено, чи коректно буде працювати на обох сторінках. Якщо ні - поправимо)
pageEl.addEventListener('click', event => {
  //   activate theme-toggle
  activateThemeToggle(event, pageEl);

  //Block active page reload
  blockReloadIfCurrent(event);

  // change categories styles
  changeCategoryStyle(event);
});

//Змінює іконку відкриття/закриття модалки на мобілкі. Пізніше привʼяжемо ще відкриття і закриття самої модалки
const mobileMenuButtonIconRef = document.querySelector('.mobile-menu__icon');
mobileMenuButtonIconRef.addEventListener('click', changeMobileMenuIcon);

// перезавантажує сторінку при проходженні через брейкпойнти
let currentRenderWidth = window.innerWidth;
addEventListener('resize', () => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1279 && currentRenderWidth < 1280) ||
    (window.innerWidth < 1280 && currentRenderWidth > 1279) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    currentRenderWidth = window.innerWidth;
    location.reload();
  }
});
