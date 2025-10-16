import { startCase, snakeCase, kebabCase } from 'lodash-es';

export class Line {
	#color;
	#longName;
	#shortName;
	#sortOrder;
	#textColor;

	constructor(configLine) {
		this.attributes = configLine.attributes;
		let attNames = ['color', 'longName', 'shortName', 'sortOrder', 'textColor'];
		for (let name of attNames) {
			let capitalName = name.slice(0, 1).toUpperCase() + name.slice(1);
			let snakeName = snakeCase(name);
			this[`#${name}`] = this.attributes[snakeName];
			this[`get${capitalName}`] = function () {
				return this[`#${name}`];
			};
		}
	}
}
