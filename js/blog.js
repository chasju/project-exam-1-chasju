const blogPosts = document.querySelector(".blog_posts");
const moreButton = document.querySelector(".cta_button");
const baseUrl = "https://chasju.online/allthingsjupiter/wp-json/wp/v2/posts?acf_format=standard";

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    blogPosts.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
      blogPosts.innerHTML += `<section class="blog_post">
          <a href="/blogpage.html?id=${posts[i].id}"><header class="headline_container blog_header">
            <h2>${posts[i].acf.headline}</h2>
            <p class="blog_meta">${posts[i].formatted_date}</p>
          </header>
          <div class="blog_image" style="background-image: url(${posts[i].acf.header_image})"></div>
          <p>
            ${posts[i].acf.paragraph}
          </p></a>
        </section>`;
    }
  } catch (error) {
    console.log(error);
    blogPosts.innerHTML = error;
  }
}

getPosts(baseUrl);

// Adding more posts to the page

let addPosts = 10;

moreButton.addEventListener("click", () => {
  const newUrl = baseUrl + `&per_page=${(addPosts += 10)}`;
  getPosts(newUrl);
});
