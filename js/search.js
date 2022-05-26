// Search input

if (window.innerWidth > "900") {
  const searchInput = document.querySelector(".search_input");
  const searchButton = document.querySelector(".search_button");

  console.log(searchInput);
  console.log(searchButton);

  searchButton.addEventListener("click", () => {
    console.log("hello");
  });

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
}
