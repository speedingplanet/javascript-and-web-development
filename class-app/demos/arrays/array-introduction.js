/* eslint-disable no-unused-vars */

// ============================================================================
// Declaring arrays
// ============================================================================

// Create an array
let states = ['NJ', 'MA', 'CA', 'IL', 'FL'];

// If you know your array is going to be large, pre-size it
const largeArray = new Array(10000);

// Create an array from a string
let values = '1, 2, 3, 4, 5, 6';
let numberValues = values.split(', ');

// Turn an array back into a string
let mergedStates = states.join(' | ');

// How big is this array?
console.log(states.length);

// ============================================================================
// Modifying arrays
// ============================================================================

// Assign directly to an index.
states[3] = 'AK';

// Try not to do this
// states[20] = 'HI';

// Add to the end of the array
states.push('WA');

// Multiple values, too
states.push('TX', 'CO');

// Not what you'd expect: pushes the entire array as one item!
states.push(['OR', 'WA', 'ID']);

// Better, "spreads" the array out into individual items
// ... (three dots, or an ellipsis) is the spread operator in JavaScript
states.push(...['OR', 'WA', 'ID']);

// states is now one element shorter, taken off the back/end of the array
const lastElement = states.pop();

// states is another element shorter, taken off the front/start of the array
const firstElement = states.shift();

// Add to the start or front of the array
states.unshift('CT');
states.unshift('ME', 'NH', 'VT');

// states.splice(start, length?, replacement?);
// Delete two elements
states.splice(1, 2);

// Insert three elements at position 2
states.splice(2, 0, 'AR', 'AZ', 'CO');

// Replace the element at position 4
states.splice(4, 1, 'DE');

// Get a slice of the array
states.slice(2);
states.slice(2, 4);
states.slice(1, -2);

// ============================================================================
// Copying/merging arrays
// ============================================================================

// Easy way to create a shallow copy of an array
let copiedStates = [...states];

// You can include multiple arrays, so merging arrays gets easier
let easternStates = ['NJ', 'NY', 'MA'];
let westernStates = ['WA', 'OR', 'CA'];
let allStates = [...easternStates, ...westernStates];

// Unwind/spread an array into arguments
easternStates.push(...westernStates);

// ============================================================================
// Find items in an array
// See also array-iteration.js, find and filter
// ============================================================================

// Returns the index of the matching element, or -1 if not found
// searches left to right
let firstMassIndex = states.indexOf('MA');

// Returns the index of the matching element, or -1 if not found
// searches right to left
let lastMassIndex = states.lastIndexOf('MA');

// Returns a boolean for found or not
let foundMass = states.includes('MA');

// ============================================================================
// Sort items in an array
// ============================================================================

// Order the elements in an array alphabetically, ascending A -> Z
// (Technically converts all values to strings and then compares them by UTF-16 values)
// MODIFIES THE ARRAY IN PLACE!
states.sort();

// Use the array copying technique from above to prevent this
let sortedStates = [...states].sort();

// Create a copy, sort it, reverse it
const reversesortedStates = [...states].sort().reverse();

// Easy numeric sort
states.sort((a, b) => b - a);

// Custom sorting
const people = [
	{
		firstName: 'John',
		lastName: 'Paxton',
		state: 'NJ',
	},
	{
		firstName: 'Dann',
		lastName: 'Russo',
		state: 'MA',
	},
	{
		firstName: 'Andreina',
		lastName: 'Castillo',
		state: 'NJ',
	},
];

/*
 * Sort alphabetically by lastName
 * Array.prototype.sort((a, b) => number)
 * number > 0 -> b is sorted before a
 * number < 0 -> a is sorted before b
 * number === 0 -> keep current ordering
 *
 * String.prototype.localeCompare() does this for us
 *
*/
people.sort((p1, p2) => p1.lastName.localeCompare(p2.lastName));
