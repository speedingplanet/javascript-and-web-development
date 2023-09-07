// Write an event handler function
/*
function clickHandler(inputField, outputElement) {
	if (!inputField.value.trim()) { // Handles excess or even all whitespace values
		outputElement.textContent = 'Hello, mysterious user!';
	} else {
		outputElement.textContent = `Hello, ${inputField.value}`;
	}
}
*/

// Handling the enabling/disabling of the "Say hello!" button
function inputHandler(event, outputElement) {
	if (event.target.value.trim().length > 1) {
		outputElement.textContent = `Hello, ${event.target.value}`;
	} else {
		outputElement.textContent = 'Hello, mysterious user!';
	}
}

// Get references to important elements
// let button = document.querySelector('#greet-button');
let outputElement = document.querySelector('#output');
let inputField = document.querySelector('#greet-name');

inputField.addEventListener('input', (e) => inputHandler(e, outputElement));
