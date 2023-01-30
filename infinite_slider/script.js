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
    let startClone = container.scrollWidth;
    if (sliderContainer.style.left === `-${startClone}px`) {
        left = 0;
        clone();
    }
}

//---ADD ALPHABET---
function addAlpha(slide) {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    alpha.forEach(alpha => {
        let ele = document.createElement("div");
        let letter = document.createTextNode(alpha);
        ele.appendChild(letter);
        ele.classList.add("alpha");
        slide.appendChild(ele);
    })
}

addAlpha(slide1);
addAlpha(slide2);



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

setInterval(moveBox, 10); // start moving the letters




