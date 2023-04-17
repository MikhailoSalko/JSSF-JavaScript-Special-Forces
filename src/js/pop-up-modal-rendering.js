import { FetchBooks } from './fetchBooks';
export { renderBookCard };

const fetchBook = new FetchBooks();
const bookCardEL = document.querySelector('.book-card');
const bookMarkup = renderBookInfo(book);

function renderBookCard() {
  fetchBook.fetchBookId().then(data => {
    bookCardEL.insertAdjacentHTML('beforeend', renderBookInfo(data));
  });
}

function renderBookInfo(bookId) {
  const markup = bookId
    .map(book => {
      const {
        book_image,
        title,
        author,
        description,
        buy_links: [url],
      } = book;

      return `<div class="book-card">
      <div class="book-card__thumb">
        <img class="book-card__img" src="${book_image}" alt="book_image" loading="lazy" />
      </div>
      <div class="book-info">
        <h2 class="book-title">${title}</h2>
        <h3 class="book-author">${author}</h3>
        <p class="book-description">${description}</p>
        <ul class="shops-list list">
          <li class="shops-item">
            <a
              class="buy-links"
              href="${buy_links.find(link => link.name === 'Amazon')}"
              aria-label="amazon-shop icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="amazon-shop__icon book-shop__icons"
                src="./images/shopping-list/amazon-link_1x.png"
                alt="amazon-shop icon"
                loading="lazy"
              />
            </a>
          </li>
          <li class="shops-item">
            <a
              class="buy-links"
              href="${buy_links.find(link => link.name === 'Apple Books')}"
              aria-label="apple-book icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="apple-book__icon book-shop__icons"
                src="./images/shopping-list/books-link_1x.png"
                alt="apple-book icon"
                loading="lazy"
              />
            </a>
          </li>
          <li class="shops-item">
            <a
              class="buy-links"
              href="${buy_links.find(link => link.name === 'Bookshop')}"
              aria-label="bookshop icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="bookshop-icon book-shop__icons"
                src="./images/shopping-list/book-shop-link_1x.png"
                alt="bookshop icon"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>`;
    })
    .join('');
  bookCardEL.innerHTML = '';
  bookCardEL.insertAdjacentHTML('beforeend', markup);
}
