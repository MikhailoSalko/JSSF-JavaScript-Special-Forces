!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire3a7d;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var s={id:e,exports:{}};return o[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequire3a7d=n),n("iE7OH").register(JSON.parse('{"izgYX":"shop-list.6626e7f7.js","6yJvL":"amazon-link_2x.88450da7.png","lB4Qe":"books-link_2x.b396e612.png","cPrFv":"book-shop-link_2x.4495e777.png","dWo3Q":"Icon.a7d4f1fa.svg"}'));var s=n("YMlea");const i=document.querySelector(".shop-mob");(0,s.currentPageSwitcher)(i);const l=document.querySelector(".shoplist-main"),a=document.querySelector(".shoplist-empty"),r=document.querySelector(".shoplist-title");let c=JSON.parse(localStorage.getItem("books")),d=1;var p;p=n("aNJCr").getBundleURL("izgYX")+n("iE7OH").resolve("dWo3Q");var h;h=n("aNJCr").getBundleURL("izgYX")+n("iE7OH").resolve("6yJvL");var b;b=n("aNJCr").getBundleURL("izgYX")+n("iE7OH").resolve("lB4Qe");var g;g=n("aNJCr").getBundleURL("izgYX")+n("iE7OH").resolve("cPrFv");const u=e=>{const o=e.map((e=>window.matchMedia("(max-width: 376px)").matches?`<li><div class="shoplist-book-card" id=${e._id}>\n        <button type="button" class="shoplist-delete-book-btn">\n        <img src=${new URL(p)} class="shoplist-delete-book-icon" alt="Delete book" width="15" height="15" />\n        </button>\n        <div class="shoplist-book-card-top">\n        <div><img class="shoplist-book-cover" src=${e.book_image} alt="book cover" width=${e.book_image_width} height=${e.book_image_height}/>\n        <p class="shoplist-book-author">${e.author}</p></div>\n        <div><p class="shoplist-book-title">${e.title}</p>\n        <p class="shoplist-book-category">${e.list_name}</p>\n        <div class="shops-logo"><a href=${e.buy_links[0].url} class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Amazon">\n        <img src=${new URL(h)} class="shop-logo amazon" width="48" height="15" alt="Amazon" />\n        </a>\n        <a href=${e.buy_links[1].url} class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Apple Books">\n        <img src=${new URL(b)} class="shop-logo apple-books" width="28" height="27" alt="Apple Books" />\n        </a>\n        <a href=${e.buy_links[4].url} class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Book Shop">\n        <img src=${new URL(g)} class="shop-logo book-shop" width="32" height="30" alt="Book Shop" />\n        </a></div></div></div>\n        <p class="shoplist-book-description">${e.description}</p>\n      </div></li>`:`<li><div class="shoplist-book-card" id=${e._id}>\n        <button type="button" class="shoplist-delete-book-btn">\n          <img src=${new URL(p)} class="shoplist-delete-book-icon" alt="Delete book" width="14" height="14" />\n        </button>\n        <div><img class="shoplist-book-cover" src=${e.book_image} alt="book cover" width=${e.book_image_width} height=${e.book_image_height}/></div>\n        <div><p class="shoplist-book-title">${e.title}</p>\n        <p class="shoplist-book-category">${e.list_name}</p>\n        <p class="shoplist-book-description">${e.description}</p>\n        <p class="shoplist-book-author">${e.author}</p>\n        </div>\n        <div class="shops-logo"><a href=${e.buy_links[0].url} class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Amazon">\n        <img src=${new URL(h)} class="shop-logo amazon" width="48" height="15" alt="Amazon" />\n        </a>\n        <a href=${e.buy_links[1].url} class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Apple Books">\n        <img src=${new URL(b)} class="shop-logo apple-books" width="28" height="27" alt="Apple Books" />\n        </a>\n        <a href=${e.buy_links[4].url} class="shoplist-buy-link" target="_blank" rel="noopener noreferrer" aria-label="Book Shop">\n        <img src=${new URL(g)} class="shop-logo book-shop" width="32" height="30" alt="Book Shop" />\n        </a></div>\n      </div></li>`)).join("");a.innerHTML="",l.innerHTML=o,r.classList.add("title-when-books")},m=(e,o)=>{const t=e.slice(o,o+3);u(t)};c.length>0?(window.onload=function(){u(c.slice(0,3))},window.onresize=function(){u(c.slice(0,3))}):0===c.length&&(a.innerHTML='<p class="information-text">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <div class="book_img"></div>');l.addEventListener("click",(e=>{if(e.target.classList.contains("shoplist-delete-book-icon")||e.target.classList.contains("shoplist-delete-book-btn")){(e=>{const o=JSON.parse(localStorage.getItem("books")).filter((o=>o._id!==e));localStorage.setItem("books",JSON.stringify(o)),0===o.length?(a.innerHTML='<p class="information-text">\n      This page is empty, add some books and proceed to order.\n    </p>\n    <div class="book_img"></div>',l.innerHTML="",r.classList.remove("title-when-books")):u(o)})(e.target.closest(".shoplist-book-card").getAttribute("id"))}}));const k=document.querySelector(".shoplist"),v=document.createElement("div");v.className="pagination-container",k.append(v);let f=Math.ceil(c.length/3);const _=()=>{const e=document.querySelector(".pagination-container");e.innerHTML="";const o=document.createElement("button");o.className="button-pagination symbols",o.innerHTML="&#171;",o.disabled=1===d,o.addEventListener("click",(()=>{d=1,m(c,0),_()})),e.appendChild(o);const t=document.createElement("button");t.className="button-pagination symbols",t.innerHTML="&#8249;",t.disabled=1===d,t.addEventListener("click",(()=>{d--;m(c,3*(d-1)),_()})),e.appendChild(t);let n=d<=2?1:d>=f-1?f-2:d-1;if(n>1){const o=document.createElement("button");o.className="button-pagination",o.innerHTML="&#8230;",e.appendChild(o)}for(let o=n;o<n+3&&o<=f;o++){const t=document.createElement("button");t.className="button-pagination",t.innerHTML=o,t.disabled=o===d,t.classList.toggle("active",o===d),t.addEventListener("click",(()=>{d=o;m(c,3*(d-1)),_()})),e.appendChild(t)}if(n+2<f){document.createElement("button").className="button-pagination";if(n+2<f){const o=document.createElement("button");o.className="button-pagination",o.innerHTML="&#8230;",e.appendChild(o)}const o=document.createElement("button");o.className="button-pagination symbols",o.innerHTML="&#8250;",o.disabled=d===f,o.addEventListener("click",(()=>{d++;m(c,3*(d-1)),_()})),e.appendChild(o);const t=document.createElement("button");t.className="button-pagination symbols",t.innerHTML="&#187;",t.disabled=d===f,t.addEventListener("click",(()=>{d=f;m(c,3*(f-1)),_()})),e.appendChild(t)}};_()}();
//# sourceMappingURL=shop-list.6626e7f7.js.map
