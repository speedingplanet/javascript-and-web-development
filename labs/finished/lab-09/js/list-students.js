/* eslint-disable no-unused-vars */
/**
 * @typedef { import("../../data/data.d.ts").Student } Student
 *
 * @param {Student[]} students
 * @returns {HTMLTableElement}
 */
function buildTable(students) {
	// Create elements
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

	// Set up table structure
	table.append(thead, tbody);

	thead.insertAdjacentHTML('beforeend', `
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>City</th>
			<th>Province</th>
		</tr>
	`);

	for (let student of students) {
		tbody.insertAdjacentHTML('beforeend', `
			<tr>
				<td>${student.firstName}</td>
				<td>${student.lastName}</td>
				<td>${student.city}</td>
				<td>${student.province}</td>
			</tr>
		`);
	}

	table.classList.add('table', 'table-striped');
	return table;
}

/**
 *
 * getData()
 *
 * @param {string} url
 * @returns {Student[]}
 *
 */
async function getData(url) {
	try {
		let response = await fetch(url);
		if (response.ok) {
			// Successful request, good response
			let results = await response.json();
			return results;
		} else {
			// Some sort of bad response, status code >=400
			throw new Error(`Bad response: ${response.status} [${response.statusText}]`);
		}
	} catch (error) {
		console.error('Unable to fetch students because ', error);

		// Hand the error to the caller, either as-is or repackaged
		// throw new Error('getData failed');
		throw error;
	}
}

function getDataAsPromise(url) {
	return fetch(url)
		.then(response => {
			if (response.ok) {
			// Successful request, good response
				return response.json();
			} else {
			// Some sort of bad response, status code >=400
				throw new Error(`Bad response: ${response.status} [${response.statusText}]`);
			}
		})
		.catch(error => {
			console.error('Unable to fetch students because ', error);
			throw error;
		});
}

async function main() {
	let output = document.querySelector('#output');
	try {
		let students = await getData('http://localhost:8000/students');
		let table = buildTable(students);
		output.replaceChildren(table);
	} catch (error) {
		console.error('main(): Error fetching data');
	}
}

function mainWithPromises() {
	let output = document.querySelector('#output');

	getDataAsPromise('http://localhost:8000/students')
		.then(students => {
			let table = buildTable(students);
			output.replaceChildren(table);
		})
		.catch(error => {
			console.error('main(): Error fetching data:', error);
		});
}

// main();
mainWithPromises();
