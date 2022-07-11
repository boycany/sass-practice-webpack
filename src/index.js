import "./index.scss";
// import "bootstrap/js/dist/carousel";
import Button from "bootstrap/js/dist/button";
import Carousel from "bootstrap/js/dist/carousel";

// function buttonHandler() {
//   const button = document.getElementById("myButton");
//   const bsButton = new Button(button);
//   setTimeout(() => {
//     bsButton.toggle();
//   }, 2000);
// }

// buttonHandler();

function carouselHandler() {
  const myCarousel = document.getElementById("carouselExampleJS");
  const myCarouselBtnPrev = document.getElementById("carouselExampleJSPrev");
  const myCarouselBtnNext = document.getElementById("carouselExampleJSNext");

  //相當於在 html 下一個 data-bs-ride 屬性
  const carousel = new Carousel(myCarousel, {
    interval: false,
    touch: true,
  });

  myCarouselBtnPrev.addEventListener("click", function () {
    carousel.prev();
  });

  myCarouselBtnNext.addEventListener("click", function () {
    carousel.next();
  });

  myCarousel.addEventListener("slide.bs.carousel", function () {
    console.log("slide....");
  });

  myCarousel.addEventListener("slid.bs.carousel", function () {
    console.log("slid");
  });
}
carouselHandler();
