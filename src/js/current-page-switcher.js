import { Notify } from 'notiflix';
export { setActivePage, blockReloadIfCurrent };

const navClass = 'nav__link';
const currentPageClass = 'current-page';

const navLinkEls = document.querySelectorAll(`.${navClass}`);

function setActivePage() {
  navLinkEls.forEach(el => {
    if (window.location.pathname === el.getAttribute('href')) {
      el.classList.add(currentPageClass);
    } else {
      if (el.classList.contains(currentPageClass)) {
        el.classList.remove(currentPageClass);
      }
    }
  });
}

function blockReloadIfCurrent(event) {
  if (event.target.classList.contains(currentPageClass)) {
    event.preventDefault();
    Notify.info(
      `This is the ${event.target.textContent.toLowerCase()} page already`
    );
  }
}
