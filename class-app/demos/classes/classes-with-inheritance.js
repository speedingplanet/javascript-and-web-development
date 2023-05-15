class Vehicle {
	make = '';
	model = '';

	constructor(config) {
		let publicKeys = ['make', 'model'];
		for (let key of publicKeys) {
			if (config[key]) this[key] = config[key];
		}
	}

	getMake() {
		return this.make;
	}

	getModel() {
		return this.model;
	}

	toString() {
		return this.make + ' ' + this.model;
	}
}

class Car extends Vehicle {
	// Public members
	color = 'red';
	year = 2022;

	// Private members
	#odometer = 0;
	#speed = 0;

	constructor(config = {}) {
		super(config);
		let publicKeys = ['color', 'year'];
		for (let key of publicKeys) {
			if (config[key]) this[key] = config[key];
		}

		if (config.odometer) {
			this.#odometer = config.odometer;
		}
	}

	// Public methods
	accelerate(amount) {
		this.#setSpeed(amount);
	}

	getSpeed() {
		return this.#speed;
	}

	// Private method
	#setSpeed(amount) {
		if (isNaN(amount)) return;

		this.#speed += amount;
	}

	// Overrides the parent version
	toString() {
		return `${super.toString()} [${this.#odometer} miles]`;
	}
}

const honda = new Car({
	make: 'Honda',
	model: 'Civic',
	odometer: 50000,
});
console.log('honda: ', honda);
console.log('honda: ' + honda);

const defaultCar = new Car();
console.log('defaultCar: ', defaultCar);
