/* eslint-disable */
// False values
const undef = undefined;
const nullValue = null;
const x = 0;
const empty = '';
const booleanFalse = false;
const notANumber = NaN;

let y = 10;

if (y < 5) {
	// Do something
}

if (y < 5) {
	// Do something
} else {
	// Do something else
}

if (y < 5) {
	// Do something
} else if (y > 5) {
	// Do something else
} else {
	// Do a final thing
}

let someVariable = 'baz';

switch (someVariable) {
	case 'foo': // if (someVariable === 'foo') {}
		console.log('Matched "foo"!');
		break;
	case 'bar':
		console.log('Matched "bar"!');
		break;
	case 'baz':
		console.log('Matched "baz"!');
		break;
	default:
		console.log('No matches!');
}
