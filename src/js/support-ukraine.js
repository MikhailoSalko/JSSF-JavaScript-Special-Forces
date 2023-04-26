import { supportUkraineItems } from './array-support-ukraine';

const supportListEl = document.querySelector('.js-support_list');
const supportBtnEl = document.querySelector('.js-support_btn');

supportBtnEl.addEventListener('click', renderMoreMarkup);

const markup = supportUkraineItems.map(({ img, retina, title, url }, index) => {
  const number = (index + 1).toString().padStart(2, '0');

  return `<li class="support__item"><a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
    <p class="support__number">${number}</p><img class="support__img" src= ${img} srcset="${retina} 2x" alt="${title}"/></a></li>`;
});
//    console.log(markup);

let startIndex = 0;

renderMarkup(markup, startIndex, findEndIndex(startIndex));

function renderMarkup(arr, itemsCountStart, itemsCountEnd) {
  const markupToRender = arr.slice(itemsCountStart, itemsCountEnd).join('');
  startIndex = itemsCountEnd;

  supportListEl.insertAdjacentHTML('beforeend', markupToRender);

  if (markup.length <= itemsCountEnd) {
    supportBtnEl.style.display = 'none';
    return;
  }
}

function renderMoreMarkup() {
  renderMarkup(markup, startIndex, supportUkraineItems.length);

  supportListEl.scrollTop = supportListEl.scrollHeight;  
}


function findEndIndex(value) {
  if (window.innerWidth < 768) {
    return value + 4;
  } else {
    return value + 6;
  }
}

// при проходженні через брейкпойнти
let currentRenderWidth = window.innerWidth;
addEventListener('resize', () => {
  if (window.innerWidth > 767 && currentRenderWidth < 768)  {
    currentRenderWidth = window.innerWidth;
 
    renderMarkup(markup, startIndex, (startIndex + 2));  
  }

  if (window.innerWidth < 768 && currentRenderWidth > 767) {
    currentRenderWidth = window.innerWidth;
 
    while (supportListEl.childNodes.length !== 4) {
      supportListEl.removeChild(supportListEl.lastChild);
      startIndex = 4;
    }
    }

    if(supportListEl.childNodes.length < markup.length) {
      supportBtnEl.style.display = 'flex';
    }
});