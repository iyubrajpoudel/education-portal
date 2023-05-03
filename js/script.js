const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const navWrapper = document.querySelectorAll(".nav-wrapper")[0];

console.log(hamburgerBtn, menuCloseBtn);

hamburgerBtn.addEventListener("click", () => {
    navWrapper.classList.toggle("active");
})

menuCloseBtn.addEventListener("click", () => {
    navWrapper.classList.toggle("active");
})