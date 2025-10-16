import test from 'node:test';
import assert from 'node:assert';
import transitUtilities from './transit-utilities.js';
import mbtaData from '../../data/static-data.json' with { type: 'json' };

// eslint-disable-next-line no-unused-vars
let mockLines = mbtaData.lines.slice(0, 5);

// eslint-disable-next-line no-unused-vars
let mockRoutes = mbtaData.routes.slice(0, 5);

let { getLinesByTransitType } = transitUtilities;

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
