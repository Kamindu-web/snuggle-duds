var swiper = new Swiper('.kd-slider', {
  slidesPerView: 1,
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
    nextEl: '.kd-slider-next-btn',
    prevEl: '.kd-slider-prev-btn',
  },
  pagination: {
    el: '.kd-slider-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
  },
});

// collection carousel

document.addEventListener('DOMContentLoaded', function () {
  var kdCollectionSwiper = new Swiper('.kd-collection-swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    initialSlide: 0,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.kd-collection-swiper-next',
      prevEl: '.kd-collection-swiper-prev',
    },
    
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

// products carousel

document.addEventListener('DOMContentLoaded', function () {
   // Get the number of slides from the slider container
   var slideCount = document.querySelectorAll('.kd-prods-car-swiper .swiper-slide').length;
  
   // Calculate dynamic slides per view for desktop and tablet breakpoints
   var slidesDesktop = Math.min(5, slideCount);
   var slidesTablet = Math.min(2, slideCount); // Adjust as needed
   
   var kdProdsCarSwiper = new Swiper('.kd-prods-car-swiper', {
     slidesPerView: 1,
     centeredSlides: true,
     centeredSlidesBounds: true,
     centerInsufficientSlides: true,
     initialSlide: 0,
     spaceBetween: 20,
     loop: true,
     autoplay: {
       delay: 3000,
       disableOnInteraction: false,
     },
     navigation: {
       nextEl: '.kd-prods-car-next',
       prevEl: '.kd-prods-car-prev',
     },
     breakpoints: {
       768: {
         slidesPerView: slidesTablet
       },
       1024: {
         slidesPerView: slidesDesktop
       }
     }
   });

  document.querySelectorAll('.kd-prods-car-favorite-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      let productId = this.getAttribute('data-product-id');
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.includes(productId) ? favorites.splice(favorites.indexOf(productId), 1) : favorites.push(productId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
  });
});

// open size guide

window.addEventListener('load',()=>{
  let sizeChartWrapper = document.querySelector('.kd-size-guide-wrapper')
  let closeSizeChart = document.querySelector('.close-size-guide')
  let openBtns = Array.from(document.getElementsByClassName('open-size-chart'))

  openBtns.forEach(opnbtn=>{
    opnbtn.addEventListener('click',(e)=>{
      sizeChartWrapper.classList.toggle('active')
      e.preventDefault();
    })
  })

  closeSizeChart.addEventListener('click',()=>{
    sizeChartWrapper.classList.remove('active')
  })
})