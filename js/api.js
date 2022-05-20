// fetching posts

const baseUrl = "http://chasju.online/allthingsjupiter/wp-json/wp/v2/posts?acf_format=standard";
const containerImage = document.querySelector(".test");
const container = document.querySelector(".carousel_container");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);

    for (let i = 0; i < posts.length; i++) {
      container.innerHTML += `<a href="/blogpage.html"
                ><div class="latest_image" style="background-image: url(${posts[i].acf.header_image})"></div>
                <h3>Example</h3></a
              >`;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts(baseUrl);

// perPage.onchange = (event)=> {
// const newUrl = baseUrl + `?per_page=${event.target.value}`;
//     productContainer.innerhtml = "";
//     getProducts(newUrl);
// }
