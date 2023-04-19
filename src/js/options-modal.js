const optionsModal = document.querySelector('[data-modal-options-window]');
const optionsDeclineBtn = document.querySelector('[data-modal-options-close]');
const LOCALSTORAGE_KEY = 'user choise';

const modal = document.querySelector('[data-modal-auth]');
const openModalBtnOptions = document.querySelector(
  '[data-optionmodal-auth-open]'
);

function showSignupCall() {
  if (localStorage.getItem(LOCALSTORAGE_KEY) != 1) {
    setTimeout(() => {
      optionsModal.classList.add('is-shown');
      openModalBtnOptions.addEventListener('click', function () {
        localStorage.setItem(LOCALSTORAGE_KEY, 1);
        optionsModal.classList.remove('is-shown');
      });
      optionsDeclineBtn.addEventListener('click', function () {
        localStorage.setItem(LOCALSTORAGE_KEY, 1);
        optionsModal.classList.remove('is-shown');
      });
    }, 8000);
  }
}

showSignupCall();
