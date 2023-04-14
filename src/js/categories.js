import { FetchBooks } from './fetchBooks';

export { renderCategories, changeCategoryStyle };
const categoriesEl = document.querySelector('.categories-list');

const fetch = new FetchBooks();

function renderCategories() {
  fetch.fetchCategoryList().then(data => {
    categoriesEl.insertAdjacentHTML('beforeend', renderList(data.data));
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
  return categories
    .map(category => {
      return renderCategory(category['list_name']);
    })
    .join('');
}

function renderCategory(category) {
  return `<li class="category">
        ${category.trim()}
      </li>`;
}
