let div = document.querySelector('#output');
let button = document.querySelector('#btn-greet');

button.addEventListener('click', () => {
	div.textContent = 'Hello, John';
});
