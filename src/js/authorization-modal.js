(() => {
  const refs = {
    openModalBtnBurger: document.querySelector('[data-burgermodal-auth-open]'),

    openModalBtnOptions: document.querySelector('[data-optionmodal-auth-open]'),

    openModalBtn: document.querySelector('[data-modal-auth-open]'),
    closeModalBtn: document.querySelector('[data-modal-auth-close]'),
    modal: document.querySelector('[data-modal-auth]'),

    modalWindow: document.querySelector('[data-modal-auth-window]'),
  };

  refs.openModalBtnBurger.addEventListener('click', onOpenModal);

  refs.openModalBtnOptions.addEventListener('click', onOpenModal);

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);

  refs.modal.addEventListener('click', onBackdropClick);

  function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    refs.modal.classList.remove('is-hidden');
    refs.modalWindow.classList.add('modal-animation');
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.modal.classList.add('is-hidden');
    refs.modalWindow.classList.add('modal-animation');
  }

  // add features =================================

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();
    }
  }
  // ===============================================
})();
