const MOBILE_MENU_CLOSE_ICON = "burger-menu";
const MOBILE_MENU_OPEN_ICON = "close";

let isOpened;

function changeMobileMenuIcon(e) {
  const menu = document.querySelector(".mobile-menu");

  const mobileMenuButtonUseRef = e.currentTarget.firstElementChild;
  const SPRITE_PATH = mobileMenuButtonUseRef.getAttribute("href").split("#")[0];

  isOpened = !isOpened;

  currentIcon = isOpened ? MOBILE_MENU_OPEN_ICON : MOBILE_MENU_CLOSE_ICON;

  mobileMenuButtonUseRef.setAttribute("href", `${SPRITE_PATH}#${currentIcon}`);

  mobileMenuButtonUseRef.setAttribute("is-opened", isOpened);

  menu.classList.toggle("active");
}
