// "use strict";

// const stickerSwiper = new Swiper(".swiper-choice", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     simulateTouch: true,
//     // touchRatio: 1,
//     // touchAngle: 45,
//     grabCursor: true,
//     keyboard: {
//         enabled: true,
//         onlyInViewport: true
//     },
//     navigation: {
//         nextEl: ".choice-button-next",
//         prevEl: ".choice-button-prev",
//     },
//     pagination: {
//         el: ".choice-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         768: {
//         spaceBetween: 25,
//         },
//         1200: {
//         spaceBetween: 35
//         }
//     },
// });

"use strict";

const stickerSwiper = new Swiper(".swiper-choice", {
    slidesPerView: "auto",
    spaceBetween: 30,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    hashNavigation: {
        watchState: true
    },
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
        spaceBetween: 25
        },
        1200: {
        spaceBetween: 35
        }
    },
    watchSlidesProgress: true,
    watchSlidesvisibility: true
});