/* eslint-disable no-unused-vars */
let url = 'http://api.open-notify.org/astros.json';
let badUrl = 'http://api.open-notify.org/cosmos.json';

function goodFetchGoodResponse() {
	return fetch(url)
		.then((response) => {
			console.log('Successful fetch');

			// if (response.status > 199 && response.status < 300) {
			if (response.ok) {
				console.log('Success with a good response:', response.status);
			} else {
				console.warn('Success with a bad response:', response.status);
			}
		});
}

function goodFetchBadResponse() {
	return fetch(badUrl)
		.then((response) => {
			console.log('Successful fetch');

			// if (response.status > 199 && response.status < 300) {
			if (response.ok) {
				console.log('Success with a good response:', response.status);
			} else {
				console.warn('Success with a bad response:', response.status);
			}
		});
}

// What happens if the network is down?
function badFetchGoodErrorHandling() {
	return fetch(url)
		.then(
			(response) => {
				return response.json();
			},
			(error) => {
				console.error('Something went wrong!' + error.message);
				throw new Error('Error fetching data');
			}
		);
}

// Returns Promise<response.json()> or Promise<null>
function getData() {
	return fetch(url)
		.then((response) => {
			if (response.ok) {
				// We have data, so...
				return response.json();
			} else {
				// We don't have data for some reason
				console.warn('Success with a bad response:', response.status);
				return null;
			}
		});
}
