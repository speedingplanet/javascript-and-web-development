class Car {
	// Public members
	make = '';
	model = '';

	// Private members
	#odometer = 0;
	#speed = 0;

	constructor(make, model, odometer) {
		this.make = make;
		this.model = model;
		this.#odometer = odometer;
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

const honda = new Car('Honda', 'Civic', 50000);
console.log('honda: ', honda);
console.log('honda: ' + honda);

const defaultCar = new Car();
console.log('defaultCar: ', defaultCar);
