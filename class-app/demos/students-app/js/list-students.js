import { StudentsTable } from './StudentsTable';

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
	// eslint-disable-next-line no-unused-vars
	let studentsTable = new StudentsTable(students, 'output');
}

main();
