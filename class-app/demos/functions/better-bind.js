let button = document.querySelector('#click-button');
let logger = {
	count: 0,
	// Sets count on the button
	updateCountDeclaration() {
		this.count++;
	},

	// Same
	updateCountExpression: function () {
		this.count++;
	},

	// Sets count on the global object (!)
	updateCountArrow: () => {
		this.count++;
	},
};

// Problems (whether *Declaration, *Expression, or *Arrow)
// button.addEventListener('click', logger.updateCountDeclaration);

// Solution, still doesn't work with the arrow function, though
button.addEventListener('click', logger.updateCountDeclaration.bind(logger));

// Solution, use the arrow function OUTSIDE the call
// button.addEventListener('click', () => logger.updateCountDeclaration());

// Print the current count
button.addEventListener('click', () => {
	let output = document.querySelector('#output');
	output.textContent = `Click count: ${logger.count}`;
});
