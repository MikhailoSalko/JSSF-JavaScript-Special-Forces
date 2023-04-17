import { FetchBooks } from './fetchBooks';
import { renderBookInfo } from './pop-up-modal-rendering';
// (() => {
//   const refs = {
//     bookModal: document.querySelector('.js-book-modal'),
//     closeBookBtn: document.querySelector('.js-book-close'),
//     bookcardEL: document.querySelector('.book-card__modal'),
//     categoryEl: document.querySelector('.checked-category'),
//   };

//   refs.categoryEl.addEventListener('click', toggleModal);
//   refs.closeBookBtn.addEventListener('click', toggleModal);
//   refs.bookModal.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.bookModal.classList.toggle('backdrop--is-hidden');
//     console.log('hello');
//   }

//   refs.bookModal.addEventListener('keydown', event => {
//     if (event.key === 'Escape') {
//       document.removeEventListener('keydown', event);
//       toggleModal();
//     }
//   });
// })();

(() => {
  const books = document.querySelector('.top-books');
  books.addEventListener('click', async event => {
    const bookId = event.target
      .closest('li.js-book-modal')
      .getAttribute('data-book-id');
    const fetch = new FetchBooks();
    fetch.bookId = bookId;
    const response = await fetch.fetchBookId();
    const book_json = response.data;
    const book_data = {
      book_image: book_json.book_image,
      title: book_json.title,
      description: book_json.description,
      author: book_json.author,
      amazon_link: book_json.buy_links.find(link => link.name === 'Amazon')
        ?.url,
      apple_link: book_json.buy_links.find(link => link.name === 'Apple Books')
        ?.url,
      bookshop_link: book_json.buy_links.find(link => link.name === 'Bookshop')
        ?.url,
    };

    const popup = document.createElement('div');
    const inShoppingList = false;
    popup.innerHTML = renderBookInfo(book_data, inShoppingList);
    document.body.appendChild(popup);

    const onEscape = event => {
      if (event.key === 'Escape') {
        document.body.removeChild(popup);
        document.removeEventListener('keyup', onEscape);
      }
    };

    document.addEventListener('keyup', onEscape);

    popup.querySelector('.book-card__btn').addEventListener('click', () => {
      if (inShoppingList) {
        // remove;
      } else {
        // add;
      }
    });

    const modalCloseBtnEl = popup.querySelector('.modal-close__btn');

    modalCloseBtnEl.addEventListener('click', closeModal);
    function closeModal() {
      document.body.removeChild(popup);
      document.removeEventListener('keyup', onEscape);
      event.stopPropagation();
    }

    const backDropModalEl = popup.querySelector('.backdrop__modal');
    backDropModalEl.addEventListener('click', closeModalClick);
    function closeModalClick() {
      const bookcardEL = document.querySelector('.book-card__modal');
      if (!event.target.classList.contains('.book-card__modal'));
      document.body.removeChild(popup);
      document.removeEventListener('keyup', onEscape);
      event.stopPropagation();
    }

    const STORAGE_BOOKS = 'books';
    let booksData = {};
    localStorage.setItem('books', bookId);
    const addedBooks = localStorage.getItem(STORAGE_BOOKS);
    const parsedBooks = JSON.parse(addedBooks);
    localStorage.removeItem(STORAGE_BOOKS);
  });
})();
