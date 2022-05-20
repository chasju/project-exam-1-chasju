// Hamburger menu open/close

const hamMenu = document.querySelector(".nav_container");
const menu = document.querySelector("nav");
const closeMenu = document.querySelector(".close");

hamMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

closeMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  menu.style.display = "none";
});

// Previous page button

const backMobile = document.querySelectorAll(".back_button");
const backDesktop = document.querySelector(".back_button-desktop");

backMobile.forEach(function (button) {
  button.addEventListener("click", () => {
    history.back();
  });
});

// Search input

const searchInput = document.querySelector(".search_input");
const searchButton = document.querySelector(".search_button");

let isOpen = false;

function openSearch(e) {
  searchInput.classList.toggle("open");
  if (searchInput.classList.contains("open")) {
    console.log("hello");
    // searchButton.addEventListener("click", search);
  }
}
searchButton.addEventListener("click", openSearch);

// Search

// async function searchItems(url) {
//   const response = await fetch(url);
//   const result = await response.json();

//   for (let i = 0; i < result.length; i++) {
//     searchResults.innerHTML += `<div class="projects__img">
//                                         <a href="/filmpage.html?id=${result[i].id}"> <div class="featured__img projects__img" style="background-image: url(${result[i].images[0].src})"></div></a>
//                                         <div class="overlay filmpage__overlay filmpage__project-overlay">
//                                         <p>1h 45min | ${result[i].name}</p>
//                                     </div>`;
//   }
// }

// searchButton.onclick = function () {
//   const input = searchInput.value;
//   const newUrl = baseUrl + `?search=${input}` + "&" + keys;
//   searchResults.innerHTML = "";
//   searchItems(newUrl);
// };
