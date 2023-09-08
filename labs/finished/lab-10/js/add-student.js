/**
 * TYPEDEFS
 *
 * @typedef { import("../../data/data.d.ts").Student } Student
 */

/**
 *
 * addStudent
 *
 * @param {string} url
 *
 * Partial<> because our Student doesn't have all their data
 * and specifically doesn't have an ID
 * @param {Partial<Student>} student
 *
 * @returns {Partial<Student>}
 */

async function addStudent(url, student) {
	let response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(student),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		let results = await response.json();
		return results;
	} else {
		console.error(`Could not add ${student.lastName} because ${response.status} / ${response.statusText}`);
	}
}

/**
 *
 * handleSubmit
 *
 * @param {Event} event
 * @param {string} url
 * @param {HTMLElement} outputDiv
 */
async function handleSubmit(event, url, outputDiv) {
	event.preventDefault();
	let formData = new FormData(event.target);
	let newStudent = {};
	for (let [key, value] of formData) {
		newStudent[key] = value;
	}

	let results = await addStudent(url, newStudent);
	event.target.reset();
	displayResults(outputDiv, results);
}

/**
 *
 * displayResults
 *
 * @param {HTMLElement} outputDiv
 * @param {Partial<Student>} student
 */
function displayResults(outputDiv, student) {
	let message = `Added "${student.firstName} ${student.lastName}" as student #${student.id}`;
	let p = document.createElement('p');
	p.textContent = message;
	outputDiv.replaceChildren(p);
}

async function main() {
	let url = 'http://localhost:8000/students';
	let form = document.querySelector('#add-student-form');
	let output = document.querySelector('#output');

	form.addEventListener('submit', (event) => handleSubmit(event, url, output));
}

main();
