import { movies } from '../../data/all-data-typed';

/*
for (let movie of movies) {
	console.log(movie.title);
}
*/

let outputDiv = document.querySelector('#output');

function movieTitlesWithMap(movies, outputDiv) {
	let titles = movies.map(movie => {
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
