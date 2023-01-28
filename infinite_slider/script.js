// ---MOVE CONTAINER FUNCTION---
// Elements for moving Container
const container = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

// left position of sliderContainer
let left = 0;

// Clone slide and append to container
function clone() {
    let slides = document.querySelectorAll(".slide");
    let clone = slides[0].cloneNode(true);
    sliderContainer.appendChild(clone);
    sliderContainer.removeChild(slides[0]);
    sliderContainer.style.left = 0;

}

// Move box and clone new slide when breakpoint is reached
function moveBox() {
    sliderContainer.style.left = `${left}px`;
    left--;
    if (sliderContainer.style.left === "-500px") {
        left = 0;
        clone();
    }
}

// ---FUNCTIONS FOR INPUT---
const alpha = document.querySelectorAll(".alpha");

alpha.forEach(alpha => {
    alpha.addEventListener("click", getAlpha)
})

let inputText = document.querySelector(".input-name")

// Get alpha and put into text field
function getAlpha(e) {
    let target = e.target;
    let alpha = target.innerText;
    inputText.value += alpha;
    console.log(alpha);
}

// Reset name input field
const reset = document.querySelector(".reset-btn")
function deleteInput() {
    console.log("test")
    inputText.value = "";
}
reset.addEventListener("click", deleteInput)





setInterval(moveBox, 20); // start moving the letters

