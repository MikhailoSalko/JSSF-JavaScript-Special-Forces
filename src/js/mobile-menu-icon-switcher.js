const mobileMenuButtonIconRef = document.querySelector(".mobile-menu__icon");
const mobileMenuButtonUseRef = mobileMenuButtonIconRef.firstElementChild;

const SPRITE_PATH = mobileMenuButtonUseRef.getAttribute("href").split("#")[0];
const MOBILE_MENU_CLOSE_ICON = "burger-menu";
const MOBILE_MENU_OPEN_ICON = "close";

let isOpened;

mobileMenuButtonIconRef.addEventListener("click", changeMobileMenuIcon);

function changeMobileMenuIcon() {
  //   debugger;
  isOpened = !isOpened;

  currentIcon = isOpened ? MOBILE_MENU_OPEN_ICON : MOBILE_MENU_CLOSE_ICON;

  mobileMenuButtonUseRef.setAttribute("href", `${SPRITE_PATH}#${currentIcon}`);

  mobileMenuButtonUseRef.setAttribute("is-opened", isOpened);
}
