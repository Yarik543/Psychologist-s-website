const cards = document.querySelector(".second-block .cards");
const dots = document.querySelectorAll(".appreciation-sider-dots label");
const radios = document.querySelectorAll(
    '.second-block input[type="radio"]',
);

let setActive = (index) => {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
        radios[i].checked = i === index;
    });
}

// клик по точкам
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        cards.scrollTo({
            left: cards.offsetWidth * index,
            behavior: "smooth",
        });
        setActive(index);
    });
});

// свайп
cards.addEventListener("scroll", () => {
    const index = Math.round(cards.scrollLeft / cards.offsetWidth);
    setActive(index);
});

// стартовое состояние
setActive(0);

// Слайдер специалистов
const specialistsContainer = document.querySelector(".specialists_container");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");

if (specialistsContainer && prevBtn && nextBtn) {
    let currentSlide = 0;
    const totalSlides = specialistsContainer.children.length;

    const updateSlide = (index) => {
        currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
        specialistsContainer.scrollTo({
            left: specialistsContainer.offsetWidth * currentSlide,
            behavior: "smooth",
        });
    };

    prevBtn.addEventListener("click", () => {
        updateSlide(currentSlide - 1);
    });

    nextBtn.addEventListener("click", () => {
        updateSlide(currentSlide + 1);
    });

    specialistsContainer.addEventListener("scroll", () => {
        currentSlide = Math.round(specialistsContainer.scrollLeft / specialistsContainer.offsetWidth);
    });
}