let baseUrl = 'http://localhost:8000/movies';

async function getMovies(url) {
	try {
		let response = await fetch(url);
		if (response.ok) {
			let movies = await response.json();
			return movies;
		} else {
			throw Error('Could not fetch movies');
		}
	} catch (error) {
		console.error('getMovies error:', error);
		throw error;
	}
}

async function addMovie(url, newMovie) {
	try {
		let response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newMovie),
		});

		if (response.ok) {
			let result = await response.json();
			return result;
		} else {
			throw new Error('Could not insert movie!');
		}
	} catch (error) {
		console.error('Could not add movie because', error);
		throw error;
	}
}
