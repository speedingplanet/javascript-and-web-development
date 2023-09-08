/**
 * TYPEDEFS
 *
 * @typedef { import("../../data/data.d.ts").Student } Student
 */

/**
 *
 * addStudent
 *
 */

async function addStudent() {
}

/**
 *
 * handleSubmit
 *
 */
async function handleSubmit() {
}

/**
 *
 * displayResults
 *
 */
function displayResults() {
}

async function main() {
	let url = 'http://localhost:8000/students';
	let form = document.querySelector('#add-student-form');
	let output = document.querySelector('#output');

	form.addEventListener('submit', () => console.log('Update this event handler!'));
}

main();
