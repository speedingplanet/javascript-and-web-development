let url = 'http://localhost:8000/students';

async function getData(url) {
	try {
		let response = await fetch(url);
		if (response.ok) {
			return await response.json();
		} else {
			throw new Error(`Unexpected status code: ${response.status}`);
		}
	} catch (err) {
		console.error(err.message);
		// Throw it downstream to any other consumers
		throw err;
	}
}

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
	let students = await getData(url);
	let table = buildTable(students);
	output.replaceChildren(table);
}

main();
