import "./index.scss";
// import "bootstrap/js/dist/carousel";
import Button from "bootstrap/js/dist/button";
import Carousel from "bootstrap/js/dist/carousel";
import { Collapse } from "bootstrap";

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

function renderCollapse() {
    // var myCollapse = document.getElementById("myCollapse");
    // var bsCollapse = new bootstrap.Collapse(myCollapse, {
    //     toggle: false,
    // });
    const myCollapseBtn = document.getElementById("collapseBtnExampleJS");
    console.log("myCollapseBtn :>> ", myCollapseBtn);

    const myCollapse = document.getElementById("collapseExampleJS");
    const bsCollapse = new Collapse(myCollapse, {
        toggle: false,
    });

    myCollapseBtn.addEventListener("click", function () {
        bsCollapse.toggle();
    });
}

renderCollapse();
