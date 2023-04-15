import { FetchBooks } from './fetchBooks';

const fetchBooks = new FetchBooks();
// console.log('🚀 fetchBooks:', fetchBooks);

const listTopBooks = document.querySelector('.top-books');
const btnUpEl = document.querySelector('.btn-up');

let markup = '';
async function renderingBooksCategories() {
  try {
    const { data } = await fetchBooks.fetchTopBooks();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  const categories = await renderingBooksCategories();
  if (window.screen.width < 768) {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];

      markup += `<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-book">
      <li>
        <a href="">
            <div>
                <img src="${books[0].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[0].title}</p>
                <p class="author-book">${books[0].author}</p>
            </div>
        </a>
      </li>
    </ul>
        <button type="button" class="see-more">See more</button>
   </li>`;
    }
  } else if (window.screen.width >= 768 && window.screen.width < 1024) {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];

      markup += `
<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
      <li>
        <a href="">
            <div>
                <img src="${books[0].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[0].title}</p>
                <p class="author-book">${books[0].author}</p>
            </div>
        </a>
      </li>
            <li>
        <a href="">
            <div>
                <img src="${books[1].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[1].title}</p>
                <p class="author-book">${books[1].author}</p>
            </div>
        </a>
      </li>

            <li>
        <a href="">
            <div>
                <img src="${books[2].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[2].title}</p>
                <p class="author-book">${books[2].author}</p>
            </div>
        </a>
</li>
    </ul>
        <button type="button" class="see-more">See more</button>
   </li>`;
    }
  } else {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];
      markup += `
<li>
    <h3 class="item-category">${list_name}</h3>
        <ul>
      <li>
        <a href="">
            <div>
                <img src="${books[0].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[0].title}</p>
                <p class="author-book">${books[0].author}</p>
            </div>
        </a>
      </li>
            <li>
        <a href="">
            <div>
                <img src="${books[1].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[1].title}</p>
                <p class="author-book">${books[1].author}</p>
            </div>
        </a>
      </li>
            <li>
        <a href="">
            <div>
                <img src="${books[2].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[2].title}</p>
                <p class="author-book">${books[2].author}</p>
            </div>
        </a>
      </li>

            <li>
        <a href="">
            <div>
                <img src="${books[3].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[3].title}</p>
                <p class="author-book">${books[3].author}</p>
            </div>
        </a>
      </li>

            <li>
        <a href="">
            <div>
                <img src="${books[4].book_image}" alt="book" class="img-book">
                <p class="title-book">${books[4].title}</p>
                <p class="author-book">${books[4].author}</p>
            </div>
        </a>
      </li>

    </ul>
        <button type="button" class="see-more">See more</button>
   </li>`;
    }
  }
  //   }
  listTopBooks.innerHTML = '';
  listTopBooks.insertAdjacentHTML('beforeend', markup);
  listTopBooks.insertAdjacentHTML('beforebegin', `<h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>`);

})();

const btnSeeMore = document.querySelectorAll('.see-more');
listTopBooks.addEventListener('click', handleLoadMore);
btnSeeMore.forEach(btn => {
  btn.addEventListener('click', handleLoadMore);
});
let category = '';
async function handleLoadMore(e) {
  category = e.target.closest('li').querySelector('h3').textContent;
  console.log(category);

  const renderCategory = await renderingCategory();
  let markup = '';
  renderCategory.forEach(({ book_image, title, author }) => {
    markup += `<li>
        <a href="">
            <div>
                <img src="${book_image}" alt="book" class="img-book">
                <p class="title-book">${title}</p>
                <p class="author-book-category">${author}</p>
            </div>
        </a>
      </li>`;
  });
  console.log(renderCategory.list_name);
  listTopBooks.innerHTML = '';
  listTopBooks.previousElementSibling.remove();
  listTopBooks.insertAdjacentHTML('beforeend', markup);
  listTopBooks.insertAdjacentHTML('beforebegin', `<h2 class="title-category">${category}</h2>`);
}

async function renderingCategory() {
  try {
    fetchBooks.category = category;
    const { data } = await fetchBooks.fetchCategoryOfBooks();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
