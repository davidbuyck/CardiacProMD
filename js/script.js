// script.js

// MOBILE NAV TOGGLE
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  console.log('hamburger clicked');
  navLinks.classList.toggle('open');
});
