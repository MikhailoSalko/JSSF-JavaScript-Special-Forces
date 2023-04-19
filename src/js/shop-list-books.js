// import sprite from "../images/icons.svg"
import { currentPageSwitcher } from "./current-page-switcher";
const currentPage = document.querySelector(".shop-mob");
currentPageSwitcher(currentPage);


const books = [
  {
    _id: '642fd89ac8cf5ee957f12361',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, nibh a bibendum varius, enim tortor dictum felis, vel tristique tellus justo ac sem. Duis quis magna vel sapien euismod vestibulum.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122da',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Bessel van der Kolk',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg',
    book_image_width: 128,
    book_image_height: 193,
    book_review_link:
      'https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html',
    book_uri: 'nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e',
    contributor: 'by Bessel van der Kolk',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'How trauma affects the body and mind, and innovative treatments for recovery.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0143127748',
    primary_isbn13: '9780143127741',
    publisher: 'Penguin',
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: '',
    title: 'THE BODY KEEPS THE SCORE',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 232,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780143127741?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252FBessel%252Bvan%252Bder%252BKolk%252F9780143127741&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252BBessel%252Bvan%252Bder%252BKolk',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780143127741&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780143127741%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2BBessel%2Bvan%2Bder%2BKolk%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122db',
    list_name: 'Paperback Nonfiction',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0525657746?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Michelle Zauner',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg',
    book_image_width: 338,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/520cb070-10ce-5d43-9b0c-e77f57d84a8d',
    contributor: 'by Michelle Zauner',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description:
      'The daughter of a Korean mother and Jewish American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1984898957',
    primary_isbn13: '9781984898951',
    publisher: 'Vintage',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'CRYING IN H MART',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0525657746?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781984898951?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984898951',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FCRYING%252BIN%252BH%252BMART%252FMichelle%252BZauner%252F9781984898951&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DCRYING%252BIN%252BH%252BMART%252BMichelle%252BZauner',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984898951&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DCRYING%2BIN%2BH%2BMART',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984898951%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DCRYING%2BIN%2BH%2BMART%2BMichelle%2BZauner%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

localStorage.setItem('books', JSON.stringify(books));

const bookListEl = document.querySelector('.shoplist-main');
const shopIsEmpty = document.querySelector('.shoplist-empty');
const sectionTitle = document.querySelector(".shoplist-title");

let booksInShop = JSON.parse(localStorage.getItem('books'));

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
  sectionTitle.classList.add("title-when-books");
};

if (booksInShop.length > 0) {
    window.onload = function () {
      renderBooks(booksInShop);
    };
    window.onresize = function () {
      renderBooks(booksInShop);
    };
} else if (booksInShop.length === 0) {
    shopIsEmpty.innerHTML = `<p class="information-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="book_img"></div>`
  };

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
    sectionTitle.classList.remove("title-when-books");
  } else {
    renderBooks(updatedBooks);
  }
};

bookListEl.addEventListener('click', event => {
  if (event.target.classList.contains('shoplist-delete-book-icon') || event.target.classList.contains('shoplist-delete-book-btn')) {
    const bookCard = event.target.closest('.shoplist-book-card');
    const bookId = bookCard.getAttribute('id');
    deleteBook(bookId);
  }
});
