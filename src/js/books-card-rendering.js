import { FetchBooks } from './fetchBooks';
import Notiflix from 'notiflix';
import { spinnerPlay } from './spinner';
import { spinnerStop } from './spinner';

const fetchBooks = new FetchBooks();
const categoriesListEl = document.querySelector('.categories-list');
const listTopBooks = document.querySelector('.top-books');
const btnUpEl = document.querySelector('.btn-up');
if (btnUpEl) {
  btnUpEl.classList.add('is-hidden-up');
}

let markup = '';
let category = '';

// розмітка =========Best Seller==============================
async function renderingBooksCategories() {
  try {
    const { data } = await fetchBooks.fetchTopBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}
spinnerPlay();
(async () => {
  const categories = await renderingBooksCategories();
  if (window.screen.width < 768) {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];

      markup += `<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
      <li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
        <a class="link-books-render" href="#">  
      <div class="card-book">
            <div class="img-card-book">
            <img src="${books[0].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[0].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[0].author}</p>
                  </div>
                </div>
          </div>
        </a>
          </li>
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
    }
  } else if (window.screen.width >= 768 && window.screen.width < 1280) {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];
      markup += `
<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
      <li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
      <a class="link-books-render" href="#">    
      <div class="card-book">
            <div class="img-card-book">
            <img src="${books[0].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[0].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[0].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[1]._id}">
          <a class="link-books-render" href="#"> 
           <div class="card-book">
            <div class="img-card-book">
            <img src="${books[1].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[1].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[1].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
          <li class="item-category-book js-book-modal" data-book-id="${books[2]._id}">
           <a class="link-books-render" href="#">
          <div class="card-book">
            <div class="img-card-book">
            <img src="${books[2].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[2].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[2].author}</p>
                  </div>
              </div>
           </div>
          </a>
           </li>
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
    }
  } else {
    for (let i = 0; i < categories.length; i += 1) {
      const { list_name, books } = categories[i];
      markup += `
<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
      <li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
       <a class="link-books-render" href="#">   
      <div class="card-book">
            <div class="img-card-book">
                <img src="${books[0].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[0].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[0].author}</p>
                  </div>
            </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[1]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[1].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[1].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[1].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[2]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[2].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[2].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[2].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[3]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[3].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[3].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[3].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[4]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[4].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[4].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[4].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
    }
  }

  if (listTopBooks) {
    listTopBooks.innerHTML = '';
    listTopBooks.insertAdjacentHTML('beforeend', markup);
    listTopBooks.insertAdjacentHTML(
      'beforebegin',
      `<h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>`
    );
  }
})();
spinnerStop();

// ===========розмітка по категоріям, кнопка SEE-MORE ===========================
if (listTopBooks) {
  listTopBooks.addEventListener('click', handleLoadMore);
}

spinnerPlay();

async function handleLoadMore(e) {
  try {
    if (e.target.nodeName === 'BUTTON') {
      category = e.target.closest('li').querySelector('h3').textContent.trim();

      const arrCategories = categoriesListEl.childNodes;
      arrCategories.forEach(item => {
        if (item.classList.contains('checked-category')) {
          item.classList.remove('checked-category');
        } else {
          return;
        }
      });

      arrCategories.forEach(item => {
        if (item.textContent.trim() === category) {
          item.classList.add('checked-category');
        } else {
          return;
        }
      });

      const renderCategory = await renderingCategory();
      let markup = '';
      renderCategory.forEach(({ _id, book_image, title, author }) => {
        markup += `<li class="item-category-book js-book-modal" data-book-id="${_id}">
       <a class="link-books-render" href="#">   
        <div class="card-book">
            <div class="img-card-book">
            <img src="${book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-category">
                <div class="box-title">  
                  <p class="title-book">${title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>`;
      });
      listTopBooks.innerHTML = '';
      listTopBooks.previousElementSibling.remove();
      listTopBooks.insertAdjacentHTML('beforeend', markup);
      listTopBooks.insertAdjacentHTML(
        'beforebegin',
        `<h2 class="title-category">${category}</h2>`
      );
      scrollToTitle();
      // const titleLastWord = document.querySelector('.title-category');
      const titleLastWord = listTopBooks.previousElementSibling;

      function lastWordForTitle() {
        if (titleLastWord.classList.contains('title-category')) {
          const textTitle = titleLastWord.textContent.trim();
          const allWords = textTitle.split(' ');
          const lastWord = allWords[allWords.length - 1];
          titleLastWord.innerHTML = textTitle.replace(
            lastWord,
            `<span class="title-last-word-color">${lastWord}</span>`
          );
        }
        return;
      }
      lastWordForTitle();
    }
    return;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}
spinnerStop();

async function renderingCategory() {
  try {
    fetchBooks.category = category;
    const { data } = await fetchBooks.fetchCategoryOfBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}
// Кнопка ===UP===============
function handleScroll() {
  if (window.scrollY > 200) {
    btnUpEl.classList.remove('is-hidden-up');
  } else if (window.scrollY == 0) {
    btnUpEl.classList.add('is-hidden-up');
  }
}

function handleScrollUp(e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

if (btnUpEl) {
  btnUpEl.addEventListener('click', handleScrollUp);
}

window.addEventListener('scroll', handleScroll);
// =========Скрол сторінки до заголовка=========================
function scrollToTitle() {
  listTopBooks.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
}
// =================Розмітка по кліку на Сашині категорії=====================================

const listCategory = document.querySelector('.categories-list');

if (listCategory) {
  listCategory.addEventListener('click', handleCategoryMarkup);
}

spinnerPlay();
async function handleCategoryMarkup(e) {
  if (e.target.nodeName === 'LI') {
    category = e.target.textContent.trim();
    if (category !== 'All categories') {
      const renderCategory = await renderingCategory();
      let markup = '';
      renderCategory.forEach(({ _id, book_image, title, author }) => {
        markup += `<li class="item-category-book js-book-modal" data-book-id="${_id}">
        <a class="link-books-render" href="#">  
        <div class="card-book">
            <div class="img-card-book">
            <img src="${book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-category">
                <div class="box-title">  
                  <p class="title-book">${title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>`;
      });
      listTopBooks.innerHTML = '';
      listTopBooks.previousElementSibling.remove();
      listTopBooks.insertAdjacentHTML('beforeend', markup);
      listTopBooks.insertAdjacentHTML(
        'beforebegin',
        `<h2 class="title-category">${category}</h2>`
      );
      const titleLastWord = listTopBooks.previousElementSibling;
      function lastWordForTitle() {
        if (titleLastWord.classList.contains('title-category')) {
          const textTitle = titleLastWord.textContent.trim();
          const allWords = textTitle.split(' ');
          const lastWord = allWords[allWords.length - 1];
          titleLastWord.innerHTML = textTitle.replace(
            lastWord,
            `<span class="title-last-word-color">${lastWord}</span>`
          );
        }
        return;
      }
      lastWordForTitle();
      scrollToTitle();
    } else {
      (async () => {
        const categories = await renderingBooksCategories();
        if (window.screen.width < 768) {
          for (let i = 0; i < categories.length; i += 1) {
            const { list_name, books } = categories[i];
            markup += `<li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
      <li class="item-category-book">
      <a class="link-books-render" href="#">    
      <div class="card-book">
            <div class="img-card-book">
            <img src="${books[0].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[0].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[0].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
          }
        } else if (window.screen.width >= 768 && window.screen.width < 1280) {
          for (let i = 0; i < categories.length; i += 1) {
            const { list_name, books } = categories[i];
            markup += `
<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
      <li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
      <a class="link-books-render" href="#">    
      <div class="card-book">
            <div class="img-card-book">
            <img src="${books[0].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[0].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[0].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[1]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book-best">
            <img src="${books[1].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book">
                <div class="box-title">  
                  <p class="title-book">${books[1].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[1].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[2]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[2].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[2].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[2].author}</p>
                  </div>
              </div>
          </div>
         </a>   
          </li>
    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
          }
        } else {
          for (let i = 0; i < categories.length; i += 1) {
            const { list_name, books } = categories[i];
            markup += `
<li>
    <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
      <li class="item-category-book js-book-modal" data-book-id="${books[0]._id}">
        <a class="link-books-render" href="#">  
      <div class="card-book">
            <div class="img-card-book">
            <img src="${books[0].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[0].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[0].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[1]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[1].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[1].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[1].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[2]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[2].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[2].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[2].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[3]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[3].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[3].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[3].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>
            <li class="item-category-book js-book-modal" data-book-id="${books[4]._id}">
          <a class="link-books-render" href="#">
            <div class="card-book">
            <div class="img-card-book">
            <img src="${books[4].book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-best">
                <div class="box-title">  
                  <p class="title-book">${books[4].title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${books[4].author}</p>
                  </div>
              </div>
          </div>
      </a>
          </li>

    </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
   </li>`;
          }
        }
        listTopBooks.innerHTML = '';
        listTopBooks.previousElementSibling.remove();
        listTopBooks.insertAdjacentHTML('beforeend', markup);
        listTopBooks.insertAdjacentHTML(
          'beforebegin',
          `<h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>`
        );
      })();
    }
  }
  return;
}
spinnerStop();
