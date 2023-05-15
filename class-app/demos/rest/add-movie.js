/*
When the form is submitted
Turn off default behavior
Capture the data from the form
Render it into the right format
Send it to the server
Get a response
Log success or failure

What happens to the form data when we submit?
How can we prevent double submissions?
*/

function handleSubmit(event) {
	event.preventDefault();
	let movieData = {};
	let formData = new FormData(event.target);
	// let formData = new FormData(movieForm);

	// array destructuring
	for (let [
		key, value,
	] of formData) {
		if (key === 'rating' || key === 'year') {
			movieData[key] = Number(value);
		} else if (key === 'genres') {
			movieData[key] = value.split(', ');
		} else {
			movieData[key] = value;
		}
	}

	console.log('About to add:', movieData);

	addMovie(movieData);
}

async function addMovie(movie) {
	let movieAsJSONString = JSON.stringify(movie);
	try {
		let response = await fetch('http://localhost:8000/movies', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: movieAsJSONString,
		});

		if (response.ok) {
			console.log('Success!');
			let addedMovie = await response.json();
			console.log('Added movie:', addedMovie);
		} else {
			throw Error(`Adding a movie failed with ${response.status}`);
		}
	} catch (error) {
		console.error('Could not add movie because', error);
		throw error;
	}
}

let movieForm = document.querySelector('#add-movie-form');
movieForm.addEventListener('submit', handleSubmit);
