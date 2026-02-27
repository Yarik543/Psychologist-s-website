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


//слайдер CardAdvantages
const cardExpectations = document.querySelector(".card-expectations");
const dotsAdvantages = document.querySelectorAll(".slider-dots label");
const radiosAdvantages = document.querySelectorAll(
    '.section-third input[type="radio"]',
);

let setActiveExpectations = (index) => {
    dotsAdvantages.forEach((dot, i) => {
        dot.classList.toggle("activeDot", i === index);
        radiosAdvantages[i].checked = i === index;
    });
}

// клик по точкам
dotsAdvantages.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        cardExpectations.scrollTo({
            left: cardExpectations.offsetWidth * index,
            behavior: "smooth",
        });
        setActiveExpectations(index);
    });
});

// свайп
cardExpectations.addEventListener("scroll", () => {
    const index = Math.round(cardExpectations.scrollLeft / cardExpectations.offsetWidth);
    setActiveExpectations(index);
});

//Start
setActiveExpectations(0);