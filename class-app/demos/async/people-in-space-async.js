let url = 'http://api.open-notify.org/astros.json';

async function getData(url) {
	try {
		// fetch and HTTPResponse section
		let response = await fetch(url);
		let results;
		if (response.ok) { // HTTP Status code is between 200-299
			results = await response.json(); // Returns a Promise that resolves to a JS object
		} else {
			throw new Error(`Could not retrieve astronauts (data) ${response.status}`);
		}

		// Now we have data, so we're just dealing with rendering an array
		// to the DOM
		let list = document.querySelector('#astronaut-list');
		let items = results.people.map((person) => {
			let li = document.createElement('li');
			li.textContent = `${person.name} on ${person.craft}`;
			return li;
		});
		list.replaceChildren(...items);
	} catch (error) {
		console.error('Could not fetch or render astronauts with regular fetch:', error.message);
		// Either re-throw the error, or build a new one
		// throw error;
		throw new Error('getData() could not fetch data from URL');
	}
}

