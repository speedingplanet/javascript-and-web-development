/* eslint-disable no-unused-vars */
let url = 'http://localhost:8000/movies';
let badUrl = 'http://localhost:7999/movies';
let badResource = 'http://localhost:8000/pizzas';

/*
 * What happens if the network is down?
 *
 *
 */
function badFetchGoodErrorHandling() {
	return fetch(url).then(
		(response) => {
			return response.json();
		},
		(error) => {
			console.error('Something went wrong!' + error.message);
			throw new Error('Error fetching data');
		}
	);
}

/*
badFetchGoodErrorHandling()
	.then((results) => {
		console.log('Success handler running....');
		console.log(`There are ${results.length} movies`);
	})
	.catch((error) => {
		console.error('Problems fetching data:', error.message);
	});
*/

function goodFetchBadResponse() {
	return fetch(badResource).then((response) => {
		console.log('Successful fetch');

		// if (response.status > 199 && response.status < 300) {
		if (response.ok) {
			console.log('Good response:', response.status);
		} else {
			console.warn('Bad response:', response.status);
		}
	});
}

// goodFetchBadResponse();

// Returns Promise<response.json()> or Promise<[]>
function getData() {
	return fetch(url).then((response) => {
		if (response.ok) {
			// We have data, so...
			return response.json();
		} else {
			// We don't have data for some reason
			return [];
		}
	});
}

async function getMovies() {
	let results = await getData();
	return results;
}

function showResults() {
	let movies = getMovies();
}
