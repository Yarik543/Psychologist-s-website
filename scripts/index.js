const cards = document.querySelector(".second-block .cards");
const dots = document.querySelectorAll(".slider-dots label");
const radios = document.querySelectorAll(
    '.second-block input[type="radio"]',
);

function setActive(index) {
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