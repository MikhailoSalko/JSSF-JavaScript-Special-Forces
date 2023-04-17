(() => {
  const refs = {
    openBookEL: document.querySelector('.checked-category'),
    bookModal: document.querySelector('.js-book-modal'),
    closeBookBtn: document.querySelector('.js-book-close'),
    bookcardEL: document.querySelector('.book-card__modal'),
  };

  refs.openBookEL.addEventListener('click', toggleModal);
  refs.closeBookBtn.addEventListener('click', toggleModal);
  // refs.bookModal.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.bookModal.classList.toggle('backdrop--is-hidden');
  }

  refs.bookModal.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      document.removeEventListener('keydown', event);
      toggleModal();
    }
  });
})();
