var mySwiperV = new Swiper('.swiper-container-v', {
  // Optional parameters
  direction: 'vertical',

  simulateTouch: false,
  freeMode: false,

  mousewheelControl: true,
  mousewheelReleaseOnEdges: true,

  zoom: true,
  loop: false,

  preloadImages: false,
  lazyLoading: true,
  slidesPerView: 1,

  preventClicks: false,
  preventClicksPropagation: false,

  touchRatio: 1.2,

  speed: 1000,
  keyboardControl: true,

  effect: 'cube',
  cube: {
    slideShadows: false,
    shadow: false
  },

  touchEventsTarget: 'wrapper',
  nextButton: '.swiper-button-down',

  hashnav: true,
  hashnavWatchState: true,

  centeredSlides: true
})

var mySwiperH = new Swiper('.swiper-container-h', {
  // Optional parameters
  direction: 'horizontal',

  simulateTouch: false,
  freeMode: false,


  zoom: true,
  loop: true,

  preloadImages: false,
  lazyLoading: true,

  touchRatio: 1.2,

  speed: 1000,
  keyboardControl: true,

  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',

  slidesPerView: 1,

  effect: 'cube',
  cube: {
    slideShadows: false,
    shadow: false
  }

})
