let burgerPrevArrow = document.querySelector('.burger__prev_arrow');
let burgerNextArrow = document.querySelector('.burger__next_arrow');
let burgerList = document.querySelector('.burger__list')
let burgerItem = [...document.querySelectorAll('.burger__item')]
let currentSlide = 0;
let step;

burgerPrevArrow.addEventListener('click', function(e) {
	currentSlide -=1;
		if(currentSlide < 0){
			currentSlide = burgerItem.length - 1
		}
			step = currentSlide  *  100;
			burgerList.style.transform = 'translate(-' + step + '%)'
});

burgerNextArrow.addEventListener('click', function(e) {
	currentSlide +=1;
	if( currentSlide > burgerItem.length - 1){
		currentSlide = 0
	}
		step = currentSlide  *  100;
		burgerList.style.transform = 'translate(-' + step + '%)'
});

