var swiper = new Swiper(".kd-slider", {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    initialSlide: 1,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    centerInsufficientSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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
            slidesPerView: 1.5,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 1.3,
            spaceBetween: 20
        }
    }
    // ,
    // on: {
    //     init: function () {
    //         setTimeout(() => {
    //             this.update();
    //             this.slideToLoop(0, 0);
    //         }, 500);
    //     },
    //     resize: function () {
    //         this.update();
    //     },
    //     slideChangeTransitionEnd: function () {
    //         this.update();
    //     }
    // }
});
