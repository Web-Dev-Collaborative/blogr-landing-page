const img = document.querySelector('.js-img');
const nav = document.querySelector('.js-nav');
const hamburgerBtn = document.querySelector('.js-hamburger');
const links = document.querySelectorAll('.js-link');

const setSublistState = function () {
  if (!nav.classList.contains('open-nav')) {
    nav.classList.add('open-nav');
    img.src = './images/icon-close.svg';
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  } else {
    nav.classList.remove('open-nav');
    img.src = './images/icon-hamburger.svg';
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
};

const toggleSublists = function (e) {
  links.forEach((l) => {
    l.classList.remove('open-arrow');
    l.nextElementSibling.classList.remove('open');
    l.nextElementSibling.setAttribute('aria-expanded', 'false');
  });

  e.target.classList.add('open-arrow');
  e.target.nextElementSibling.classList.add('open');
  e.target.nextElementSibling.setAttribute('aria-expanded', 'true');
};

const closeAllSublists = function (e) {
  if (!e.target.closest('.js-link')) {
    links.forEach((l) => {
      l.classList.remove('open-arrow');
      l.nextElementSibling.setAttribute('aria-expanded', 'false');
    });
    links.forEach((l) => l.nextElementSibling.classList.remove('open'));
  }
};

hamburgerBtn.addEventListener('click', setSublistState);
links.forEach((link) => link.addEventListener('click', toggleSublists));
window.addEventListener('click', closeAllSublists);
