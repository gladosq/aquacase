const mobileMenuOpen = document.querySelector('.header__mobile-menu');
const mobileNav = document.querySelector('.header__wrapper');
const mobileMenuClose = document.querySelector('.header__mobile-menu-close');
const overlay = document.querySelector('.overlay');

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

const mobileMenuItems = document.querySelectorAll('.header__nav-item');

if (mobileMenuItems) {
  mobileMenuItems.forEach((item) => {
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
