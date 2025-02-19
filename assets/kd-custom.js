var swiper = new Swiper(".kd-slider", {
    slidesPerView: 1.3,  /* Allows partial visibility of next/prev slides */
    centeredSlides: true, /* Ensures active slide is in center */
    loop: true,
    spaceBetween: 20, /* Adjusts spacing */
    initialSlide: 1, /* Ensures correct positioning on load */
    watchSlidesProgress: true, /* Tracks slide visibility */
    watchSlidesVisibility: true, /* Ensures slides are visible correctly */
    autoplay: {
        delay: 3000,  /* Autoplay delay set to 3000ms (3 seconds) */
        disableOnInteraction: false, /* Continues autoplay after user interaction */
    },
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
