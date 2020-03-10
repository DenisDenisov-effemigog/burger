let humburgerBtn = document.querySelector('.humburger__btn');
let humburgerCloseBtn = document.querySelector('.close__menu');
let hamburgerList = document.querySelector('.hamburger__list');

humburgerBtn.addEventListener('click', function(e) {
	hamburgerList.classList.add('open')
});

humburgerCloseBtn.addEventListener('click', function(e) {
	hamburgerList.classList.remove('open')
});