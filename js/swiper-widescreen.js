"use strict";

const widescreenSwiper = new Swiper(".swiper-choice", {
    slidesPerView: "auto",
    spaceBetween: 30,
    simulateTouch: true,
    // touchRatio: 1,
    // touchAngle: 45,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        nextEl: ".choice-button-next",
        prevEl: ".choice-button-prev",
    },
    pagination: {
        el: ".choice-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
        spaceBetween: 25,
        },
        1200: {
        spaceBetween: 35
        }
    },
});