/* eslint-disable no-unused-vars */
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
	}

	toString() {
		return this.make + ' ' + this.model;
	}
}

let civic = new Car('Honda', 'Civic');
console.log(`My car is a ${civic}`);

// Change an existing instance property
civic.model = 'Accord';
console.log(`My car is a ${civic}`);

// Add an instance property
civic.color = 'red';
console.log(`My car is a ${civic.color} ${civic}`);

// Add a class property
Car.defaultVin = 1;
console.log('Car vehicle id number:', Car.defaultVin);

// Not available on the instance
console.log('Civic vehicle id number:', civic.defaultVin);

// Adding a property to the prototype makes it available to
// all instances
Car.prototype.engine = 'V4';
console.log(`My car's engine is a ${civic.engine}.`);

let otherCar = new Car('Ford', 'F-150');
console.log(`My other car's engine is a ${otherCar.engine}.`);

console.log('Changing the Civic\'s engine...');
civic.engine = 'V6';
console.log(`My ${civic}'s engine is a ${civic.engine}.`);
console.log(`My ${otherCar}'s engine is a ${otherCar.engine}.`);

Car.prototype.getMake = function () {
	return this.make;
};

console.log(`My car's make: ${civic.getMake()}`);
console.log(`My other car's make: ${otherCar.getMake()}`);

class Food {
	edible = true;
}

class Fruit extends Food {
	sweet = true;
}
