const url = 'http://api.open-notify.org/astros.json';

/**
 *
 * @typedef {{name: string, craft: string }} Astronaut
 * @param {Astronaut[]} astros
 * @param {HTMLElement} destination
 * @returns {Promise<Astronaut[]>}
 *
 * Takes an array of Astronauts and renders them into an unordered list
 * Since it assumes Astronauts, it uses the "name" and "craft" properties
 */
function renderList(astros, destination) {
	let list = document.createElement('ul');
	astros.forEach((astronaut) => {
		list.insertAdjacentHTML('beforeend', `<li>${astronaut.name} on ${astronaut.craft}</li>`);
	});
	destination.replaceChildren(list);
	return list;
}

/**
 * Using fetch to retrieve a list of astronauts.
 * Here we break out each step into its own promise.
 * This wouldn't be done in production, but helps illustrate what promises
 * are generated along the way
 *
 * @returns {Promise<Astronaut[]>}
 */
function fetchAsUnchainedPromise() {
	let responsePromise = fetch(url);
	let resultsPromise = responsePromise.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error(`Bad status code: ${response.status}`);
		}
	});

	let finalPromise = resultsPromise.then((results) =>
		renderList(results.people, unchainedPromiseTarget)
	);

	let errorHandlingPromise = finalPromise.catch((error) => {
		console.error('Something went wrong:', error);
		// Always pass the error along
		throw error; // or return Promise.reject(error)
	});

	return errorHandlingPromise;
}

/**
 *
 * @returns {Promise<Astronaut[]>}
 *
 * More idiomatic JavaScript. Chain each .then() call off of the original
 * fetch call. Add a catch() call at the end to handle any errors
 */
function fetchAsChainedPromise() {
	return fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Bad status code: ${response.status}`);
			}
		})
		.then((results) => renderList(results.people, chainedPromiseTarget))
		.catch((error) => {
			console.error('Something went wrong:', error);
			// Always pass the error along
			throw error; // or return Promise.reject(error)
		});
}

/**
 *
 * @returns {Promise<Astronaut[]>}
 *
 * Using async-await. Label the function as async, and you can use the await
 * keyword in front of anything that would return a Promise.
 *
 * Wrap the whole thing in a try-catch block to enable error handling
 *
 * Don't forget to return a value/throw along any errors
 */
async function fetchAsAsyncAwait() {
	try {
		let response = await fetch(url);

		if (response.ok) {
			let results = await response.json();
			return renderList(results.people, asyncAwaitTarget);
		} else {
			throw new Error(`Bad status code: ${response.status}`);
		}
	} catch (error) {
		console.error('Something went wrong:', error);
		// Always pass the error along
		throw error; // or return Promise.reject(error)
	}
}

let unchainedPromiseButton = document.querySelector('#btn-unchained-promise');
let chainedPromiseButton = document.querySelector('#btn-chained-promise');
let asyncAwaitButton = document.querySelector('#btn-async-await');

let unchainedPromiseTarget = document.querySelector('#target-unchained-promise');
let chainedPromiseTarget = document.querySelector('#target-chained-promise');
let asyncAwaitTarget = document.querySelector('#target-async-await');

unchainedPromiseButton.addEventListener('click', fetchAsUnchainedPromise);
chainedPromiseButton.addEventListener('click', fetchAsChainedPromise);
asyncAwaitButton.addEventListener('click', fetchAsAsyncAwait);
