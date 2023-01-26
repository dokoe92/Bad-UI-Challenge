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

