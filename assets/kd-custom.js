var swiper = new Swiper(".kd-slider", {
    slidesPerView: 1, /* Ensures 15% visibility of previous & next slides */
    centeredSlides: true,
    loop: true,
    spaceBetween: 20, /* Adjusts spacing */
    navigation: {
        nextEl: ".kd-slider-next-btn",
        prevEl: ".kd-slider-prev-btn",
    },
    pagination: {
        el: ".kd-slider-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.6, /* Adjusts for tablets */
        },
        1024: {
            slidesPerView: 1.3, /* Adjusts for desktop */
        }
    }
});