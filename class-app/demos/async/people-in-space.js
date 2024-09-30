let url = 'http://api.open-notify.org/astros.json';

fetch(url)
	.then((response) => {
		// Is response.status between 200-299?
		if (response.ok) {
			return response.json(); // Returns a Promise that resolves to a JS object
		} else {
			throw new Error(`Could not retrieve astronauts (data) ${response.status}`);
		}
	})
	.then((results) => {
		let list = document.querySelector('#astronaut-list');
		let items = results.people.map((person) => {
			let li = document.createElement('li');
			li.textContent = `${person.name} on ${person.craft}`;
			return li;
		});
		list.replaceChildren(...items);
	})
	.catch((error) => {
		console.error('Could not fetch or render astronauts with regular fetch:', error.message);
	});
