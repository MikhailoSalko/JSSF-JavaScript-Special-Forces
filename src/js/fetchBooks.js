import axios from 'axios';

export class FetchBooks {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';
  constructor() {
    this.bookId = bookId;
    this.category = category;
  }

  fetchBookId(bookId) {
    return axios
      .get(`${this.#BASE_URL}${bookId}`)
      .then(response => {
        response.json();
      })
      .catch(console.error);
  }
}
