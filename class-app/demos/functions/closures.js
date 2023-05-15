/* eslint-disable no-unused-vars */

let x = 10;

function printX() {
	console.log(`x is ${x}`);
}

printX();

class ClosureOne {
	instanceVar = 'instanceVar';

	printInstanceVar() {
		console.log(`instanceVar is ${this.instanceVar}`);
	}
}

function outerFunction() {
	console.log('in outerFunction');
	let outerValue = 'outerValue';
	let callbackFunction = function () {
		console.log('in callbackFunction');
		console.log(`outerValue is ${outerValue}`);
	};

	return callbackFunction;
}

console.log('Calling outerFunction()');
let cb = outerFunction();

console.log('Calling cb()');
cb();

// eslint-disable-next-line no-undef
console.log('Outside cb, trying to access outerValue: ', outerValue);

function privateCounter() {
	let x = 0;

	let increment = function () {
		x = x + 1;
		return x;
	};

	return increment;
}

let incrementer = privateCounter();
let outerX = incrementer();
outerX = incrementer();
outerX = incrementer();
outerX = incrementer();
console.log(`x is currently ${outerX}`);

class Visibility {
	x = 10;
	#y = 20;
}

let v1 = new Visibility();
console.log('x=' + v1.x);
console.log('y=' + v1.y);
