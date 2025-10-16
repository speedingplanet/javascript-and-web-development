import test from 'node:test';
import assert from 'node:assert';
import { add } from '../qunit/utilities.js';

test('deepStrictEqual', () => {
	assert.deepStrictEqual(1 + 1, 2);
});

test('assert.strict.deepEqual', () => {
	assert.strict.deepEqual(1 + 1, 2);
});

test('add() should successfully add 2 and 4', () => {
	let result = add(2, 4);
	assert.deepStrictEqual(result, 6);
});
