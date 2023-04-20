// \/------- pagination ------\/
// const sectionShoplist = document.querySelector(".shoplist");
// const heading = document.createElement("div");
// heading.className = "pagination-container";
// console.log(heading); 
// sectionShoplist.append(heading)

// const pageSize = 2;
//       let activPage = 1;
//       let totalPages = Math.ceil(booksInShop.length / pageSize);
//       console.log(totalPages)

//       const displayPagination = () => {
//         const containerPagination = document.querySelector(
//           ".pagination-container"
//         );
//         containerPagination.innerHTML = "";

//         const firstPage = document.createElement("button");
//         firstPage.className = "button-pagination"
//         firstPage.innerHTML = "&#171;";
//         firstPage.disabled = activPage === 1;
//         firstPage.addEventListener("click", () => {
//           activPage = 1;
//           displayData(0);
//           displayPagination();
//         });
//         containerPagination.appendChild(firstPage);

//         const prevPage = document.createElement("button");
//         prevPage.className = "button-pagination"
//         prevPage.innerHTML = "&#8249;";
//         prevPage.disabled = activPage === 1;
//         prevPage.addEventListener("click", () => {
//           activPage--;
//           const startIndex = (activPage - 1) * pageSize;
//           displayData(startIndex);
//           displayPagination();
//         });
//         containerPagination.appendChild(prevPage);

//         let startPage =
//           activPage <= 2
//             ? 1
//             : activPage >= totalPages - 1
//             ? totalPages - 2
//             : activPage - 1;

//         const dotsStart = startPage > 1;
//         if (dotsStart) {
//           const dots = document.createElement("button");
//           dots.className = "button-pagination"
//           dots.innerHTML = "&#8230;";
//           containerPagination.appendChild(dots);
//         }

//         for (let i = startPage; i < startPage + 3 && i <= totalPages; i++) {
//           const page = document.createElement("button");
//           page.className = "button-pagination"
//           page.innerHTML = i;
//           page.disabled = i === activPage;
//           page.classList.toggle("active", i === activPage);
//           page.addEventListener("click", () => {
//             activPage = i;
//             const startIndex = (activPage - 1) * pageSize;
//             displayData(startIndex);
//             displayPagination();
//           });
//           containerPagination.appendChild(page);
//         }

//         const dotsEnd = startPage + 2 < totalPages;
//         if (dotsEnd) {
//           const dots = document.createElement("button");
//           dots.className = "button-pagination"
//           const dotsEnd = startPage + 2 < totalPages;
//           if (dotsEnd) {
//             const dots = document.createElement("button");
//             dots.className = "button-pagination"
//             dots.innerHTML = "&#8230;";
//             containerPagination.appendChild(dots);
//           }

//           const nextPage = document.createElement("button");
//           dots.nextPage = "button-pagination"
//           nextPage.innerHTML = "&#8250;";
//           nextPage.disabled = activPage === totalPages;
//           nextPage.addEventListener("click", () => {
//             activPage++;
//             const startIndex = (activPage - 1) * pageSize;
//             displayData(startIndex);
//             displayPagination();
//           });
//           containerPagination.appendChild(nextPage);

//           const lastPage = document.createElement("button");
//           dots.lastPage = "button-pagination"
//           lastPage.innerHTML = "&#187;";
//           lastPage.disabled = activPage === totalPages;
//           lastPage.addEventListener("click", () => {
//             activPage = totalPages;
//             const startIndex = (totalPages - 1) * pageSize;
//             displayData(startIndex);
//             displayPagination();
//           });
//           containerPagination.appendChild(lastPage);
//         }
//       };

//           displayPagination();
          // /\------- pagination ------/\