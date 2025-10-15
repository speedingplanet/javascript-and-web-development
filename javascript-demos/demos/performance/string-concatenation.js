import process from 'node:process';
import { performance } from 'node:perf_hooks';

const iterations = process.argv[2]; // 10, 100, 10000, 1000000
const stringText = 'string';
let text = 'more';

const start = performance.now();

for (let i = 0; i < iterations; i++) {
	// Post-fix, new string each time
	// text = 'text ' + stringText;
	// text = `text ${stringText}`;
	// ---------------------------------------------------
	// Infix, new string each time
	// text = stringText + ' text ' + stringText;
	// text = `${stringText} text ${stringText}`;
	// ---------------------------------------------------
	// Infix, concat, adding value
	// text = text + ', ' + i;
	// Infix, concat, +=
	// text += ', ' + i;
	// ---------------------------------------------------
	// Infix, template, adding value
	// text = `${text}, ${i}`;
	// Infix, template, +=
	text += `, ${i}`;
}

const end = performance.now();

console.log(`It took ${end - start} ms.`);
