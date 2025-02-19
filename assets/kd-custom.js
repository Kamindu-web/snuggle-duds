var swiper = new Swiper(".kd-slider", {
    slidesPerView: 1.3,  /* Ensures partial visibility of next/prev slides */
    centeredSlides: true, /* Ensures the active slide is centered */
    loop: true, /* Enables infinite loop */
    spaceBetween: 20, /* Adjust spacing */
    initialSlide: 1, /* Starts from the second slide */
    watchSlidesProgress: true, /* Ensures correct rendering */
    watchSlidesVisibility: true, /* Keeps track of visibility */
    centerInsufficientSlides: true, /* Fixes centering issue when fewer slides are present */
    autoplay: {
        delay: 3000,  /* Autoplay delay set to 3000ms (3 seconds) */
        disableOnInteraction: false, /* Keeps autoplay running after interaction */
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
            slidesPerView: 1.5, /* Adjusts for tablets */
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 1.3, /* Adjusts for desktops */
            spaceBetween: 20
        }
    },
    on: {
        init: function () {
            this.update();  /* Ensures proper visibility on load */
        },
        resize: function () {
            this.update(); /* Fixes layout on window resize */
        }
    }
});
