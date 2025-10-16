import test from 'node:test';
import { expect } from 'chai';
import { Line } from './Line.js';

let mockLine = {
	attributes: {
		color: 'DA291C',
		long_name: 'Red Line',
		short_name: '',
		sort_order: 10010,
		text_color: 'FFFFFF',
	},
	id: 'line-Red',
	links: {
		self: '/lines/line-Red',
	},
	type: 'line',
};

test('Generated accessors for private members', () => {
	let redLine = new Line(mockLine);
	expect(redLine.getLongName).not.to.be.undefined;
	expect(redLine.getLongName()).to.equal('Red Line');
});
