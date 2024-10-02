/* global QUnit */
import { arrayToList } from '../demos/qunit/utilities.js';

QUnit.module('arrayToList tests', () => {
	// The document object is automatically available
	QUnit.test('Use without crashing', (assert) => {
		let fruits = ['apples', 'oranges', 'pears'];
		let list = arrayToList(fruits);

		assert.ok(list);
	});

	QUnit.test('Generate the correct number of items', (assert) => {
		let fruits = ['apples', 'oranges', 'pears'];
		let list = arrayToList(fruits);

		let items = list.querySelectorAll('li');
		assert.strictEqual(items.length, fruits.length);
	});
});
