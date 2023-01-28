const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        updateOnWindowResize: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },
  });