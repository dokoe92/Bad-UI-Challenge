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
setInterval(moveBox, 10); // start moving the letters


// ---FUNCTIONS FOR INPUT---
const alpha = document.querySelectorAll(".alpha");

alpha.forEach(alpha => {
    alpha.addEventListener("click", getAlpha);
})


// Get alpha and put into text field
let inputText = document.querySelector(".input-name");
let inputPassword = document.querySelector(".input-password");
let confirmPassword = document.querySelector(".confirm-password");

let emailBool = false;
let passwordBool = false;
let confirmPassBool = false;

let emailBtn = document.querySelector(".email-btn");
let passBtn = document.querySelector(".password-btn");
let confirmBtn = document.querySelector(".confirmPass-btn");

emailBtn.addEventListener("click", () => {
    emailBool = true;
    passwordBool = false;
    confirmPassBool = false;
})

passBtn.addEventListener("click", () => {
    emailBool = false;
    passwordBool = true;
    confirmPassBool = false;
})

confirmBtn.addEventListener("click", () => {
    emailBool = false;
    passwordBool = false;
    confirmPassBool = true;
})


function getAlpha(e) {
    let target = e.target;
    let alpha = target.innerText;
    if (emailBool) {
        inputText.value += alpha;
    }
    if (passwordBool) {
        inputPassword.value += alpha;
    }
    if (confirmPassBool) {
        confirmPassword.value += alpha;
    }

}


// Reset name input field
const reset = document.querySelector(".reset-btn")
function deleteInput() {
    console.log("test")
    inputText.value = "";
}
reset.addEventListener("click", deleteInput)


// To Upper case
const upper = document.querySelector(".upper-btn");
function toUpper() {
    const letters = document.querySelectorAll(".alpha");
    letters.forEach(alpha => {
        alpha.style.textTransform = "uppercase"
    })
}
upper.addEventListener("click", toUpper)



// To lower case
const lower = document.querySelector(".lower-btn")
function toLower() {
    const letters = document.querySelectorAll(".alpha");
    letters.forEach(alpha => {
        alpha.style.textTransform = "lowercase"
    })
}
lower.addEventListener("click", toLower)



// Submit
const submit = document.querySelector(".submit-btn");
const email = document.querySelector(".input-name");
const password = document.querySelector(".input-password");
const passwordConfirm = document.querySelector(".confirm-password");

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalConfirmation = document.querySelector(".modal-content-confirmation");
const closeSign = document.querySelector(".close");

let emailModal = document.querySelector(".emailConfirm");
let passwordModal = document.querySelector(".passwordConfirm");
let passwordConfirmModal = document.querySelector(".passwordConfirmationConfirm");
let passwordSuccess = document.querySelector(".passwordSuccess");

function showConfirmation() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;
    if (passwordValue == passwordConfirmValue && emailValue != "" & passwordValue != "" && passwordConfirmValue != "") {
        modal.style.display = "block";
        modal.style.backgroundColor = "green"
        emailModal.innerText = "Your email address: " + emailValue;
        passwordModal.innerText = "Your password: " + passwordValue;
        passwordConfirmModal.innerText = "Your password confirmation: " + passwordConfirmValue;
        passwordSuccess.innerText = "Everything ok, you are registered now"
    }
    if (passwordValue != passwordConfirmValue && emailValue != "" & passwordValue != "" && passwordConfirmValue != "") {
        modal.style.display = "block";
        modal.style.backgroundColor = "red"
        emailModal.innerText = "Your email address: " + emailValue;
        passwordModal.innerText = "Your password: " + passwordValue;
        passwordConfirmModal.innerText = "Your password confirmation: " + passwordConfirmValue;
        passwordSuccess.innerText = "Sorry but your passwords must match!"
    }
}

function closeModal() {
    modal.style.display = "none";
}

submit?.addEventListener("click", showConfirmation);
closeSign?.addEventListener("click", closeModal);


// Numblock
const numbers = document.querySelectorAll(".number")
numbers.forEach(number => {
    number.addEventListener("click", () => {
        let numberValue = number.innerText;
        if (emailBool) {
            inputText.value += numberValue;
        }
        if (passwordBool) {
            inputPassword.value += numberValue;
        }
        if(confirmPassBool) {
            confirmPassword.value += numberValue;
        }

    })
})

const signs = document.querySelectorAll(".sign");
signs.forEach(sign => {
    sign.addEventListener("click", () => {
        let signValue = sign.innerText;
        if (emailBool) {
            inputText.value += signValue;
        }
        if (passwordBool) {
            inputPassword.value += signValue;
        }
        if(confirmPassBool) {
            confirmPassword.value += signValue;
        }
    })
})









