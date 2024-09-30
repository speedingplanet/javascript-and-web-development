class Car {
	// Public members
	make = '';
	model = '';

	// Private members
	#speed = 0;
	// eslint-disable-next-line no-unused-private-class-members
	#odometer = 0;

	constructor(config = {}) {
		// Could move this out of the class so it's not always re-declared:
		let publicKeys = ['make', 'model'];
		for (let key of publicKeys) {
			this[key] = config[key];
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

	toString() {
		return this.make + ' ' + this.model;
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
