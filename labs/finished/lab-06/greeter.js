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

// Get a reference to the element that will emit the event
let button = document.querySelector('#greet-button');
let outputElement = document.querySelector('#output');
let inputField = document.querySelector('#greet-name');

button.addEventListener('click', () => clickHandler(outputElement, inputField));
inputField.addEventListener('input', (event) => inputHandler(event, button));

/*
// Alternative approach
// Using bind to generate functions with the right arguments
let boundClickHander = clickHandler.bind(null, outputElement, inputField);
let boundInputHandler = inputHandler.bind(null, button);

button.addEventListener('click', boundClickHander);
inputField.addEventListener('input', boundInputHandler);
*/

button.disabled = true;
