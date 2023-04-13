import { FetchBooks } from './fetchBooks';

const categoriesEl = document.querySelector('.categories-list');

const fetch = new FetchBooks();

export function renderCategories() {
  fetch.fetchCategoryList().then(data => {
    categoriesEl.insertAdjacentHTML('beforeend', renderList(data.data));
  });
}

function renderList(categories) {
  return categories
    .map(categorie => {
      return renderCategorie(categorie['list_name']);
    })
    .join('');
}

function renderCategorie(categorie) {
  return `<li class="categorie">
        <h3 class="checked-categorie visually-hidden">${categorie
          .trim()
          .toUpperCase()}</h3>
        <p class="unchecked-categorie">${categorie.trim()}</p>
      </li>`;
}
