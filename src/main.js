import { renderCategories } from "./js/categories";
import { changeTheme } from "./js/theme-toggle";
import { currentPageSwitcher } from "./js/current-page-switcher";

import './js/support-ukraine';

const pageEl = document.querySelector("html");
// На сторінці Shop List шукати за класом ".shop-link"
const currentPage = document.querySelector(".nav__link");

currentPageSwitcher(currentPage);

// На цей слухач кліків можна вішати всі кліки, що відбуваються на сторінці.
// Але не перевірено, чи коректно буде працювати на обох сторінках. Якщо ні - поправимо)
pageEl.addEventListener("click", event => {
  //   activate theme-toggle
  const isInput = event.target.classList.contains("theme-toggle-js");
  if (isInput) {
    const checkboxEl = event.target;
    changeTheme(pageEl, checkboxEl);
  } else console.log("don`t turget"); //delete else block
});

// Build Categories list
renderCategories();