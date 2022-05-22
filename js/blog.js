const blogPosts = document.querySelector(".blog_posts");
const moreButton = document.querySelector(".cta_button");
const baseUrl =
  "https://chasju.online/allthingsjupiter/wp-json/wp/v2/posts?acf_format=standard&per_page=20";

let isClicked = false;

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();

  blogPosts.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    if (i === 12) {
      break;
    }

    blogPosts.innerHTML += `<section class="blog_post">
          <header class="headline_container blog_header">
            <h2>${posts[i].acf.headline}</h2>
            <p class="blog_meta">${posts[i].formatted_date}</p>
          </header>
          <div class="blog_image" style="background-image: url(${posts[i].acf.header_image})"></div>
          <p>
            ${posts[i].acf.paragraph}
          </p>
        </section>`;

    moreButton.addEventListener("click", () => {
      isClicked = true;
      if (isClicked) {
      }
    });
  }
}

getPosts(baseUrl);
