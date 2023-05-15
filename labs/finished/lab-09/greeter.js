/**
 *
 * @param {Student[]} students
 * @param {HTMLElement} destination
 */
// eslint-disable-next-line no-unused-vars
function renderStudentsAsTable(students, destination) {
	let table = document.createElement('table');
	table.classList.add('table', 'table-striped', 'table-hover');
	table.insertAdjacentHTML('beforeend', `
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
			</tr>
		</thead>
		<tbody></tbody>
	`);

	let tableBody = table.querySelector('tbody');
	for (let student of students) {
		tableBody.insertAdjacentHTML('beforeend', `
			<tr>
				<td>${student.firstName}</td><td>${student.lastName}</td>
			</tr>
		`);
	}

	destination.insertAdjacentElement('beforeend', table);
}

/**
 *
 * @param {string} url
 * @returns {Promise<Student[]>}
 */
async function fetchStudents(url) {
	try {
		let response = await fetch(url);
		if (response.ok) {
			let results = await response.json();
			return results;
		} else {
			throw Error(`Got ${response.status} when accessing ${url}`);
		}
	} catch (err) {
		console.error(`fetchStudents(): Error because ${err.message}`);
		throw err;
	}
}

let div = document.querySelector('#output');
let defaultGreeting = 'Hello... you...?';
div.textContent = defaultGreeting;

let form = document.querySelector('#user-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let data = new FormData(event.target);
	let firstName = data.get('first-name');
	let lastName = data.get('last-name');
	div.textContent = `Hello, ${firstName} ${lastName}!`;
});

let listContainer = document.querySelector('#students-list');
window.addEventListener('DOMContentLoaded', async () => {
	let students = await fetchStudents('http://localhost:8000/students');
	renderStudentsAsTable(students, listContainer);
});
