let compositionIcon = [...document.getElementsByClassName('composition__icon')];
let compositionList = [...document.querySelectorAll('.composition__list')];


compositionIcon.forEach(function callback(value, item, compositionIcon){ 
							value.addEventListener('click', function(e) {
								compositionList.forEach(function call(currentValue, index, compositionList){
									if(item==index){
										currentValue.classList.toggle('composition__open_list')
									};
								})
							});
						})
		

	

