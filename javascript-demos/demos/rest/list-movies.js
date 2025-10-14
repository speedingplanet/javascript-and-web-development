async function fetchMovies() {
	let url = 'http://localhost:8000/movies';

	try {
		let response = await fetch(url);
		if (response.ok) {
			let results = response.json();
			return results;
		} else {
			throw Error(`Bad HTTP status: ${response.status}`);
		}
	} catch (error) {
		console.error('fetchMovies error:', error);
		throw error;
	}
}

/**
 * Renders an array of movie objects to a given element
 *
 * @typedef {{id: number,
 *            title: string,
 *            year: number,
 *            director: string | string[],
 *            writer: string | string[],
 *            rating: number,
 *            genre: string[]}} Movie
 * @param {Movie[]} movies
 * @param {HTMLElement} destination
 */
function renderMovies(movies, destination) {
	let tbody = document.createElement('tbody');

	/*
	<tr>
		<td>${movie.title}</td>
		<td>${movie.year}</td>
	</tr>
	*/

	let moviesAsRows = movies.map((movie) => {
		let tr = document.createElement('tr');
		tr.insertAdjacentHTML(
			'beforeend',
			`<td>${movie.title}</td>
    <td>${movie.year}</td>
    <td>${movie.director}</td>
    <td>${movie.rating}</td>
    <td><a class="btn btn-sm btn-info" href="edit-movie.html?id=${movie.id}">Edit</a></td>`
		);

		tr.classList.add('hide-edit-button');
		return tr;
	});

	// Appending an array? use ... to unwind it, effectively:
	// tbody.append(moviesAsRows[0], moviesAsRows[1], moviesAsRows[2]...)
	tbody.append(...moviesAsRows);

	// Apending one item? No need to unwind it.
	destination.append(tbody);
	destination.hidden = false;
}

let movies = await fetchMovies();
let destination = document.querySelector('#movies-table');
renderMovies(movies, destination);
console.log('Location:', location);
