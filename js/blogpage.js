const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const blogPost = document.querySelector(".blog_posts");
const baseUrl = "https://chasju.online/allthingsjupiter/wp-json/wp/v2/posts/";
const idUrl = baseUrl + id + "?acf_format=standard";
console.log(idUrl);

async function getBlogPost(url) {
  const response = await fetch(url);
  const post = await response.json();

  document.title = `${post.acf.headline}`;

  blogPost.innerHTML = `<section class="blog_post">
          <header class="headline_container blogpage_container">
            <h1>${post.acf.headline}</h1>
            <p class="blog_meta">${post.formatted_date}</p>
          </header>
          <div class="blog_image" style="background-image: url(${post.acf.header_image})"></div>
          <p>
            ${post.acf.paragraph}
          </p>
        </section>`;
}

getBlogPost(idUrl);
