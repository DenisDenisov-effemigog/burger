let accordionTitle = document.getElementsByClassName('accordion__title');
let accordionText = document.getElementsByClassName('accordion__text');
let accordionTextOpen = document.getElementsByClassName('accordion__text_open');
let opacity = document.getElementsByClassName('opacity_acc');




Array.from(accordionTitle).forEach(function(item, i, accordionTitle){
	item.addEventListener('click', function(e) {
		for(let j = 0; j < accordionText.length; j++){
			if(i == j){
				if(accordionTextOpen.length > 0 && accordionTextOpen[0] !== accordionText[i]){
					accordionTextOpen[0].classList.remove('accordion__text_open');
					opacity[0].classList.remove('opacity_acc');
				} 	accordionText[i].classList.toggle('accordion__text_open')
				 	setTimeout(function (){
				 		accordionText[i].classList.toggle('opacity_acc')
				 	}, 30)
			}
		}
	});
})