
document.addEventListener("DOMContentLoaded", () => {
    const tabNav = document.querySelectorAll(".slider-navigation li");
    const forwardArrow = document.querySelector(".arrows .forward");
    const backwardArrow = document.querySelector(".arrows .backward");

    //Digit navigation
    tabNav.forEach(item => {
        item.addEventListener("click", e => {

            const newActiveSlideIndex = Number(item.dataset.index);

            //Show slide
            document.querySelector(".slide.active").classList.remove("active");
            document.querySelector(".slide[data-index='" + newActiveSlideIndex + "']").classList.add("active");

            //Change active button
            document.querySelector(".slider-navigation .active").classList.remove("active");
            item.classList.add("active");
        });
    });

    //Arrow navigation
    forwardArrow.addEventListener("click", e => {
        const activeSlide = document.querySelector(".slide.active");
        let activeSlideIndex = activeSlide.dataset.index;
        let newActiveSlideIndex = 1;

        if (Number(activeSlideIndex) < 3) {
            newActiveSlideIndex = ++activeSlideIndex;
        } else {
            newActiveSlideIndex = 1;
        }

        const nextSlide = document.querySelector(".slide[data-index='" + newActiveSlideIndex + "']");
        activeSlide.classList.remove("active");
        nextSlide.classList.add("active");

        //Change active button
        document.querySelector(".slider-navigation .active").classList.remove("active");
        document.querySelector(".slider-navigation [data-index='" + newActiveSlideIndex + "']").classList.add("active");
    });

    backwardArrow.addEventListener("click", e => {
        const activeSlide = document.querySelector(".slide.active");
        let activeSlideIndex = activeSlide.dataset.index;
        let newActiveSlideIndex = 1;

        if (Number(activeSlideIndex) > 1) {
            newActiveSlideIndex = --activeSlideIndex;
        } else {
            newActiveSlideIndex = 3;
        }

        const nextSlide = document.querySelector(".slide[data-index='" + newActiveSlideIndex + "']");
        activeSlide.classList.remove("active");
        nextSlide.classList.add("active");

        //Change active button
        document.querySelector(".slider-navigation .active").classList.remove("active");
        document.querySelector(".slider-navigation [data-index='" + newActiveSlideIndex + "']").classList.add("active");
    });
});