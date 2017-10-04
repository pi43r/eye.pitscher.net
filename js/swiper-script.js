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

  preventClicks: false,
  preventClicksPropagation: false,

  touchRatio: 1.4,

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

  slidesPerView: 3,
  centeredSlides: true
})

var mySwiperH = new Swiper('.swiper-container-h', {
  // Optional parameters
  direction: 'horizontal',

  simulateTouch: false,
  freeMode: false,


  zoom: true,
  loop: false,

  preloadImages: false,
  lazyLoading: true,

  touchRatio: 1.4,

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
