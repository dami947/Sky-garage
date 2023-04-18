const btnMenu = document.querySelector('.nav__menu-btn');
const mobileMenu = document.querySelector('.nav__menu-mobile-links');
const footerYear = document.querySelector('.footer__year');

const handleMenu = () => {
  mobileMenu.classList.toggle('menu-active');
  btnMenu.classList.toggle('is-active');

  mobileMenu.addEventListener('click', () => {
    if (mobileMenu.classList.contains('menu-active')) {
      mobileMenu.classList.remove('menu-active');
      btnMenu.classList.remove('is-active');
    }
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();

btnMenu.addEventListener('click', handleMenu);
