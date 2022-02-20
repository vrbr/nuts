const swiperWorks = new Swiper(".swiper-works", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".works-button-next",
        prevEl: ".works-button-prev",
        },
    pagination: {
        el: ".works-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    hashNavigation: {
        watchState: true
    },
    watchSlidesProgress: true,
    watchSlidesvisibility: true,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        }
    },
});