// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const Ourwidth = screen.width;
new Swiper('.slider__block', {
  breakpoints: {
    1900: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      centerSlides: true,
    },
  },
  slidesPerView: 4,
  simulateTouch: false,
  loop: true,
  speed: 700,
  navigation: {
    nextEl: '.slider__button_next',
    prevEl: '.slider__button_prev',
  },
  // autoplay: {
  //   delay: 2000,
  // },
});
if (Ourwidth > 500) {
  let nextSlide = document.querySelector('.swiper-slide-next');
  const sliderItem = document.querySelectorAll('.slider__item ');
  nextSlide.nextElementSibling.classList.add('swiper-slide-next-next');
  let indexSlider = null;
  setInterval(() => {
    let nextSlide = document.querySelector('.swiper-slide-next');
    if (indexSlider == null) {
      indexSlider = nextSlide.dataset.swiperSlideIndex;
    }
    if (nextSlide.dataset.swiperSlideIndex != indexSlider) {
      sliderItem.forEach((e) => {
        e.classList.remove('swiper-slide-next-next');
      });
      nextSlide.nextElementSibling.classList.add('swiper-slide-next-next');
      indexSlider = nextSlide.dataset.swiperSlideIndex;
    }
  }, 100);
}

// let nextSlide = document.querySelector('.swiper-slide-next');
// console.log(nextSlide.dataset.swiperSlideIndex);
