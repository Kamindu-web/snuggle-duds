var swiper = new Swiper(".kd-slider", {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    initialSlide: 1,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    centerInsufficientSlides: true,
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
    },
    on: {
        init: function () {
            setTimeout(() => {
                this.update();
                this.slideToLoop(0, 0);
            }, 500);
        },
        resize: function () {
            this.update();
        },
        slideChangeTransitionEnd: function () {
            this.update();
            fixSlideClasses();
        }
    }
});

// Function to manually fix next & prev slide assignments
function fixSlideClasses() {
    setTimeout(() => {
        let slides = document.querySelectorAll(".swiper-slide");
        slides.forEach(slide => slide.classList.remove("swiper-slide-prev", "swiper-slide-next"));

        let activeSlide = document.querySelector(".swiper-slide-active");
        if (activeSlide) {
            let prevSlide = activeSlide.previousElementSibling || slides[slides.length - 1];
            let nextSlide = activeSlide.nextElementSibling || slides[0];

            prevSlide.classList.add("swiper-slide-prev");
            nextSlide.classList.add("swiper-slide-next");
        }
    }, 50);
}

// Ensure navigation buttons trigger `fixSlideClasses`
document.querySelector(".kd-slider-next-btn").addEventListener("click", fixSlideClasses);
document.querySelector(".kd-slider-prev-btn").addEventListener("click", fixSlideClasses);
