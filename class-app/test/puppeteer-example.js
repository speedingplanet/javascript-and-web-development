import QUnit from 'qunit';
import puppeteer, { Browser, Page } from 'puppeteer';

let url = 'http://localhost:5173/demos/dom/adding-text-vs-html.html';

QUnit.module('Puppeteer tests', (hooks) => {
	/** @type {Browser} */
	let browser;

	/** @type {Page} */
	let page;

	hooks.before(async () => {
		browser = await puppeteer.launch();
	});

	hooks.beforeEach(async () => {
		page = await browser.newPage();
		await page.goto(url);
	});

	QUnit.test('Add a list item', async (assert) => {
		// Get a reference to the "Add content" button
		// Click on it
		// Make sure that the ordered list has four items

		assert.timeout(5000);

		// Check assumptions first
		let originalLength = (await page.$$('ol > li')).length;
		assert.equal(originalLength, 3);

		// locator uses CSS selectors but also others
		// locator returns an Element (not an HTML or DOM Element)
		await page.locator('#add-html-button').click();

		// page.$() -> document.querySelector(), returns ElementHandle
		// page.$$() -> document.querySelectorAll(), returns Array<ElementHandle>
		const updatedLength = (await page.$$('ol > li')).length;

		assert.equal(updatedLength, 4);
	});

	QUnit.test('Access DOM element properties', async (assert) => {
		let buttonText = await page.$eval('#add-text-button', (button) => {
			// Should have an Element reference to the button here
			return button.textContent;
		});

		assert.true(buttonText.trim() === 'Add text');
	});

	hooks.after(async () => {
		await browser.close();
	});
});
