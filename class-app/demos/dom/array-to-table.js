import { movies } from '../../data/all-data-typed';

let outputDiv = document.querySelector('#output');

// eslint-disable-next-line no-unused-vars
function movieTitlesWithMap(movies, outputDiv) {
	let titles = movies.map((movie) => {
		let p = document.createElement('p');
		p.textContent = movie.title;
		return p;
	});

	// ... is the spread operator
	outputDiv.append(...titles);
}

function movieTitlesAsList(movies, outputDiv) {
	let ul = document.createElement('ul');
	for (let movie of movies) {
		ul.insertAdjacentHTML('beforeend', `<li>${movie.title}</li>`);
	}
	outputDiv.replaceChildren(ul);
}

movieTitlesAsList(movies, outputDiv);
