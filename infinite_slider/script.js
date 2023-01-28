

const container = document.querySelector(".container");

const sliderContainer = document.querySelector(".slider-container");


const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

let left = 0;


function clone() {
    let slides = document.querySelectorAll(".slide");
    let clone = slides[0].cloneNode(true);
    sliderContainer.appendChild(clone);
    sliderContainer.removeChild(slides[0]);
    sliderContainer.style.left = 0;

}



function moveBox() {
    sliderContainer.style.left = `${left}px`;
    left--;
    if (sliderContainer.style.left === "-500px") {
        left = 0;
        clone();
    }
}

setInterval(moveBox, 20);