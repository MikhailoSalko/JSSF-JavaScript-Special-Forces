(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-auth-open]'),
    closeModalBtn: document.querySelector('[data-modal-auth-close]'),
    modal: document.querySelector('[data-modal-auth]'),

    modalWindow: document.querySelector('[data-modal-auth-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    refs.modalWindow.classList.toggle('modal-animation');
  }
})();
