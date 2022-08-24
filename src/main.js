const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hero = document.querySelector('#hero');

hamburger.addEventListener('click', function () {
  menu.classList.toggle('hidden');
  hero.classList.toggle('hidden');
});

menu.addEventListener('click', function () {
  menu.classList.toggle('hidden');
  hero.classList.toggle('hidden');
});
