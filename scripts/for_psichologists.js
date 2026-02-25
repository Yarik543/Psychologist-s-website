//Бургер меню
const burgerBtn = document.querySelector(".burger-menu");
const burgerPanel = document.getElementById("burgerPanel");
const burgerOverlay = document.getElementById("burgerOverlay");
const burgerClose = document.getElementById("burgerClose");

burgerBtn.addEventListener("click", () => {
    burgerPanel.classList.add("active");
    burgerOverlay.classList.add("active");
});

const closeBurger = () => {
    burgerPanel.classList.remove("active");
    burgerOverlay.classList.remove("active");
}

burgerClose.addEventListener("click", closeBurger);
burgerOverlay.addEventListener("click", closeBurger);
