import test from 'node:test';
import assert from 'node:assert';
import transitUtilities from './transit-utilities.js';
import mbtaData from '../../data/static-data.json' with { type: 'json' };

// eslint-disable-next-line no-unused-vars
let mockLines = mbtaData.lines.slice(0, 5);

// eslint-disable-next-line no-unused-vars
let mockRoutes = mbtaData.routes.slice(0, 5);

let { getLinesByTransitType, sortRoutes } = transitUtilities;

test('Is null deepStrictEqual to null?', () => {
	assert.deepStrictEqual(null, null);
});

test('Falsy?', () => {
	assert.notDeepStrictEqual('', false);
});

test('should return null if invalid transitType', () => {
	let invalidTransitType = 'foo';
	let result = getLinesByTransitType([], [], invalidTransitType);
	assert.deepStrictEqual(result, null);
});

test('should return results with an array of valid transit types', () => {
	let validTypes = [0, 1];
	let result = getLinesByTransitType(mockRoutes, mockLines, validTypes);

	assert.ok(result.some((line) => line.attributes.long_name.includes('Red Line')));
});

test('should return lines sorted by long_name', () => {
	let result = sortRoutes(mockLines, 'long_name');

	assert.deepStrictEqual(
		result.map((m) => m.attributes.long_name),
		['Blue Line', 'Green Line', 'Mattapan Trolley', 'Orange Line', 'Red Line']
	);
});

test('check for empty attributes', () => {
	let obj1 = {
		a: 'apple',
		l1: {
			b: 'banana',
			l2: {
				c: 'cat',
			},
		},
	};

	let obj2 = {
		a: 'apple',
		l1: {
			b: 'banana',
			l2: {
				c: 'cat',
			},
		},
	};

	assert.deepStrictEqual(obj1, obj2);
});

test('snapshot test', (t) => {
	let obj1 = {
		a: 'apple',
		l1: {
			b: 'boat',
			l2: {
				c: 'cat',
			},
		},
	};

	t.assert.snapshot(obj1);
});
