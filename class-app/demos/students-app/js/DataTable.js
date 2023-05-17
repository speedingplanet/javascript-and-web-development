export class DataTable {
	constructor(data = [], fields = null, destinationId = '') {
		if (!Array.isArray(data)) throw new Error('data must be an array!');
		if (Object.getPrototypeOf(fields) !== Map.prototype) throw new Error('fields must be a Map!');
		this.data = data;
		this.fields = fields;
		this.destinationId = destinationId;
		this.renderTable();
	}

	renderTable(data = this.data, destinationId = this.destinationId) {
		if (!destinationId) return null;
		let destination = document.getElementById(destinationId);
		if (destination === null) return null;

		let table = this.#buildTable(data, this.fields);
		destination.replaceChildren(table);
	}

	/**
	 *
	 * @param {any[]} data
	 * @param {Map<string, string>} fields
	 * @returns
	 */
	#buildTable(data, fields) {
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
		let thead = document.createElement('thead');
		let headerRow = document.createElement('tr');

		for (let field of fields.values()) {
			headerRow.insertAdjacentHTML('beforeend', `<th>${field}</th>`);
		}
		thead.append(headerRow);

		table.classList.add('table', 'table-striped', 'table-hover');

		for (let record of data) {
			let tableRow = document.createElement('tr');
			for (let field of fields.keys()) {
				tableRow.insertAdjacentHTML('beforeend', `<td>${record[field]}</td>`);
			}
			tbody.appendChild(tableRow);
		}
		table.append(thead, tbody);
		return table;
	}
}
