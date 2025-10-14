let form = document.querySelector('#address-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log('You submitted the form');

	let formDataObject = new FormData(form);

	// FormData as iterable
	for (let keyValuePair of formDataObject) {
		let key = keyValuePair[0];
		let value = keyValuePair[1];

		console.log(`The field ${key} is set to "${value}".`);
	}

	// Keys only
	for (let key of formDataObject.keys()) {
		console.log('Keys only:', key);
	}

	// Values only
	for (let value of formDataObject.values()) {
		console.log('Values only:', value);
	}
});
