const headerCall = document.querySelector('.header__call');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__close-button');

const addressesButtons = document.querySelectorAll('.addresses__container button');

if (addressesButtons) {
  addressesButtons.forEach((item) => {
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
