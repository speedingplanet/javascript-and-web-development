/* eslint-disable no-unused-vars */

// Typical function declaration
// ONLY function declarations are hoisted (see below)
function add(x, y) {
	return x + y;
}

// Function expression (not hoisted)
const expressionFunction = function () {
	console.log('This is a function expression');
};

// Arrow function (see arrow-functions.js for more)
// (also not hoisted)
const arrowFunction = () => {
	console.log('This is an arrow function');
};

hoistedAdd(); // works
// notHoistedAdd(); // fails

// Function declaration: hoisted
function hoistedAdd() {
	return 2 + 2;
}

// Function expression: not hoisted
const notHoistedAdd = function () {
	return 2 + 2;
};

// Also not hoisted
const notHoistedArrowAdd = (x, y) => x + y;

// Function references can be copied
const otherAdd = add;
otherAdd(2, 5); // returns 7

// JavaScript does not enforce function signatures
// Default parameter values
function addDefaults(x = 0, y = 10) {
	return x + y;
}

// Before we had default values for parameters, this is how we
// checked for empty/undefined parameters
function addDefaultsOld(x, y) {
	if (x === undefined) x = 0;
	if (y === undefined) y = 10;
	return x + y;
}

addDefaults(5); // 15

// Function signatures are not enforced in JavaScript
// Allowed
addDefaults(5, 7); // 12

// If we used @ts-check, this line would have an error because of the
// mismatching signatures
addDefaults(1, 2, 3, 4, 5); // 3
addDefaults(undefined, 5); // 5
addDefaults(1); // 11
addDefaults(); // 10

// Works
addRest(1, 2, 3, 4, 5);
addRest(10, undefined, 4, 8, 12);

// Rest parameters
// The "rest" of the values
function addRest(x = 0, y = 0, ...otherParams) {
	console.log('Other params: ', otherParams);
	let total = 0;
	for (const x of otherParams) {
		total = total + x;
	}
	return x + y + total;
}

// Works
addRest(1, 2, 3, 4, 5);
addRest(10, undefined, 4, 8, 12);

function getAllParameters(...params) {
	// params is an array of all arguments
	for (let param of params) {
		console.log(param);
	}
}

getAllParameters(1, 2, 3);
getAllParameters('John', 30, true, ['a', 'b', 'c']);

// config bag pattern in JS
function addValues(
	config = {
		a: 0,
		b: 0,
		c: 0,
	}
) {
	return config.a + config.b + config.c;
}

// Three cases
// betterAddValues() -> returns 6; config defaults to defaultValues
// betterAddValues({b: 5}) -> returns 9, retaining a:1 and c:3
//                            from defaultValues thanks to Object.assign
// betterAddValues({a: 4, b: 5, c: 6}) -> returns 15, normally
let defaultValues = {
	a: 1,
	b: 2,
	c: 3,
};
function betterAddValues(config = defaultValues) {
	// Object.assign(target, merge1, merge2, ...)
	// let args = Object.assign({}, defaultValues, config);

	// Spread operator
	let args = {
		...defaultValues,
		...config,
	};
	return args.a + args.b + args.c;
}

// config bag pattern ensuring no extra arguments
function addValuesLoop(config) {
	let total = 0;
	for (const key in config) {
		if (['a', 'b', 'c'].includes(key)) {
			total += config[key];
		}
	}
	return total;
}

const values = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
};

addValues(values);

// Functions can return functions
function createCustomGreeter(name) {
	return function () {
		console.log(`Greetings, ${name}!`);
	};
}

const customGreeter = createCustomGreeter('John');
customGreeter();

// Assume operation is a function that only takes two arguments
function calculator(operation, ...stack) {
	let total = 0;
	for (let value of stack) {
		total = operation(total, value);
	}

	return total;
}

const result = calculator(add, 1, 2, 3, 4, 5); // returns 15

// Real-world example of passing a function to another function
addEventListener('click', function () {
	console.log('You clicked on the button!');
});

// JavaScript only has manual-style overloading, not as a language feature
function overloaded(x, y) {
	if (typeof x === 'string') {
		// do this
	} else if (typeof x === 'number') {
		// do something else
	}
}

// Can you return multiple values in JavaScript? No...
// But with destructuring, we can make it feel that way

// This function returns an array where the two values have been added,
// subtracted, multiplied and divided.
function opAll(x, y) {
	return [x + y, x - y, x * y, x / y];
}

// Using array destructuring, we can capture the output into individual variables
const [sum, difference, product, dividend] = opAll(5, 10);
