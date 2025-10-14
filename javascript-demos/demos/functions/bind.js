/* eslint-disable no-unused-vars */
// Binding arguments
function greetFullName(firstName, lastName) {
	console.log(`Hello, ${firstName} ${lastName}`);
}

greetFullName('Navreet', 'Kaur');

let everyoneNamedGeorge = greetFullName.bind(null, 'George');

everyoneNamedGeorge('Smith');

// Binding context
let person1 = {
	firstName: 'John',
	lastName: 'Paxton',
};

let person2 = {
	firstName: 'Ophelia',
	lastName: 'Montoya',
};

// Running this right now, it will pick up whatever its current context is
function printName() {
	return this.firstName + ' ' + this.lastName;
}

// Prints nothing (unless there are global variables for firstName and lastName)
printName();

let p1PrintName = printName.bind(person1);

// Should print out 'John Paxton'
p1PrintName();

let p2PrintName = printName.bind(person2);

// Should print 'Ophelia Montoya'
p2PrintName();

class DeepContext {
	value = 'instance';

	// Fails because the context of 'this' in innerFunction is missing
	outerFunctionFails() {
		console.log('outerFunctionFails: this.value is:', this.value);

		function innerFunction() {
			console.log('\tinnerFunction: this.value is:', this.value);
		}

		console.log('\tCalling innerFunction, which will have an error.');
		innerFunction();
	}

	outerFunctionArrow() {
		console.log('outerFunctionArrow: this.value is:', this.value);

		let arrowFunctionsAreAwesome = () => {
			console.log('\tarrowFunctionsAreAwesome: this.value is:', this.value);
		};

		console.log('\tCalling an arrow function first (it works!)');
		arrowFunctionsAreAwesome();
	}

	outerFunctionBind() {
		console.log('outerFunctionBind: this.value is:', this.value);

		function innerFunction() {
			console.log('\tinnerFunction: this.value is:', this.value);
		}
		let boundInnerFunction = innerFunction.bind(this);

		console.log('\tCalling innerFunction, bound to the correct context, should succeed');
		boundInnerFunction();
	}

	outerFunctionClosure() {
		console.log('outerFunctionArrow: this.value is:', this.value);

		// Sometimes seen as
		// let that = this;
		let self = this;
		function innerFunction() {
			console.log('\tinnerFunction: this.value is:', self.value);
		}

		console.log('\tCalling innerFunction, using the outer context, should succeed');
		innerFunction();
	}
}
