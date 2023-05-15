let url = 'http://api.open-notify.org/astros.json';

fetch(url)
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('Could not retrieve astronauts (data)');
		}
	})
	.then(astronauts => {
		let list = document.querySelector('#astronaut-list');
		let items = astronauts.people.map((person) => {
			let li = document.createElement('li');
			li.textContent = `${person.name} on ${person.craft}`;
			return li;
		});
		list.replaceChildren(...items);
	})
	.catch(error => {
		console.error('Could not fetch or render astronauts with regular fetch:', error.message);
	});
;
