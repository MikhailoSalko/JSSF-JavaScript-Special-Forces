import axios from 'axios';

export class FetchBooks {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';
  constructor() {
    this.bookId = 0;
    this.category = '';
  }

  fetchCategoryList() {
    return axios
      .get(`${this.#BASE_URL}/category-list`)
      .then(response => {
        response.json();
      })
      .catch(console.error);
  }

  fetchTopBooks() {
    return axios
      .get(`${this.#BASE_URL}/top-books`)
      .then(response => {
        response.json();
      })
      .catch(console.error);
  }
  fetchBookId() {
    return axios
      .get(`${this.#BASE_URL}${this.bookId}`)
      .then(response => {
        response.json();
      })
      .catch(console.error);
  }

  fetchCategoryOfBooks() {
    return axios
      .get(`${this.#BASE_URL}${this.category}`)
      .then(response => {
        response.json();
      })
      .catch(console.error);
  }
}
