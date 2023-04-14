
import { renderCategories, changeCategoryStyle } from './js/categories';
import { activateThemeToggle } from './js/theme-toggle';
import { changeTheme } from "./js/theme-toggle";
import { currentPageSwitcher } from "./js/current-page-switcher";


const pageEl = document.querySelector("html");
// На сторінці Shop List шукати за класом ".shop-link"
const currentPage = document.querySelector(".nav__link");

currentPageSwitcher(currentPage);

// Build Categories list
renderCategories();

// На цей слухач кліків можна вішати всі кліки, що відбуваються на сторінці.
// Але не перевірено, чи коректно буде працювати на обох сторінках. Якщо ні - поправимо)
pageEl.addEventListener("click", event => {
  //   activate theme-toggle
  activateThemeToggle(event, pageEl);

  const isInput = event.target.classList.contains("theme-toggle-js");
  if (isInput) {
    const checkboxEl = event.target;
    changeTheme(pageEl, checkboxEl);
  } else console.log("don`t turget"); //delete else block
});


  // change categories styles
  changeCategoryStyle(event);
});
