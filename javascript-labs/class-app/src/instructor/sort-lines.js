import data from '../../data/static-data.json' with { type: 'json' };
import chalk from 'chalk';

console.log('Hello!');

// https://api-v3.mbta.com/docs/swagger/index.html

// let { lines, routes } = data;

// Create an array of only subway lines (routes type 0,1)
// let subwayRoutes = data.routes.filter((r) => r.attributes.type === 0 || r.attributes.type === 1);
let subwayRoutes = data.routes.filter((r) => [0, 1].includes(r.attributes.type));
let lineIds = subwayRoutes.map((r) => r.relationships.line.data.id);

let subwayLines = data.lines.filter((l) => lineIds.includes(l.id));

console.log('====== Subway lines ======');
// console.log(subwayLines.map((sl) => sl.attributes.long_name));
subwayLines.forEach((sl) => {
	console.log(chalk.hex(sl.attributes.color)(sl.attributes.long_name));
});

// Create an array of lines sorted by their long name

// Create an array of lines sorted by their color

// Create an array of all bus routes

// Are there any ferry lines?
