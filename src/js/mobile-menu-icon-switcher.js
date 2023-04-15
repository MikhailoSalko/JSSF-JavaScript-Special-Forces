const mobileMenuButtonIconRef = document.querySelector(".mobile-menu__icon");
const mobileMenuButtonUseRef = mobileMenuButtonIconRef.firstElementChild;

let isOpened = mobileMenuButtonUseRef.getAttribute("is-opened");

const SPRITE_PATH = mobileMenuButtonUseRef.getAttribute("href").split("#")[0];

const MOBILE_MENU_CLOSE_ICON = "burger-menu";
const MOBILE_MENU_OPEN_ICON = "close";

mobileMenuButtonIconRef.addEventListener("click", changeMobileMenuIcon);

function changeMobileMenuIcon() {
  isOpened = !isOpened;

  currentIcon = isOpened ? MOBILE_MENU_OPEN_ICON : MOBILE_MENU_CLOSE_ICON;

  mobileMenuButtonUseRef.setAttribute("is-opened", isOpened);

  mobileMenuButtonUseRef.setAttribute("href", `${SPRITE_PATH}#${currentIcon}`);
}
