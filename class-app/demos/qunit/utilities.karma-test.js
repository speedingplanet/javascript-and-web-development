import { add } from './utilities.js';

QUnit.module('add');

QUnit.test('two numbers', (assert) => {
	assert.equal(add(2, 4), 6);
});
