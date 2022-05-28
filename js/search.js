// Open search box desktop

if (window.innerWidth > 900) {
  const searchButton = document.querySelector(".search_button-desktop");

  function openSearch() {
    const searchInput = document.querySelector(".search_input-desktop");
    searchInput.classList.toggle("open");
  }

  searchButton.addEventListener("click", openSearch);
}

// Search results

const queryStringSearch = document.location.search;
const paramsSearch = new URLSearchParams(queryStringSearch);
const searchValue = paramsSearch.get("search");

const searchUrl =
  "https://chasju.online/allthingsjupiter/wp-json/wp/v2/search/?per_page=20" +
  `&search=${searchValue}`;

const searchResults = document.querySelector(".search_results");

async function searchPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    searchResults.innerHTML = "";

    posts.forEach((post) => {
      searchResults.innerHTML += `<div class="result_item">
            <a href="/blogpage.html?id=${post.id}">
              <h3>${post.title}</h3></a
            >
          </div>`;
    });

    if (searchResults.innerHTML === "") {
      searchResults.innerHTML = `<h2 class="no_results">No Results for "${searchValue}"</h2>`;
    }
  } catch (error) {
    console.log(error);
    searchResults.innerHTML = "An error occured";
  }
}

searchPosts(searchUrl);
