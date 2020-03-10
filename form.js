let myForm = document.querySelector('#form');
let formBtn = document.querySelector('#formBtn');
let formModal = document.querySelector('#modal');

formBtn.addEventListener('click', function(e) {
	e.preventDefault();
	
	if(validateForm(myForm)){

		let data = {
			name: myForm.elements.name.value,
			phone: myForm.elements.phone.value,
			street: myForm.elements.street.value,
			home: myForm.elements.home.value,
			body: myForm.elements.body.value,
			apartment: myForm.elements.apartment.value,
			floor: myForm.elements.floor.value,
			comm: myForm.elements.comm.value,
			form: myForm.elements.form.value,
			check: myForm.elements.phoneCheck.checked
		}

		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost:8080/src/data/data.txt');	
		xhr.send(JSON.stringify(data));

	
	}
});

function validateForm(form) {
	let valid = true;

	if(!validateField(form.elements.name)) {
		valid = false;
	}

	if(!validateField(form.elements.phone)) {
		valid = false;
	}

	if(!validateField(form.elements.comm)) {
		valid = false;
	}


	return valid;
}

function validateField(field) {
	field.nextElementSibling.textContent = field.validationMessage;
	return field.checkValidity();

	
}
