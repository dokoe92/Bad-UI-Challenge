

const container = document.querySelector(".container");

const sliderContainer = document.querySelector(".slider-container");


const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

let left = 0;


function clone() {
    let slides = document.querySelectorAll(".slide");
    let clone = slides[0].cloneNode(true);
    sliderContainer.removeChild(slides[0]);
    sliderContainer.appendChild(clone)
}



function moveBox() {
    left--;
    sliderContainer.style.left = `${left}px`;
    console.log(left)
    if (sliderContainer.style.left === "-200px") {
        console.log("test");
        clone();
        left = 0;

    }
}

setInterval(moveBox, 10);