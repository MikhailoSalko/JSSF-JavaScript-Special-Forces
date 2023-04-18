import { supportUkraineItems } from './array-support-ukraine';

const supportContainerEl = document.querySelector('.js-support__container');
const supportListEl = document.querySelector('.js_support_list');
const supportBtnEl = document.querySelector('.js_support_btn');

supportBtnEl.addEventListener('click', renderMoreMarkup);

const markup = supportUkraineItems.map(({ img, title, url }, index) => {
  const number = (index + 1).toString().padStart(2, '0');

  return `<li class="support__item"><a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
    <p class="support__number">${number}</p><img class="support__img" src= ${img} alt="${title}"/></a></li>`;
});
//    console.log(markup);

let startIndex = 0;

renderMarkup(markup, startIndex, findEndIndex(startIndex));

function renderMarkup(arr, itemsCountStart, itemsCountEnd) {
  const markupToRender = arr.slice(itemsCountStart, itemsCountEnd).join('');
  startIndex = findEndIndex(startIndex);

  supportListEl.insertAdjacentHTML('beforeend', markupToRender);

  if (markup.length <= itemsCountEnd) {
    supportBtnEl.style.display = 'none';
    return;
  }
}

function renderMoreMarkup() {
  renderMarkup(markup, startIndex, findEndIndex(startIndex));

  if (window.innerWidth < 1280) {
    supportContainerEl.style.overflow = 'scroll';
  } else {
    supportContainerEl.style.overflow = 'hidden';
    supportContainerEl.style.height = '100%';
  }
}

let currentRenderWidth = window.innerWidth;
addEventListener('resize', event => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1279 && currentRenderWidth < 1280) ||
    (window.innerWidth < 1280 && currentRenderWidth > 1279) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    currentRenderWidth = window.innerWidth;
    location.reload();
  }
});

function findEndIndex(value) {
  if (window.innerWidth < 768) {
    return value + 4;
  } else {
    return value + 6;
  }
}


