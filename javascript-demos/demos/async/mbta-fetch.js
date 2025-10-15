async function fetchLinesAsync() {
	try {
		let response = await fetch('https://api-v3.mbta.com/lines');
		if (response.ok) {
			let result = await response.json();
			console.log('Results:', result);
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (err) {
		console.error('Failed to fetch data:', err);
		throw err;
	}
}

fetchLinesAsync();
