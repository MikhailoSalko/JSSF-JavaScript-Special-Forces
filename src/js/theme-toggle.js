

export function setTheme(pageElement, isDark) {
  if (isDark) {
    pageElement.setAttribute('data-theme', 'dark');
  } else {
    pageElement.setAttribute('data-theme', 'light');
  }
}

export function changeTheme(pageEl, checkboxEl) {
  if (checkboxEl.checked) {
    pageEl.setAttribute('data-theme', 'dark');
  }
  if (!checkboxEl.checked) {
    pageEl.setAttribute('data-theme', 'light');
  }
}
