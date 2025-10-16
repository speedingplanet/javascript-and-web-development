//@ts-check
let employeeId = 1;

export class EmployeeV1 {
	/** @type {string | null} */
	firstName = null;
	/** @type {string | null} */
	lastName = null;
	employeeId = -1;
	salary = 50000;
	/** @type {String} */
	jobTitle = 'Associate';
	companyName = 'Sprockets and Cogs, Ltd.';

	/**
	 * @param {String} firstName
	 * @param {String} lastName
	 * @param {String} jobTitle
	 *
	 */
	constructor(firstName, lastName, jobTitle) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.jobTitle = jobTitle;
		this.employeeId = ++employeeId;
	}

	/*
	constructor(config = {}) {
		let thisConfig = {...defaultConfig, ...config}
		this.firstName = config.firstName;
		this.lastName = config.lastName;
		this.jobTitle = config.jobTitle;
		this.employeeId = ++employeeId;
	}
		*/

	getSalary() {
		return this.salary;
	}

	/**
	 * @param {number} salary
	 */
	setSalary(salary) {
		this.salary = salary;
		return true;
	}

	getJobTitle() {
		return this.jobTitle;
	}

	/**
	 * @param {string} jobTitle
	 */
	setJobTitle(jobTitle) {
		this.jobTitle = jobTitle;
		return true;
	}

	toString() {
		return `${this.jobTitle} ${this.firstName} ${this.lastName}`;
	}
}

let me = new EmployeeV1('John', 'Paxton', 'Big Cheese');
// let me = new EmployeeV1({ firstName: 'John', lastName: 'Paxton' });
me.salary = 100000000000000;
me.getSalary();
me.salary;

export class EmployeeV2 {
	// Private members
	/** @type {string | null} */
	#firstName = null;
	/** @type {string | null} */
	#lastName = null;
	#salary = 50000;
	#jobTitle = 'Associate';
	#employeeId = -1;

	// Static members
	static companyName = 'Sprockets and Cogs';
	static employeeIdSrc;

	// Static initializer
	static {
		// Imagine fetching and caching the latest incremental employeeId here
		this.employeeIdSrc = 1;
	}

	/**
	 * @param {String} firstName
	 * @param {String} lastName
	 * @param {String} jobTitle
	 *
	 */
	constructor(firstName, lastName, jobTitle) {
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#jobTitle = jobTitle;
		this.#employeeId = ++EmployeeV2.employeeIdSrc;
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	getFullName() {
		return `${this.getFirstName()} ${this.getLastName()}`;
	}

	getId() {
		return this.#employeeId;
	}

	// get [property] syntax
	// Runs when accessing emp.jobTitle property
	/**
	 * @type {String}
	 */
	get jobTitle() {
		return this.#jobTitle;
	}

	// set [property] syntax
	// Runs when changing emp.jobTitle property
	// e.g. emp.jobTitle = 'assistant vice president'
	/*
	set jobTitle(jobTitle) {
		this.#jobTitle = jobTitle;
	}
		*/

	get salary() {
		return this.#salary;
	}

	/**
	 * @param {number} inputSalary
	 */
	set salary(inputSalary) {
		if (this.#validateSalary(inputSalary)) {
			this.#salary = inputSalary;
		}
	}

	// Private method
	/**
	 * @param {number} salary
	 */
	#validateSalary(salary) {
		return typeof salary === 'number' && salary >= 0 && salary <= 100000;
	}

	toString() {
		return `${this.#jobTitle} ${this.getFirstName()} ${this.getLastName()}`;
	}
}

let meV2 = new EmployeeV2('John', 'Paxton', 'Associate');
console.log(meV2.jobTitle); // undefined

EmployeeV2.companyName = 'MathWorks';

// Error, jobTitle is read-only
// meV2.jobTitle = 'Senior Associate';
console.log(meV2.jobTitle);

export class Person {
	// Private members
	/** @type {string | null} */
	#firstName = null;
	/** @type {string | null} */
	#lastName = null;

	/**
	 * @param {string} firstName
	 * @param {string} lastName
	 */
	constructor(firstName, lastName) {
		this.#firstName = firstName;
		this.#lastName = lastName;
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	toString() {
		return `${this.getFirstName()} ${this.getLastName()}`;
	}
}

// Inheritance
export class EmployeeV3 extends Person {
	// Private members
	#salary = 50000;
	#jobTitle = 'Associate';
	#employeeId = -1;

	// Static members
	static companyName = 'Sprockets and Cogs';
	static employeeIdSrc;

	// Static initializer
	static {
		// Imagine fetching and caching the latest incremental employeeId here
		this.employeeIdSrc = 1;
	}

	/**
	 * @param {string} firstName
	 * @param {string} lastName
	 * @param {string} jobTitle
	 */
	constructor(firstName, lastName, jobTitle) {
		// Call the parent constructor
		// Note, cannot access `this` before calling `super()
		// Invokes the constructor of the base class
		super(firstName, lastName);
		this.#jobTitle = jobTitle;
		this.#employeeId = ++EmployeeV2.employeeIdSrc;
	}

	getId() {
		return this.#employeeId;
	}

	get jobTitle() {
		return this.#jobTitle;
	}

	set jobTitle(jobTitle) {
		this.#jobTitle = jobTitle;
	}

	get salary() {
		return this.#salary;
	}

	set salary(salary) {
		if (this.#validateSalary(salary)) {
			this.#salary = salary;
		}
	}

	/** @param {number} salary */
	#validateSalary(salary) {
		return typeof salary === 'number' && salary >= 0 && salary <= 100000;
	}

	// Overrides the parent version, and uses it as well!
	toString() {
		return `${this.#jobTitle} ${super.toString()}`;
	}
}
