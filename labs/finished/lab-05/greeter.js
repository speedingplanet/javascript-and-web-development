let div = document.querySelector('#output');
let button = document.querySelector('#btn-greet');
button.disabled = true;

let formField = document.querySelector('#user-name');
formField.addEventListener('input', (event) => {
	if (!event.target.value) {
		button.disabled = true;
	} else {
		button.disabled = false;
	}
});

button.addEventListener('click', () => {
	div.textContent = `Greetings, ${formField.value}`;
});
