// import sprite from "../images/icons.svg"
import { currentPageSwitcher } from './current-page-switcher';
const currentPage = document.querySelector('.shop-mob');
currentPageSwitcher(currentPage);

const bookListEl = document.querySelector('.shoplist-main');
const shopIsEmpty = document.querySelector('.shoplist-empty');
const sectionTitle = document.querySelector('.shoplist-title');

let booksInShop = JSON.parse(localStorage.getItem('books')) ?? [];

let activePage = 1;
const pageSize = 3;

const renderBooks = arr => {
  const markup = arr
    .map(book => {
      if (window.matchMedia('(max-width: 376px)').matches) {
        return `<li><div class="shoplist-book-card" id=${book._id}>
        <button type="button" class="shoplist-delete-book-btn">
        <img src=${new URL(
          '../images/shopping-list/Icon.svg',

          import.meta.url
        )} class="shoplist-delete-book-icon" alt="Delete book" width="15" height="15" />
        </button>
        <div class="shoplist-book-card-top">
        <div><img class="shoplist-book-cover" src=${
          book.book_image
        } alt="book cover" width=${book.book_image_width} height=${
          book.book_image_height
        }/>
        <p class="shoplist-book-author">${book.author}</p></div>
        <div><p class="shoplist-book-title">${book.title}</p>
        <p class="shoplist-book-category">${book.list_name}</p>
        <div class="shops-logo"><a href=${
          book.buy_links[0].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Amazon">
        <img src=${new URL(
          '../images/shopping-list/amazon-link_2x.png',
          import.meta.url
        )} class="shop-logo amazon" width="48" height="15" alt="Amazon" />
        </a>
        <a href=${
          book.buy_links[1].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Apple Books">
        <img src=${new URL(
          '../images/shopping-list/books-link_2x.png',
          import.meta.url
        )} class="shop-logo apple-books" width="28" height="27" alt="Apple Books" />
        </a>
        <a href=${
          book.buy_links[4].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Book Shop">
        <img src=${new URL(
          '../images/shopping-list/book-shop-link_2x.png',
          import.meta.url
        )} class="shop-logo book-shop" width="32" height="30" alt="Book Shop" />
        </a></div></div></div>
        <p class="shoplist-book-description">${book.description}</p>
      </div></li>`;
      } else {
        return `<li><div class="shoplist-book-card" id=${book._id}>
        <button type="button" class="shoplist-delete-book-btn">
          <img src=${new URL(
            '../images/shopping-list/Icon.svg',
            import.meta.url
          )} class="shoplist-delete-book-icon" alt="Delete book" width="14" height="14" />
        </button>
        <div><img class="shoplist-book-cover" src=${
          book.book_image
        } alt="book cover" width=${book.book_image_width} height=${
          book.book_image_height
        }/></div>
        <div><p class="shoplist-book-title">${book.title}</p>
        <p class="shoplist-book-category">${book.list_name}</p>
        <p class="shoplist-book-description">${book.description}</p>
        <p class="shoplist-book-author">${book.author}</p>
        </div>
        <div class="shops-logo"><a href=${
          book.buy_links[0].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Amazon">
        <img src=${new URL(
          '../images/shopping-list/amazon-link_2x.png',
          import.meta.url
        )} class="shop-logo amazon" width="48" height="15" alt="Amazon" />
        </a>
        <a href=${
          book.buy_links[1].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Apple Books">
        <img src=${new URL(
          '../images/shopping-list/books-link_2x.png',
          import.meta.url
        )} class="shop-logo apple-books" width="28" height="27" alt="Apple Books" />
        </a>
        <a href=${
          book.buy_links[4].url
        } class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Book Shop">
        <img src=${new URL(
          '../images/shopping-list/book-shop-link_2x.png',
          import.meta.url
        )} class="shop-logo book-shop" width="32" height="30" alt="Book Shop" />
        </a></div>
      </div></li>`;
      }
    })
    .join('');

  shopIsEmpty.innerHTML = '';
  bookListEl.innerHTML = markup;
  sectionTitle.classList.add('title-when-books');
};

const displayData = (arr, startIndex) => {
  const pageData = arr.slice(startIndex, startIndex + pageSize);
  renderBooks(pageData);
};

if (booksInShop.length > 0) {
  window.onload = function () {
    renderBooks(booksInShop.slice(0, pageSize));
  };
  window.onresize = function () {
    renderBooks(booksInShop.slice(0, pageSize));
  };
} else if (booksInShop.length === 0) {
  shopIsEmpty.innerHTML = `<p class="information-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="book_img"></div>`;
}

const deleteBook = id => {
  const books = JSON.parse(localStorage.getItem('books'));
  const updatedBooks = books.filter(book => book._id !== id);
  localStorage.setItem('books', JSON.stringify(updatedBooks));
  if (updatedBooks.length === 0) {
    shopIsEmpty.innerHTML = `<p class="information-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div class="book_img"></div>`;
    bookListEl.innerHTML = '';
    sectionTitle.classList.remove('title-when-books');
  } else {
    if (updatedBooks.length % pageSize === 0) {
      activePage -= 1;
    }

    const books = updatedBooks.slice(
      (activePage - 1) * pageSize,
      activePage * pageSize
    );

    renderBooks(books);
  }

  displayPagination();
};

bookListEl.addEventListener('click', event => {
  if (
    event.target.classList.contains('shoplist-delete-book-icon') ||
    event.target.classList.contains('shoplist-delete-book-btn')
  ) {
    const bookCard = event.target.closest('.shoplist-book-card');
    const bookId = bookCard.getAttribute('id');
    deleteBook(bookId);
  }
});

// \/------- pagination ------\/
const sectionShoplist = document.querySelector('.shoplist');
const heading = document.createElement('div');
heading.className = 'pagination-container';
sectionShoplist.append(heading);

// const pageSize = 3;
// let activePage = 1;
let totalPages = Math.ceil(booksInShop.length / pageSize);

const displayPagination = () => {
  const books = JSON.parse(localStorage.getItem('books')) ?? [];

  const containerPagination = document.querySelector('.pagination-container');
  containerPagination.innerHTML = '';

  if (books.length <= pageSize) return;

  const firstPage = document.createElement('button');
  firstPage.className = 'button-pagination symbols';

  firstPage.innerHTML = '&#171;';
  firstPage.disabled = activePage === 1;
  firstPage.addEventListener('click', () => {
    activePage = 1;
    displayData(books, 0);
    displayPagination();
  });
  containerPagination.appendChild(firstPage);

  const prevPage = document.createElement('button');
  prevPage.className = 'button-pagination symbols';
  prevPage.innerHTML = '&#8249;';
  prevPage.disabled = activePage === 1;
  prevPage.addEventListener('click', () => {
    activePage--;
    const startIndex = (activePage - 1) * pageSize;
    displayData(books, startIndex);
    displayPagination();
  });
  containerPagination.appendChild(prevPage);

  let startPage =
    activePage <= 2
      ? 1
      : activePage >= totalPages - 1
      ? totalPages - 2
      : activePage - 1;

  const dotsStart = startPage > 1;
  if (dotsStart) {
    const dots = document.createElement('button');
    dots.className = 'button-pagination';
    dots.innerHTML = '&#8230;';
    containerPagination.appendChild(dots);
  }

  for (let i = startPage; i < startPage + 3 && i <= totalPages; i++) {
    const page = document.createElement('button');
    page.className = 'button-pagination';
    page.innerHTML = i;
    page.disabled = i === activePage;
    page.classList.toggle('active', i === activePage);
    page.addEventListener('click', () => {
      activePage = i;
      const startIndex = (activePage - 1) * pageSize;
      displayData(books, startIndex);
      displayPagination();
    });
    containerPagination.appendChild(page);
  }

  const dotsEnd = startPage + 2 < totalPages;
  if (dotsEnd) {
    const dots = document.createElement('button');
    dots.className = 'button-pagination';
    const dotsEnd = startPage + 2 < totalPages;
    if (dotsEnd) {
      const dots = document.createElement('button');
      dots.className = 'button-pagination';
      dots.innerHTML = '&#8230;';
      containerPagination.appendChild(dots);
    }

    const nextPage = document.createElement('button');
    nextPage.className = 'button-pagination symbols';
    nextPage.innerHTML = '&#8250;';
    nextPage.disabled = activePage === totalPages;
    nextPage.addEventListener('click', () => {
      activePage++;
      const startIndex = (activePage - 1) * pageSize;
      displayData(books, startIndex);
      displayPagination();
    });
    containerPagination.appendChild(nextPage);

    const lastPage = document.createElement('button');
    lastPage.className = 'button-pagination symbols';
    lastPage.innerHTML = '&#187;';
    lastPage.disabled = activePage === totalPages;
    lastPage.addEventListener('click', () => {
      activePage = totalPages;
      const startIndex = (totalPages - 1) * pageSize;
      displayData(books, startIndex);
      displayPagination();
    });
    containerPagination.appendChild(lastPage);
  }
};

displayPagination();

// /\------- pagination ------/\
