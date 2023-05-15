let div = document.querySelector('#output');
let defaultGreeting = 'Hello... you...?';
div.textContent = defaultGreeting;

let form = document.querySelector('#user-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let data = new FormData(event.target);
	let firstName = data.get('first-name');
	let lastName = data.get('last-name');
	div.textContent = `Hello, ${firstName} ${lastName}!`;
});
