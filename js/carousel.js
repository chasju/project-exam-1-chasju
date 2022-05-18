const carouselContainer = document.querySelectorAll(".carousel_images");
const secondCarouselContainer = document.querySelectorAll(".carousel_images-mobile a");
const carouselImage = document.querySelectorAll(".carousel_images a");
const nextButton = document.querySelector(".right_arrow");
const prevButton = document.querySelector(".left_arrow");

// Re-calculating slide width

window.onresize = () => {
  if (window.innerWidth > 880 && window.innerWidth < 920) {
    window.location.reload();
  }
};

let counter = 0;
// Finding slide width for mobile

const size = carouselImage[0].clientWidth;

// Finding slide width for desktop

const containerWidth = carouselContainer[0].clientWidth;

// Next slide

if (window.innerWidth >= "900") {
  nextButton.addEventListener("click", () => {
    if (counter >= carouselContainer.length - 1) return;

    counter++;
    carouselContainer.forEach((item) => {
      item.style.transform = "translateX(" + -containerWidth * counter + "px)";
    });
  });
} else {
  nextButton.addEventListener("click", () => {
    if (counter >= carouselImage.length - secondCarouselContainer.length - 1) return;

    counter++;
    carouselContainer.forEach((item) => {
      item.style.transform = "translateX(" + -size * counter + "px)";
    });
  });
}

// Previous slide

if (window.innerWidth >= "900") {
  prevButton.addEventListener("click", () => {
    if (counter <= 0) return;

    counter--;
    carouselContainer.forEach((item) => {
      item.style.transform = "translateX(" + -containerWidth * counter + "px)";
    });
  });
} else {
  prevButton.addEventListener("click", () => {
    if (counter <= 0) return;

    counter--;
    carouselContainer.forEach((item) => {
      item.style.transform = "translateX(" + -size * counter + "px)";
    });
  });
}
