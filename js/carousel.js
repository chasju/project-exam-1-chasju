const carouselContainer = document.querySelector(".carousel_images");
const carouselImage = document.querySelectorAll(".carousel_images a");
const nextButton = document.querySelector(".right_arrow");
const prevButton = document.querySelector(".left_arrow");

let counter = 0;
const size = carouselImage[0].clientWidth;
const containerHeight = carouselContainer.clientHeight;
const containerWidth = carouselContainer.clientWidth;
console.log(containerHeight);
console.log(carouselImage.length);

carouselContainer.style.transform = "translateX(" + -size * counter + "px)";

if (window.innerWidth >= "900") {
  nextButton.addEventListener("click", () => {
    if (counter >= carouselImage.length - 4) return;

    counter++;
    carouselContainer.style.transform = "translateX(" + -containerWidth * counter + "px)";
  });
} else {
  nextButton.addEventListener("click", () => {
    if (counter >= carouselImage.length - 1) return;

    counter++;
    carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
  });
}

if (window.innerWidth >= "900") {
  prevButton.addEventListener("click", () => {
    if (counter <= 0) return;

    counter--;
    carouselContainer.style.transform = "translateX(" + -containerWidth * counter + "px)";
  });
} else {
  prevButton.addEventListener("click", () => {
    if (counter <= 0) return;

    counter--;
    carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
  });
}
