let obj = {
	value: 10,
};

function getValue() {
	console.log(`What's the value of 'this': ${this}`);
	if (this === undefined) {
		return undefined;
	} else if ('value' in this) {
		return this.value;
	} else {
		return 'not found';
	}
}

let objGetValue = getValue.bind(obj);

let obj2 = {
	value: 20,
};

let obj2GetValue = getValue.bind(obj2);

let obj3 = {
	whatever: 30,
};

let obj3GetValue = getValue.bind(obj3);

console.log(`Calling objGetValue(): ${objGetValue()}`);
console.log(`Calling obj2GetValue(): ${obj2GetValue()}`);
console.log(`Calling obj3GetValue(): ${obj3GetValue()}`);

function getAverageMileage(currentYear = 1990, originalYear = 1980, mileage) {
	let yearsOld = currentYear - originalYear;
	return mileage / yearsOld;
}

/*
 bind() sort of returns this:
 function getAverageMileage2023(originalYear, mileage) {
	return getAverageMileage(2023, originalYear, mileage);
 }
*/

// Use 'null' as the first argument because we are not binding to a particular context
// We are only binding arguments to the function
let getAverageMileage2023 = getAverageMileage.bind(null, 2023);
let getAverageMileageFrom2000To2010 = getAverageMileage.bind(null, 2010, 2000);

let car = {
	make: 'Honda',
	model: 'Civic',
	year: 2015,
	mileage: 75000,
};

console.log(`Average mileage for my car: ${getAverageMileage2023(car.year, car.mileage)}`);
console.log(`Average mileage for my car: ${getAverageMileageFrom2000To2010(car.mileage)}`);

// console.log(`My car's mileage: ${car.getMileage()}`);

/*

function getAverageMileageFromContext() {
	let today = new Date();
	let currentYear = today.getFullYear();
	let yearsOld = currentYear - this.year;
	return this.mileage / yearsOld;
}

let carGetAverageMileage = getAverageMileage.bind(car);

// console.log(`The average mileage for my car is ${getAverageMileage(car.year, car.mileage)}`);
*/
