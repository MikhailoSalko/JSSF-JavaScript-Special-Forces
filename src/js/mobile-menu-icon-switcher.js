const MOBILE_MENU_CLOSE_ICON = 'burger-menu';
const MOBILE_MENU_OPEN_ICON = 'close';

let isOpened;

function changeMobileMenuIcon(e) {
  const menu = document.querySelector('.mobile-menu');
  const mobileMenuButtonUseRef = e.currentTarget.firstElementChild;
  const SPRITE_PATH = mobileMenuButtonUseRef.getAttribute('href').split('#')[0];

  isOpened = !isOpened;

  const currentIcon = isOpened ? MOBILE_MENU_OPEN_ICON : MOBILE_MENU_CLOSE_ICON;

  mobileMenuButtonUseRef.setAttribute('href', `${SPRITE_PATH}#${currentIcon}`);

  mobileMenuButtonUseRef.setAttribute('is-opened', isOpened);

  menu.classList.toggle('active');
}

const navhom = document.querySelector('.mob-home');
const navshop = document.querySelector('.shop-link');

if (window.location.pathname === navhom.getAttribute('href')) {
  navhom.classList.add('active');
} else {
  navshop.classList.add('active');
}

export { changeMobileMenuIcon };
