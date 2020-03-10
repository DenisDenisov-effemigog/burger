let triangleIcon = document.querySelectorAll('.triangle__icon'),
	triangleIconRotate = document.getElementsByClassName('triangle__icon_rotate');
let teamName = document.getElementsByClassName('team__name');
let teamInfo = document.querySelectorAll('.team__info');
	teamInfoActive = document.getElementsByClassName('team__info_open');
let opacityTeam = document.getElementsByClassName('opacity_team')


Array.from(teamName).forEach(function (item, v, teamName){
	item.addEventListener('click', function (e){

	for(let i = 0; i < triangleIcon.length; i++){
		if(i == v){
			if (triangleIconRotate.length > 0 && triangleIconRotate[0] !== triangleIcon[i]){
		          triangleIconRotate[0].classList.remove('triangle__icon_rotate');
		      }
		    	triangleIcon[i].classList.toggle('triangle__icon_rotate');
		}
	}

	for(let j = 0; j < teamInfo.length; j++){
		if(j == v){
			if (teamInfoActive.length > 0 && teamInfoActive[0] !== teamInfo[j]){
		          teamInfoActive[0].classList.remove('team__info_open');
		          opacityTeam[0].classList.remove('opacity_team');
		      }
		    	teamInfo[j].classList.toggle('team__info_open');
		    	setTimeout(function (){
				 		teamInfo[j].classList.toggle('opacity_team')
				 	}, 30)
		}
	}

	})
})
