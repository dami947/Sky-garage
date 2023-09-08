const THUMBNAILS = document.querySelectorAll('.gallery-img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup-close');
const POPUP_IMG = document.querySelector('.popup-img');
const ARROW_LEFT = document.querySelector('.popup-arrow--left');
const ARROW_RIGHT = document.querySelector('.popup-arrow--right');

let currentImgIndex;

const showNextImg = () => {
  if (currentImgIndex === THUMBNAILS.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
  showNumberImg();
};

const showPreviousImg = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
  showNumberImg();
};

const closePopup = () => {
  POPUP.classList.add('fade-out');
  setTimeout(() => {
    POPUP.classList.add('hidden');
    POPUP.classList.remove('fade-out');
    THUMBNAILS.forEach(element => {
      element.setAttribute('tabindex', 1);
    });
  }, 300);
};

const showNumberImg = () => {
  const numberImg = document.querySelector('.number-img');
  numberImg.textContent = `${currentImgIndex + 1}/${THUMBNAILS.length}`;
};

THUMBNAILS.forEach((thumbnail, index) => {
  const showPopup = e => {
    POPUP.classList.remove('hidden');
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
    THUMBNAILS.forEach(element => {
      element.setAttribute('tabindex', -1);
    });
    showNumberImg();
  };

  thumbnail.addEventListener('click', showPopup);

  thumbnail.addEventListener('keydown', e => {
    if (e.code === 'Enter' || e.keyCode === 13) {
      showPopup(e);
    }
  });
});

POPUP_CLOSE.addEventListener('click', closePopup);

ARROW_RIGHT.addEventListener('click', showNextImg);

ARROW_LEFT.addEventListener('click', showPreviousImg);

document.addEventListener('keydown', e => {
  if (!POPUP.classList.contains('hidden')) {
    if (e.code === 'ArrowRight' || e.keyCode === 39) {
      showNextImg();
    }

    if (e.code === 'ArrowLeft' || e.keyCode === 37) {
      showPreviousImg();
    }

    if (e.code === 'Escape' || e.keyCode === 27) {
      closePopup();
    }
  }
});

POPUP.addEventListener('click', e => {
  if (e.target === POPUP) {
    closePopup();
  }
});
