const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const dropdownArrows = document.querySelectorAll('.arrow');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

