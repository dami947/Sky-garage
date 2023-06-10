const btnMenu = document.querySelector('.nav__menu-btn');
const mobileMenu = document.querySelector('.nav__menu-mobile-links');

const footerYear = document.querySelector('.footer__year');
const cookieBox = document.querySelector('.cookie-box');
const cookieBtn = document.querySelector('.cookie-box__btn');

const handleMenu = () => {
  mobileMenu.classList.toggle('menu-active');
  btnMenu.classList.toggle('is-active');
  console.log('click');

  mobileMenu.addEventListener('click', () => {
    if (mobileMenu.classList.contains('menu-active')) {
      mobileMenu.classList.remove('menu-active');
      btnMenu.classList.remove('is-active');
    }
  });
};

const showCookie = () => {
  const cookieEaten = localStorage.getItem('cookie');
  if (cookieEaten) {
    cookieBox.classList.add('cookie-hide');
  }
};

const handleCookieBox = () => {
  localStorage.setItem('cookie', 'true');
  cookieBox.classList.add('cookie-hide');
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();
showCookie();
btnMenu.addEventListener('click', handleMenu);
cookieBtn.addEventListener('click', handleCookieBox);
