const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  speed: 300,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 20,
  breakpoints: {
    320: {
      spaceBetween: 20,
      allowTouchMove: true,
      slidesPerView: 1,
    },
    1023: {
      spaceBetween: 20
    }
  }
});
