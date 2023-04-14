import { supportUkraineItems } from "./array-support-ukraine";

const supportListEl = document.querySelector('.js_support_list');
const supportBtnEl = document.querySelector('.js_support_btn');

supportBtnEl.addEventListener('click', renderMoreFoundations);

const markup = supportUkraineItems.map(({ img, title, url }, index) => {
    const number = (index + 1).toString().padStart(2, '0');
    // console.log(img);
    
    return `<li><a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
    <p>${number}</p><img class="support__img" src="./images/support-ukraine/${img}" alt="${title}"></img></a></li>`

});
   console.log(markup);

let startIndex = 0;

renderMarkup(markup, startIndex, findEndIndex(startIndex));

function renderMarkup (arr, itemsCountStart, itemsCountEnd) {
    const markupToRender = arr.slice(itemsCountStart, itemsCountEnd).join('');
    startIndex = findEndIndex(startIndex);
    // supportListEl.innerHTML = markupToRender;
   supportListEl.insertAdjacentHTML('beforeend', markupToRender);
};

function renderMoreFoundations () {
    renderMarkup(markup, startIndex, findEndIndex(startIndex));
}

function findEndIndex (value) {
    if (window.innerWidth < 768) {
        return value + 4;  
    }
    else {
        return value + 6;
    }
}

// console.log(window.innerWidth);
// console.log(window.innerHeight);