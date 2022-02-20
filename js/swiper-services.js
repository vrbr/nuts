const swiper1 = new Swiper(".swiper-services", {
    slidesPerView: "auto",
    spaceBetween: 30,
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
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    navigation: {
        nextEl: ".services-button-next",
        prevEl: ".services-button-prev",
    },
    pagination: {
        el: ".services-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
        spaceBetween: 40
        },
        1200: {
        spaceBetween: 35
        }
    },
    watchSlidesProgress: true,
    watchSlidesvisibility: true
});