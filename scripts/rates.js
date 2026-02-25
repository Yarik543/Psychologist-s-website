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


// Слайдер специалистов
const ratesContainer = document.querySelector(".rates-container");
const prevBtn = document.querySelector(".slider_left_arrow");
const nextBtn = document.querySelector(".slider_right_arrow");

if (ratesContainer && prevBtn && nextBtn) {
    let currentSlide = 0;
    const totalSlides = ratesContainer.children.length;

    const updateSlide = (index) => {
        currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
        ratesContainer.scrollTo({
            left: ratesContainer.offsetWidth * currentSlide,
            behavior: "smooth",
        });
    };

    prevBtn.addEventListener("click", () => {
        updateSlide(currentSlide - 1);
    });

    nextBtn.addEventListener("click", () => {
        updateSlide(currentSlide + 1);
    });

    ratesContainer.addEventListener("scroll", () => {
        currentSlide = Math.round(ratesContainer.scrollLeft / ratesContainer.offsetWidth);
    });
}