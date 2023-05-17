function buildTable(students) {
	let table = document.createElement('table');
	let tbody = document.createElement('tbody');
	let thead = document.createElement('thead');

	thead.insertAdjacentHTML('beforeend', `
	<tr>
		<th>First Name</th>
		<th>Last Name</th>
		<th>City</th>
		<th>Province</th>
	</tr>
	`);

	table.classList.add('table', 'table-striped', 'table-hover');

	for (let student of students) {
		let tableRow = document.createElement('tr');
		tableRow.insertAdjacentHTML('beforeend', `
			<td>${student.firstName}</td>
			<td>${student.lastName}</td>
			<td style="width:25%">${student.city}</td>
			<td>${student.province}</td>
		`);

		tbody.appendChild(tableRow);
		/*
		tableRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
		tableRow.insertAdjacentHTML('beforeend', `<td>${student.lastName}</td>`);
		tableRow.insertAdjacentHTML('beforeend', `<td>${student.city}</td>`);
		tableRow.insertAdjacentHTML('beforeend', `<td>${student.province}</td>`);
		*/
	}
	table.append(thead, tbody);
	return table;
}

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
	let table = buildTable(students);
	document.querySelector('#output')
		?.replaceChildren(table);
}

main();
