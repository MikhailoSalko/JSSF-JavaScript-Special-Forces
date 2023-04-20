import { FetchBooks } from './fetchBooks';
export { renderBookInfo };

function renderBookInfo(book, inShoppingList) {
  const card__btn = inShoppingList
    ? '<button class="card__btn add-card__bnt btn">remove from shop list</button> <p class = "congrat-text">Congrats!</p>'
    : '<button class="card__btn add-card__bnt btn">add to shop list</button> <p class = "congrat-text"></p>';
  return `<div class="backdrop backdrop__modal js-book-modal">
  <div class="modal book-card__modal scrollable">
    <button class="modal-close__btn js-book-close">
      <img src=${new URL(
        '../images/x-close.svg',
        import.meta.url
      )} alt="close_icon" width="24" height="24"/>
    </button>
    <div class="book-card">
      <div class="book-card__thumb">
        <img class="book-card__img" src="${
          book.book_image
        }" alt="book_image" loading="lazy" />
      </div>
      <div class="book-info">
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">${book.author}</h3>
        <p class="book-description">${book.description}</p>
        <ul class="shops-list list">
          <li class="shops-item">
            <a
              class="buy-links"
              href="${book.amazon_link}"
              aria-label="amazon-shop icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="amazon-shop__icon book-shop__icons"
                src="${new URL(
                  '../images/shopping-list/amazon-link_2x.png',
                  import.meta.url
                )}"
                alt="amazon-shop icon"
                loading="lazy"
              />
            </a>
          </li>
          <li class="shops-item">
            <a
              class="buy-links"
              href="${book.apple_link}"
              aria-label="apple-book icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="apple-book__icon book-shop__icons"
                src="${new URL(
                  '../images/shopping-list/books-link_2x.png',
                  import.meta.url
                )}"
                alt="apple-book icon"
                loading="lazy"
              />
            </a>
          </li>
          <li class="shops-item">
            <a
              class="buy-links"
              href="${book.bookshop_link}"
              aria-label="bookshop icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="bookshop-icon book-shop__icons"
                src="${new URL(
                  '../images/shopping-list/book-shop-link_2x.png',
                  import.meta.url
                )}"
                alt="bookshop icon"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="book-card__btn">${card__btn}</div>`;
}
