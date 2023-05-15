/**
 *
 * @param {string} id string representing the movie id
 * @param {string} baseURL string URL to fetch from
 */
async function fetchMovie(id, baseURL) {
	try {
		let response = await fetch(`${baseURL}/${id}`);
		if (response.ok) {
			let movie = await response.json();
			return movie;
		} else {
			throw new Error(
				`Could not find movie ${id} because ${response.status} ${response.statusText}`
			);
		}
	} catch (error) {
		console.error('Could not populate edit form because', error.message);
		throw error;
	}
}

function handleSubmit(event) {
	event.preventDefault();
	let movieData = {};
	let formData = new FormData(event.target);

	// array destructuring
	for (let [
		key, value,
	] of formData) {
		if (key === 'rating' || key === 'year') {
			movieData[key] = Number(value);
		} else if (key === 'genres' || key === 'writer') {
			// Regular expression that matches a comma followed by
			// zero or more whitespace characters
			movieData[key] = value.split(/,\s*/);
		} else {
			movieData[key] = value;
		}
	}

	editMovie(movieData);
}

async function editMovie(movie) {
	let movieAsJSONString = JSON.stringify(movie);
	try {
		let response = await fetch(`http://localhost:8000/movies/${movie.id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: movieAsJSONString,
		});

		if (response.ok) {
			console.log('Success!');
			let updatedMovie = await response.json();
			console.log('Updated movie:', updatedMovie);
		} else {
			throw Error(`Updating ${movie.title} failed with ${response.status}`);
		}
	} catch (error) {
		console.error('Could not update movie because', error);
		throw error;
	}
}

// Passing location.href means the key is the ENTIRE URL, which is unwieldy to say the least
// Passing location.search only parses the '?key=value&key2=value2' part, the query string
let params = new URLSearchParams(location.search);

let baseURL = 'http://localhost:8000/movies';
let movie = await fetchMovie(params.get('id'), baseURL);

let form = document.querySelector('#edit-movie-form');

// let field = form.querySelector('#movie-director');
// field.value = movie.director;

let fields = form.querySelectorAll('input');
fields.forEach((field) => {
	if (movie[field.name]) {
		field.value = movie[field.name];
	}
});

form.addEventListener('submit', handleSubmit);
