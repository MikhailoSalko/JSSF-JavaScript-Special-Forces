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
    function closeModal(event) {
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
      evt.stopPropagation();
    }

    function isInShoppingList(bookId) {
      let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
      if (!booksDataJson) {
        booksDataJson = '[]';
      }
      let booksData = JSON.parse(booksDataJson);
      return booksData.find(book => book._id === bookId) !== undefined;
    }

    const congrTextEl = document.querySelector('.congrat-text');
    popup.querySelector('.add-card__bnt').addEventListener('click', evt => {
      if (isInShoppingList(bookId)) {
        removeFromShoppingList(book_json);
        evt.target.innerText = 'add to shopping list';
        congrTextEl.textContent = '';
      } else {
        addToShoppingList(book_json);
        evt.target.innerText = 'remove from the shopping list';
        congrTextEl.textContent =
          'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      }
    });

    // imgBook.addEventListener('click', event => {
    //   if (isInShoppingList(bookId)) {
    //     congrTextEl.textContent =
    //       'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    //   } else {
    //     congrTextEl.textContent = '';
    //   }
    // });

    // function checkBtn(event) {
    //   if (
    //     event.target.nodeName === 'BUTTON' &&
    //     event.target.textContent === 'remove from the shopping list'
    //   ) {
    //     event.target.innerText = 'add to shopping list';
    //     console.log('ok');
    //     const congrTextEl = document.querySelector('.congrat-text');
    //     console.log(congrTextEl);
    //     congrTextEl.classList.toggle('text--is-hidden');
    //   }
    // }

    // function showText(event) {
    //   checkBtn(event);
    //   if (event.target.nodeName !== 'BUTTON') {
    //     return;
    //   }

    //   console.log(event.target.nodeName);
    //   const congrTextEl = document.querySelector('.congrat-text');
    //   console.log(congrTextEl);
    //   congrTextEl.classList.toggle('text--is-hidden');
    // }

    function addToShoppingList(book) {
      console.log('adding', book);
      let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
      if (!booksDataJson) {
        booksDataJson = '[]';
      }
      const booksData = JSON.parse(booksDataJson);
      booksData.push(book);
      localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
    }

    function removeFromShoppingList(book) {
      console.log('removing', book);
      let booksDataJson = localStorage.getItem(BOOKS_STORAGE);
      if (booksDataJson === null) {
        return;
      }
      let booksData = JSON.parse(booksDataJson);
      booksData = booksData.filter(item => item._id !== book._id);
      localStorage.setItem(BOOKS_STORAGE, JSON.stringify(booksData));
    }
  });
}
