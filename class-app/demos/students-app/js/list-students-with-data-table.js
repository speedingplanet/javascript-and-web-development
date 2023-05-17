import { DataTable } from './DataTable';

async function getData(url) {
	try {
		let response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Bad HTTP status code: ${response.status}`);
		}

		return await response.json();
	} catch (err) {
		console.error(err);
		throw err;
	}
}

async function main() {
	let students = await getData('http://localhost:8000/students');
	let fields = new Map();
	fields.set('firstName', 'First Name');
	fields.set('lastName', 'Last Name');
	fields.set('city', 'City');
	fields.set('province', 'Province');

	// eslint-disable-next-line no-unused-vars
	let studentsTable = new DataTable(students, fields, 'output');
}

main();
