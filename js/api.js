// fetching posts

const baseUrl =
  "http://chasju.online/allthingsjupiter/wp-json/wp/v2/posts?acf_format=standard&per_page=20";
const containerImages = document.querySelector(".carousel_images");

window.onresize = () => {
  if (window.innerWidth > 880 && window.innerWidth < 920) {
    window.location.reload();
  }
};

// Window width less than 900

if (window.innerWidth <= "900") {
  async function getPosts(url) {
    try {
      const response = await fetch(url);
      const posts = await response.json();

      containerImages.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {
        if (i === 4) {
          break;
        }

        containerImages.innerHTML += `<a href="/blogpage.html?id=${posts[i].id}"
                ><div class="latest_image" style="background-image: url(${posts[i].acf.header_image})"></div>
                <h3>${posts[i].acf.headline}</h3></a
              >`;
      }

      const carouselContainer = document.querySelectorAll(".carousel_images");
      const secondCarouselContainer = document.querySelectorAll(".carousel_images-mobile a");
      const carouselImage = document.querySelectorAll(".carousel_images a");
      const nextButton = document.querySelector(".right_arrow");
      const prevButton = document.querySelector(".left_arrow");

      let counter = 0;

      // Finding slide width for mobile

      const size = carouselImage[0].clientWidth;

      // Next slide
      nextButton.addEventListener("click", () => {
        if (counter >= carouselImage.length - secondCarouselContainer.length - 1) return;

        counter++;
        carouselContainer.forEach((item) => {
          item.style.transform = "translateX(" + -size * counter + "px)";
        });
      });

      // Previous slide

      prevButton.addEventListener("click", () => {
        if (counter <= 0) return;

        counter--;
        carouselContainer.forEach((item) => {
          item.style.transform = "translateX(" + -size * counter + "px)";
        });
      });
    } catch (error) {
      console.log(error);
      containerImages.innerHTML = error;
    }
  }

  getPosts(baseUrl);
}

// Window width desktop

if (window.innerWidth >= "900") {
  async function getPosts(url) {
    try {
      const response = await fetch(url);
      const posts = await response.json();

      containerImages.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {
        if (i === 4) {
          break;
        }

        containerImages.innerHTML += `<a href="/blogpage.html?id=${posts[i].id}"
                ><div class="latest_image" style="background-image: url(${posts[i].acf.header_image})"></div>
                <h3>${posts[i].acf.headline}</h3></a
              >`;
      }

      const containerImagesDesktop = document.querySelector(".carousel_images-desktop");

      for (let i = 0; i < posts.length; i++) {
        if (i < 4) {
          continue;
        }
        if (i === 8) {
          break;
        }

        containerImagesDesktop.innerHTML += `<a href="/blogpage.html"
                ><div class="latest_image" style="background-image: url(${posts[i].acf.header_image})"></div>
                <h3>${posts[i].acf.headline}</h3></a
              >`;
      }

      const containerImagesDesktop2 = document.querySelector(".carousel_images-desktop2");

      for (let i = 0; i < posts.length; i++) {
        if (i < 8) {
          continue;
        }
        if (i === 12) {
          break;
        }

        containerImagesDesktop2.innerHTML += `<a href="/blogpage.html"
                ><div class="latest_image" style="background-image: url(${posts[i].acf.header_image})"></div>
                <h3>${posts[i].acf.headline}</h3></a
              >`;
      }

      const carouselContainer = document.querySelectorAll(".carousel_images");
      const carouselImage = document.querySelectorAll(".carousel_images a");
      const nextButton = document.querySelector(".right_arrow");
      const prevButton = document.querySelector(".left_arrow");

      let counter = 0;

      // Finding slide width for desktop

      const containerWidth = carouselContainer[0].clientWidth;

      // Next slide

      console.log(carouselImage.length);

      nextButton.addEventListener("click", () => {
        if (counter >= carouselContainer.length - 1) return;

        counter++;
        carouselContainer.forEach((item) => {
          item.style.transform = "translateX(" + -containerWidth * counter + "px)";
        });
      });

      // Previous slide

      prevButton.addEventListener("click", () => {
        if (counter <= 0) return;

        counter--;
        carouselContainer.forEach((item) => {
          item.style.transform = "translateX(" + -containerWidth * counter + "px)";
        });
      });
    } catch (error) {
      console.log(error);
      containerImages.innerHTML = error;
    }
  }

  getPosts(baseUrl);
}

// perPage.onchange = (event)=> {
// const newUrl = baseUrl + `?per_page=${event.target.value}`;
//     productContainer.innerhtml = "";
//     getProducts(newUrl);
// }
