// Get references to important elements
let button = document.querySelector('#greet-button');
let outputElement = document.querySelector('#output');
let inputField = document.querySelector('#greet-name');

// Write an event handler function
function clickHandler(inputField, outputElement) {
	if (!inputField.value.trim()) { // Handles excess or even all whitespace values
		outputElement.textContent = 'Hello, mysterious user!';
	} else {
		outputElement.textContent = `Hello, ${inputField.value}`;
	}
}

// Handling the enabling/disabling of the "Say hello!" button
function handleInput(event, button) {
	if (event.target.value.trim()) {
		button.disabled = false;
	} else {
		button.disabled = true;
	}
}

button.addEventListener('click', () => clickHandler(inputField, outputElement));
inputField.addEventListener('input', (e) => handleInput(e, button));
