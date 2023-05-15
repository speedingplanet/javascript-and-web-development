let div = document.querySelector('#output');
let defaultGreeting = 'Hello... you...?';
div.textContent = defaultGreeting;

let formField = document.querySelector('#user-name');

formField.addEventListener('input', (event) => {
	if (event.target.value && event.target.value.length > 1) {
		div.textContent = `Hello, ${event.target.value}`;
	} else {
		div.textContent = defaultGreeting;
	}
});
