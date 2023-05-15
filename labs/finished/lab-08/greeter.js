import { students } from '../data/all-data-typed';

/**
 *
 * @typedef {import("../data/data").Student} Student
 *
 * @param {Student[]} students
 * @param {HTMLElement} destination
 */
function renderStudents(students, destination) {
	let list = document.createElement('ul');
	for (let student of students) {
		list.insertAdjacentHTML('beforeend', `<li>${student.firstName} ${student.lastName}</li>`);
	}

	destination.insertAdjacentElement('beforeend', list);
}

/**
 *
 * Challenge version!
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
window.addEventListener('DOMContentLoaded', () => renderStudents(students, listContainer));
// window.addEventListener('DOMContentLoaded', () => renderStudentsAsTable(students, listContainer));
