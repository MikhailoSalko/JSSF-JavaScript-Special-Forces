import { FetchBooks } from './fetchBooks';
import { renderBookInfo } from './pop-up-modal-rendering';

const books = document.querySelector('.top-books', popup_modal);
function popup_modal() {
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
      const inShoppingList = localStorage.getItem(BOOKS_STORAGE);
      if (inShoppingList) {
        removeFromShoppingList();
      } else {
        addToShoppingList();
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

    const BOOKS_STORAGE = 'books';
    let booksData = {};

    popup.querySelector('.book-card__btn').addEventListener('click', () => {
      const inShoppingList = localStorage.getItem(BOOKS_STORAGE);
      if (inShoppingList) {
        removeFromShoppingList();
      } else {
        addToShoppingList();
      }
    });

    function addToShoppingList(bookId) {
      bookId = event.target
        .closest('li.js-book-modal')
        .getAttribute('data-book-id');
      booksData = bookId;
      localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
    }

    function removeFromShoppingList(bookId) {
      bookId = event.target
        .closest('li.js-book-modal')
        .getAttribute('data-book-id');
      bookId = book;
      const book = JSON.parse(localStorage.getItem(BOOKS_STORAGE));
      const addedBooks = localStorage.getItem(BOOKS_STORAGE);
      const parsedBooks = JSON.parse(addedBooks);
      if (parsedBooks.contains(bookId)) {
        removeItem(bookId);
      }
    }
  });
}
