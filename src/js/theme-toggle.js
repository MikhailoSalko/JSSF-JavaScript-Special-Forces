export { setTheme, activateThemeToggle };

const storageKeyLibrary = 'isDark';
const toggleClass = 'theme-toggle-js';

const checkboxEl = document.querySelector(`.${toggleClass}`);

function activateThemeToggle(event, pageEl) {
  const isInput = event.target.classList.contains(toggleClass);
  if (isInput) {
    const checkboxEl = event.target;
    changeTheme(pageEl, checkboxEl);
  }
}

function changeTheme(pageEl) {
  if (checkboxEl.checked) {
    localStorage.setItem(storageKeyLibrary, 'true');
    setTheme(pageEl, checkboxEl);
  }
  if (!checkboxEl.checked) {
    localStorage.removeItem(storageKeyLibrary);
    setTheme(pageEl, checkboxEl);
  }
}

function setTheme(pageEl) {
  if (localStorage.getItem(storageKeyLibrary)) {
    pageEl.setAttribute('data-theme', 'dark');
    checkboxEl.checked = true;
  } else {
    pageEl.setAttribute('data-theme', 'light');
    checkboxEl.checked = false;
  }
}
