import { FetchBooks } from './fetchBooks';

export { renderCategories, changeCategoryStyle };

const errorMessadge =
  'Ooops! Something goes wrong... <br>We can`t download caregories. ';

const categoriesEl = document.querySelector('.categories-list');

const fetch = new FetchBooks();

function renderCategories() {
  fetch
    .fetchCategoryList()
    .then(data => {
      if (categoriesEl) {
        categoriesEl.insertAdjacentHTML('beforeend', renderList(data.data));
      }
    })
    .catch(error => {
      if (categoriesEl) {
        categoriesEl.insertAdjacentHTML(
          'beforeend',
          renderErrorMsg(errorMessadge, error)
        );
      }
    });
}

function changeCategoryStyle(event) {
  const isCategory = event.target.classList.contains('category');
  if (isCategory) {
    if (event.target.classList.contains('checked-category')) {
      return;
    } else {
      const checkedEl = categoriesEl.querySelector('.checked-category');
      checkedEl.classList.remove('checked-category');
      event.target.classList.add('checked-category');
    }
  }
}

function renderList(categories) {
  let listMarkup = `<li class="category checked-category">All categories</li>`;

  categories.map(category => {
    listMarkup += renderCategory(category['list_name']);
  });

  return listMarkup;
}

function renderCategory(category) {
  return `<li class="category">
        ${category.trim()}
      </li>`;
}

function renderErrorMsg(messadge, error) {
  return `<p class="category-error">${messadge}${error}</p>`;
}
