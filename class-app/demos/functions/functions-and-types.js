// @ts-check
/* eslint-disable no-unused-vars */
// How can I make sure x and y are numbers?
function add(x, y) {
	return x + y;
}

// JavaScript style; **IS** a runtime check
function addJSTyped(x, y) {
	if (typeof x !== 'number') throw Error('x is not a number');
	if (typeof y !== 'number') throw Error('y is not a number');

	return x + y;
}

// JSDoc style: requires VS Code or an IDE that understands JSDoc
// In VS Code, you also require "// @ts-check" at the top of the file
// **ONLY** an in-editor check, no effect on runtime

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function addJSDocTyped(x, y) {
	return x + y;

	// Error here because this would return a string
	// return x + y + 'foo';
}

// Raises an error, **ONLY** in VS Code, a browser or Node would still
// execute this code
// addJSDocTyped('1', 2);

/**
 *
 * @param {string} x
 * @param {string} y
 * @returns {string}
 */
function concatStrings(x, y) {
	return x + y;
}
