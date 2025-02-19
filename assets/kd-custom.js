var swiper = new Swiper(".kd-slider", {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    initialSlide: 1,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    centerInsufficientSlides: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
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
  
});

// collection carousel

document.addEventListener("DOMContentLoaded", function () {
    var kdCollectionSwiper = new Swiper(".kd-collection-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".kd-collection-swiper-next",
            prevEl: ".kd-collection-swiper-prev",
        },
        pagination: {
            el: ".kd-collection-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
});
