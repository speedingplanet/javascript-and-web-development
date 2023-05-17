import { students } from '../../data/all-data-typed';

/**
 * @typedef { import("../../data/data.d.ts").Student } Student
 *
 * @param {Student[]} students
 */
function buildTable(students) {
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
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

async function main() {
	let output = document.querySelector('#output');
	let table = buildTable(students);
	output.replaceChildren(table);
}

main();
