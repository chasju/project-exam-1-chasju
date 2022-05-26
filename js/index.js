// Hamburger menu open/close

if (window.innerWidth < "900") {
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
}

// Previous page button

const backMobile = document.querySelectorAll(".back_button");

backMobile.forEach(function (button) {
  button.addEventListener("click", () => {
    history.back();
  });
});

// Getting search input and search on enter

const searchInputs = document.querySelectorAll(".search_input");

searchInputs.forEach((searchInput) => {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      location.href = `/search.html?search=${searchInput.value}`;
    }
  });
});
