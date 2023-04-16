export { setTheme, activateThemeToggle, changeTheme };

const toggleClass = "theme-toggle-js";

function setTheme(pageElement, isDark) {
  if (isDark) {
    pageElement.setAttribute("data-theme", "dark");
  } else {
    pageElement.setAttribute("data-theme", "light");
  }
}

function activateThemeToggle(event, pageEl) {
  const isInput = event.target.classList.contains(toggleClass);
  if (isInput) {
    const checkboxEl = event.target;
    changeTheme(pageEl, checkboxEl);
  }
}

function changeTheme(pageEl, checkboxEl) {
  if (checkboxEl.checked) {
    pageEl.setAttribute("data-theme", "dark");
  }
  if (!checkboxEl.checked) {
    pageEl.setAttribute("data-theme", "light");
  }
}
