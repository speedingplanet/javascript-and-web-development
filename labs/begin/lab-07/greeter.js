export function clickHandler(outputElement, inputField) {
	if (!inputField.value.trim()) { // Handles excess or even all whitespace values
		outputElement.textContent = 'Hello, mysterious user!';
	} else {
		outputElement.textContent = `Hello, ${inputField.value}`;
	}
}

export function inputHandler(button, event) {
	if (event.target.value.trim()) {
		button.disabled = false;
	} else {
		button.disabled = true;
	}
}

let button = document.querySelector('#greet-button');
let outputElement = document.querySelector('#output');
let inputField = document.querySelector('#greet-name');

button.addEventListener('click', () => clickHandler(outputElement, inputField));
inputField.addEventListener('input', (event) => inputHandler(event, button));

button.disabled = true;
