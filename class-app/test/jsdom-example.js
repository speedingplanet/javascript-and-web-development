import qunit from 'qunit';
import 'global-jsdom/register';
import { arrayToList } from '../demos/qunit/utilities.js';

qunit.module('arrayToList tests', () => {
	// The document object is automatically available
	qunit.test('Use without crashing', (assert) => {
		let fruits = ['apples', 'oranges', 'pears'];
		let list = arrayToList(fruits);

		assert.ok(list);
	});

	qunit.test('Generate the correct number of items', (assert) => {
		let fruits = ['apples', 'oranges', 'pears'];
		let list = arrayToList(fruits);

		let items = list.querySelectorAll('li');
		assert.strictEqual(items.length, fruits.length);
	});
});
