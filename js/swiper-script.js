var vSwiper = new Swiper(".swiper-container-vertical", {
    // Optional parameters
    direction: "vertical",
    effect: "slide",
    loop: false,
    mousewheel: true,
    hashNavigation: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        //clickable: true
    },
});

var hSwiper = new Swiper(".swiper-container-horizontal", {
    loop: false,
    slidesPerView: 1,
    speed: 700,
    freeMode: false,
    mousewheel: true,
    // autoHeight: true,
    centeredSlides: true,
    spaceBetween: 30,
    preloadImages: true,
    lazy: true,
    keyboard: {
        enabled: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints:{
        1250: {
            slidesPerView: 2,
            spaceBetween: 100,
            centeredSlides: true,
            freeMode: true,
            // autoHeight: false,

        }
    }
});
