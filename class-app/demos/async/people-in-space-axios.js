import axios from 'axios';

let url = 'http://api.open-notify.org/astros.json';

// Assumes Axios is globallay available
axios.get(url)
	.then((response) => {
		// response includes response.data
		let astronauts = response.data;
		let list = document.querySelector('#astronaut-list');
		let items = astronauts.people.map((person) => {
			let li = document.createElement('li');
			li.textContent = `${person.name} on ${person.craft}`;
			return li;
		});
		list.replaceChildren(...items);
	})
	.catch(error => {
		console.error('Could not fetch or render astronauts with Axios:', error.message);
	});
