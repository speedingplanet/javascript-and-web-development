import { add } from '../demos/qunit/utilities.js';
import QUnit from 'qunit';

QUnit.module('add');

QUnit.test('two numbers', (assert) => {
	assert.equal(add(2, 4), 6);
});
