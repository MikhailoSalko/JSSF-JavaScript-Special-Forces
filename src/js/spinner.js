const body = document.querySelector('body');

// Функція для показу Loader
export function spinnerPlay() {
  // Додавання класу 'loading' до тегу body
  body.classList.add('loading');
}


// Функція для приховування Loader
export function spinnerStop() {
  window.setTimeout(function () {
    // Видалення класу 'loading' з тегу body
    body.classList.remove('loading');
    // Приховування Loader
    body.classList.add('loaded');
  }, 1500);
}