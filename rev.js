let reviewsDesc = document.getElementsByClassName('reviews__desc');
let reviewsUserInfo = document.getElementsByClassName('reviews__user_info');
let reviewsUserOpen = document.getElementsByClassName('reviews__user_open');
let opacityRev = document.getElementsByClassName('opacity_rev');



Array.from(reviewsDesc).forEach(function(item, i, reviewsDesc){
	item.addEventListener('click', function(e) {
		for(let j = 0; j < reviewsUserInfo.length; j++){
			if(i == j){
				if(reviewsUserOpen.length > 0 && reviewsUserOpen[0] !== reviewsUserInfo[i]){
					reviewsUserOpen[0].classList.remove('reviews__user_open');
					opacityRev[0].classList.remove('opacity_rev');
				} 	reviewsUserInfo[i].classList.toggle('reviews__user_open')
				 	setTimeout(function (){
				 		reviewsUserInfo[i].classList.toggle('opacity_rev')
				 	}, 30)
			}
		}
	});
})