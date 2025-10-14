let button = document.querySelector('#fetch-button');
button.addEventListener('click', fetchAllMovies);
let asyncButton = document.querySelector('#fetch-async-button');
asyncButton.addEventListener('click', fetchAllMoviesAsync);
let destination = document.querySelector('#movies-table');

function fetchAllMovies() {
	console.log('About to fetch movies....');

	// fetch -> response | error -> results | error -> catch error
	fetch('http://localhost:8000/movies')
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Bad HTTP response:' + response.status);
			}
		})
		.then((results) => {
			renderMovies(results, destination);
			console.log(`There are ${results.length} movies.`);
		})
		.catch((error) => {
			console.error('Error retrieving movies:', error);
		});
}

async function fetchAllMoviesAsync() {
	console.log('About to fetch movies....');

	try {
		let response = await fetch('http://localhost:8000/movies');
		if (response.ok) {
			let results = await response.json();
			console.log(`There are ${results.length} movies.`);
			renderMovies(results, destination);
		} else {
			throw new Error('Bad HTTP response:' + response.status);
		}
	} catch (error) {
		console.error('Error retrieving movies:', error);
	}
}

/**
 *
 * @param {*} movies
 * @param {HTMLElement} destination
 */
function renderMovies(movies, destination) {
	let table = document.createElement('table');
	table.classList.add('table', 'table-hover', 'table-striped');
	table.insertAdjacentHTML(
		'afterbegin',
		`<thead>
  <tr>
  <th>Title</th>
  <th>Year</th>
  <th>Director</th>
  <th>Rating</th>
  </tr>
  </thead>`
	);
	let tableBody = document.createElement('tbody');
	for (let movie of movies) {
		let row = document.createElement('tr');
		row.insertAdjacentHTML('beforeend', `<td>${movie.title}</td>`);
		row.insertAdjacentHTML('beforeend', `<td>${movie.year}</td>`);
		row.insertAdjacentHTML('beforeend', `<td>${movie.director}</td>`);
		row.insertAdjacentHTML('beforeend', `<td>${movie.rating}</td>`);
		tableBody.append(row);
	}
	table.appendChild(tableBody);
	destination.replaceChildren(table);
}
