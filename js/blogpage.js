const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const blogPost = document.querySelector(".blog_posts");
const baseUrl = "https://chasju.online/allthingsjupiter/wp-json/wp/v2/posts/";
const idUrl = baseUrl + id + "?acf_format=standard";

async function getBlogPost(url) {
  try {
    const response = await fetch(url);
    const post = await response.json();

    document.title = `${post.acf.headline}`;

    blogPost.innerHTML = `<section class="blog_post">
          <header class="headline_container blogpage_container">
            <h1>${post.acf.headline}</h1>
            <p class="blog_meta">${post.formatted_date}</p>
          </header>
          <div class="blog_image" aria-label="image for ${post.acf.headline}" style="background-image: url(${post.acf.header_image})"></div>
          <p>
            ${post.acf.paragraph}
          </p>
        </section>`;

    const blogImage = document.querySelector(".blog_image");
    const modal = document.querySelector(".modal_container");

    blogImage.addEventListener("click", () => {
      modal.innerHTML = `<a href="${post.acf.header_image}" class="image_link"><div class="blog_image-modal" aria-label="image for ${post.acf.headline}" style="background-image: url(${post.acf.header_image})"></div></a>`;
      modal.style.display = "block";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  } catch (error) {
    console.log(error);
    blogPost.innerHTML = error;
  }
}

getBlogPost(idUrl);
