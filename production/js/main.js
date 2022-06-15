"use strict";

var mobileMenuOpen = document.querySelector('.header__mobile-menu');
var mobileNav = document.querySelector('.header__wrapper');
var mobileMenuClose = document.querySelector('.header__mobile-menu-close');
var overlay = document.querySelector('.overlay');

if (mobileMenuOpen) {
  mobileMenuOpen.addEventListener('click', function () {
    mobileNav.classList.toggle('header__wrapper--active');
    overlay.classList.toggle('hidden');
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', function () {
    mobileNav.classList.toggle('header__wrapper--active');
    overlay.classList.toggle('hidden');
  });
}

var mobileMenuItems = document.querySelectorAll('.header__nav-item');

if (mobileMenuItems) {
  mobileMenuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (mobileNav.classList.contains('header__wrapper--active')) {
        mobileNav.classList.remove('header__wrapper--active');
      }

      if (!overlay.classList.contains('hidden')) {
        overlay.classList.add('hidden');
      }
    });
  });
}
"use strict";

var headerCall = document.querySelector('.header__call');
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');
var closeModalButton = document.querySelector('.modal__close-button');
var addressesButtons = document.querySelectorAll('.addresses__container button');

if (addressesButtons) {
  addressesButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      showModal();
      window.addEventListener('keydown', hideModalHandler);
      closeModalButton.addEventListener('click', hideModalHandler);
      overlay.addEventListener('click', hideModalHandler);
    });
  });
}

if (headerCall) {
  headerCall.addEventListener('click', function () {
    showModal();
    window.addEventListener('keydown', hideModalHandler);
    closeModalButton.addEventListener('click', hideModalHandler);
    overlay.addEventListener('click', hideModalHandler);
  });
}

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.classList.add('no-scroll');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

function hideModalHandler(evt) {
  if (evt.type === 'keydown' && evt.key !== 'Escape') {
    return;
  }

  hideModal();
  window.removeEventListener('keydown', hideModalHandler);
  closeModalButton.removeEventListener('click', hideModalHandler);
  overlay.addEventListener('click', hideModalHandler);
}
"use strict";

var swiper = new Swiper('.swiper', {
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
      slidesPerView: 1
    },
    1023: {
      spaceBetween: 20
    }
  }
});