let div = document.querySelector('#output');
let button = document.querySelector('#btn-greet');

button.addEventListener('click', () => {
	let formField = document.querySelector('#user-name');
	div.textContent = `Greetings, ${formField.value}`;
});
