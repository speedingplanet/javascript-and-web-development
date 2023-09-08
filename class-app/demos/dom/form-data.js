let form = document.querySelector('#address-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log('You submitted the form');

	let formDataObject = new FormData(form);

	let person = {};
	// FormData as iterable
	// ['firstName', 'Peter']
	// ['lastName', 'Parker']
	for (let keyValuePair of formDataObject) {
		let key = keyValuePair[0];
		let value = keyValuePair[1];

		console.log(`The field ${key} is set to "${value}".`);
		person[key] = value;
	}

	// Keys only
	for (let key of formDataObject.keys()) {
		console.log('Keys only:', key);
	}

	// Values only
	for (let value of formDataObject.values()) {
		console.log('Values only:', value);
	}

	// Object from entries
	let examplePerson = Object.fromEntries(formDataObject);
	console.log('Using fromEntries():', examplePerson);
});
