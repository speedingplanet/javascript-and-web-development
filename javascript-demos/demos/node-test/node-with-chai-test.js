import test from 'node:test';
import { expect, assert } from 'chai';
import { add } from '../qunit/utilities.js';

test('Chai expect style (to.equal)', () => {
	// assert.deepStrictEqual(1 + 1, 2);
	expect(1 + 1).to.equal(2);
});

test('Chai assert style, assert.equal()', () => {
	assert.equal(1 + 1, 2);
});

test('Chai object deep equal', () => {
	expect({ a: 'apple' }).to.deep.equal({ a: 'apple' });
});

test('add() should successfully add 2 and 4', () => {
	let result = add(2, 4);
	expect(result).to.equal(6);
});
