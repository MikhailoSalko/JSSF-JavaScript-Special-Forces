import { FetchBooks } from './fetchBooks';
import { renderBookInfo } from './pop-up-modal-rendering';

const books = document.querySelector('.top-books');
if (!!books) {
  books.addEventListener('click', async event => {
    const bookCard = event.target.closest('li.js-book-modal');
    if (!bookCard) {
      return;
    }
    const bookId = bookCard.getAttribute('data-book-id');
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

    const BOOKS_STORAGE = 'books';
    const popup = document.createElement('div');
    popup.innerHTML = renderBookInfo(book_data, isInShoppingList(bookId));
    document.body.appendChild(popup);

    const onEscape = event => {
      if (event.key === 'Escape') {
        document.body.removeChild(popup);
        document.removeEventListener('keyup', onEscape);
      }
    };

    document.addEventListener('keyup', onEscape);

    const modalCloseBtnEl = popup.querySelector('.modal-close__btn');

    modalCloseBtnEl.addEventListener('click', closeModal);
    function closeModal() {
      document.body.removeChild(popup);
      document.removeEventListener('keyup', onEscape);
      event.stopPropagation();
    }

    const backDropModalEl = popup.querySelector('.backdrop__modal');
    backDropModalEl.addEventListener('click', closeModalClick);
    function closeModalClick(evt) {
      if (evt.target !== backDropModalEl) {
        return;
      }
      document.body.removeChild(popup);
      document.removeEventListener('keyup', onEscape);
      event.stopPropagation();
    }

    function isInShoppingList(bookId) {
      let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
      if (!booksDataJson) {
        booksDataJson = '[]';
      }
      let booksData = JSON.parse(booksDataJson);
      return booksData.indexOf(bookId) !== -1;
    }

    popup.querySelector('.book-card__btn').addEventListener('click', evt => {
      if (isInShoppingList(bookId)) {
        removeFromShoppingList(bookId);
        evt.target.innerText = 'add to shopping list';
      } else {
        addToShoppingList(bookId);
        evt.target.innerText = 'remove from the shopping list';
      }
    });

    function addToShoppingList(bookId) {
      let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
      if (!booksDataJson) {
        booksDataJson = '[]';
      }
      const booksData = JSON.parse(booksDataJson);
      booksData.push(bookId);
      localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
    }

    function removeFromShoppingList(bookId) {
      let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
      if (booksDataJson === null) {
        return;
      }
      let booksData = JSON.parse(booksDataJson);
      booksData = booksData.filter(it => it !== bookId);
      localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
    }
  });
}
