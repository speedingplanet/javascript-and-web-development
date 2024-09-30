export class StudentsTable {
	constructor(students = [], destinationId = '') {
		if (!Array.isArray(students)) throw new Error('students must be an array!');
		this.students = students;
		this.destinationId = destinationId;
		this.renderTable();
	}

	renderTable(students = this.students, destinationId = this.destinationId) {
		if (!destinationId) return null;
		let destination = document.getElementById(destinationId);
		if (destination === null) return null;

		let table = this.#buildTable(students);
		destination.replaceChildren(table);
	}

	#buildTable(students) {
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
		let thead = document.createElement('thead');

		thead.insertAdjacentHTML(
			'beforeend',
			`
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>City</th>
			<th>Province</th>
		</tr>
		`
		);

		table.classList.add('table', 'table-striped', 'table-hover');

		for (let student of students) {
			let tableRow = document.createElement('tr');
			tableRow.insertAdjacentHTML(
				'beforeend',
				`
				<td>${student.firstName}</td>
				<td>${student.lastName}</td>
				<td style="width:25%">${student.city}</td>
				<td>${student.province}</td>
			`
			);
			tbody.appendChild(tableRow);
		}

		table.append(thead, tbody);
		return table;
	}
}
