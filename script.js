const slides = document.querySelectorAll(".slide");


slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
})

let curSlide = 0;

let maxSlide = slides.length -1;

const nextSlide = document.querySelector(".right");
nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100* (index-curSlide)}%)`
    })
})


const prevSlide = document.querySelector(".left");
prevSlide.addEventListener("click", function() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100* (index-curSlide)}%)`
    })
})

slides.forEach((slide) => {
    slide.style.transition = "all 1s"
})

let counter = 5;





const slides2 = document.querySelectorAll(".slide2");
const slider2 = document.querySelector(".slider2");
const sliderWrapper = document.querySelector(".slide-wrapper");
const slideContainer = document.querySelector(".slide-Container");

slides2.forEach((slide, index) => {
    slide.style.transform = `translateX(${index*100}%)`
})

const slider = document.querySelector(".slider2");
function clone() {
    const slideWrapper = document.querySelector(".slider2")
    const clonedNode = slider.cloneNode(true);
    slideWrapper.appendChild(clonedNode);
    const width = slider2.offsetWidth;
    console.log(width);
    clonedNode.style = `left: ${width}px`
}

function moveLeft() {
    const width = slider2.offsetWidth;
    console.log(width);
}
clone();
moveLeft();

