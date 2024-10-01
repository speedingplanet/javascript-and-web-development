import { add } from '../demos/qunit/utilities.js';
import QUnit from 'qunit';

QUnit.module('Module 1', (hooks) => {
	let testValue = 1;

	hooks.before(() => {
		console.log('before: runs once for a module, before anything else');
	});

	hooks.beforeEach(() => {
		console.log('beforeEach: runs before each test');
	});

	QUnit.test('Testing add()', (assert) => {
		assert.equal(add(2, 4), 6);
		testValue++;
	});

	QUnit.test('assert.true', (assert) => {
		assert.true(1 === 1);
		testValue++;
	});

	QUnit.test('global assert?', (assert) => {
		assert.ok(1);
		assert.notOk(0);
		assert.true(true);
		assert.false(false);
		testValue++;
	});

	hooks.afterEach(() => {
		console.log('afterEach: runs after each test');
		console.log(`afterEach: testValue is ${testValue}`);
	});

	hooks.after(() => {
		console.log('after: runs once for a module, after everything else');
	});
});
