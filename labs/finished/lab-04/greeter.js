// Get a reference to the element that will emit the event
let button = document.querySelector('#greet-button'); 

// Write an event handler function
function clickHandler() {
	let outputElement = document.querySelector('#output');
	let inputField = document.querySelector('#greet-name');
	if (!inputField.value.trim()) { // Handles excess or even all whitespace values
		outputElement.textContent = 'Hello, mysterious user!';
	} else {
		outputElement.textContent = `Hello, ${inputField.value}`;
	}
}

// Attach the event handler to the element, specifying the event name
// addEventListener(eventName, eventHandlerFunction)
button.addEventListener('click', clickHandler);
