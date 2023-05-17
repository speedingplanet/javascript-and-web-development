// @ts-check
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

	// If we're in type="module", then throws an error
	// If not, updates the window/globalThis object (!)
	updateCountArrow: () => {
		this.count++;
	},
};

// Problems (whether *Declaration, *Expression, or *Arrow)
// button?.addEventListener('click', logger.updateCountArrow);

// Solution, still doesn't work with the arrow function, though
let boundUpdater = logger.updateCountDeclaration.bind(logger);
button?.addEventListener('click', boundUpdater);

// Solution, use the arrow function OUTSIDE the call
// button?.addEventListener('click', (e1, e2) => logger.updateCountDeclaration());

// Print the current count
button?.addEventListener('click', () => {
	let output = document.querySelector('#output');
	if (output !== null) {
		output.textContent = `Click count: ${logger.count}`;
	}
});
