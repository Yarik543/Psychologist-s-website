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

const cardsAdvantages = document.querySelector(".fourth-block .card-advantages");
const dotsAdvantages = document.querySelectorAll(".slider-dots-Advantages label");
const radiosAdvantages = document.querySelectorAll(
    '.fourth-block input[type="radio"]',
);

function setActiveAdvantages(index) {
    dotsAdvantages.forEach((dot, i) => {
        dot.classList.toggle("activeDot", i === index);
        radiosAdvantages[i].checked = i === index;
    });
}

// клик по точкам
dotsAdvantages.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        cardsAdvantages.scrollTo({
            left: cardsAdvantages.offsetWidth * index,
            behavior: "smooth",
        });
        setActiveAdvantages(index);
    });
});

// свайп
cardsAdvantages.addEventListener("scroll", () => {
    const index = Math.round(cardsAdvantages.scrollLeft / cardsAdvantages.offsetWidth);
    setActiveAdvantages(index);
});

//Start
setActiveAdvantages(0);