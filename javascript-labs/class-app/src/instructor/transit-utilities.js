function getLinesByTransitType(routes, lines, transitType) {
	let foundRoutes = [];

	if (typeof transitType === 'number') {
		// Single value
		foundRoutes = routes.filter((r) => r.attributes.type === transitType);
	} else if (Array.isArray(transitType)) {
		// Array of values
		foundRoutes = routes.filter((r) => transitType.includes(r.attributes.type));
	} else {
		// Bad data
		console.warn('Invalid transit type (not an array or number)');
		return null;
	}

	let lineIds = foundRoutes.map((r) => r.relationships.line.data.id);

	return lines.filter((l) => lineIds.includes(l.id));
}

// eslint-disable-next-line no-unused-vars
function generateAttributeComparator(attributeName) {
	// Compare r1.attributes.long_name
	// Uses a closure
	// String.prototype.localeCompare returns 1, 0, -1 as appropriate
	// return r1.attributes.long_name.localeCompare(r2.attributes.long_name);
	return (r1, r2) => r1.attributes[attributeName].localeCompare(r2.attributes[attributeName]);
}

function generateBoundComparator(attributeName) {
	// Bind `attributeName` to the comparator
	let attributeComparator = (att, r1, r2) => r1.attributes[att].localeCompare(r2.attributes[att]);
	return attributeComparator.bind(null, attributeName);
}

function sortRoutes(routes, attributeName) {
	let validAttributes = Object.keys(routes[0].attributes);
	if (!validAttributes.includes(attributeName)) {
		console.warn(`${attributeName} is not a valid attribute for a Route`);
		return null;
	}

	// Create an array of lines sorted by their long name
	return routes.toSorted((r1, r2) => {
		// Compare r1.attributes.long_name
		// String.prototype.localeCompare returns 1, 0, -1 as appropriate
		// return r1.attributes.long_name.localeCompare(r2.attributes.long_name);
		return r1.attributes[attributeName].localeCompare(r2.attributes[attributeName]);
	});
}

// eslint-disable-next-line no-unused-vars
function sortRoutesBound(routes, attributeName) {
	let validAttributes = Object.keys(routes[0].attributes);
	if (!validAttributes.includes(attributeName)) {
		console.warn(`${attributeName} is not a valid attribute for a Route`);
		return null;
	}

	/*
	return routes.toSorted((r1, r2) => (r1
		.attributes[attributeName]
		.localeCompare(r2.attributes[attributeName]))
	);
	*/

	/* using attributeComparator */
	// let comparator = generateAttributeComparator(attributeName);
	let comparator = generateBoundComparator(attributeName);
	return routes.toSorted(comparator);
}

export default {
	sortRoutes,
	getLinesByTransitType,
};

/*
let sortedRoutes = sortRoutes(data.routes, 'long_name');
console.log(sortedRoutes.map((sr) => sr.attributes.long_name));
// Create an array of lines sorted by their color
console.log(sortRoutes(data.lines, 'color').map((sr) => sr.attributes.long_name));
// Find subway lines:

console.log('====== Subway lines ======');
// console.log(subwayLines.map((sl) => sl.attributes.long_name));
getLinesByTransitType(data.routes, data.lines, [0, 1]).forEach((sl) => {
	console.log(chalk.hex(sl.attributes.color)(sl.attributes.long_name));
});

// Create an array of all bus routes

// Are there any ferry lines?
*/
