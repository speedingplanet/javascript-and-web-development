/* eslint-disable no-unused-vars */
const states = ['NJ', 'MA', 'CA', 'IL', 'FL'];

// Shallow copy
const copiedStates = [...states];

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
];

// References in the array are the same!
let copiedPeople = [...people];

// Destructuring some elements
let [first, second] = people;

let listElements = [
	document.createElement('li'),
	document.createElement('li'),
	document.createElement('li'),
	document.createElement('li'),
];

let list = document.createElement('ul');
list.append(...listElements);
