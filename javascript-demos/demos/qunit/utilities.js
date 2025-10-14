export function add(x, y) {
	return x + y;
}

/**
 *
 * @param {Array} data The array of data to be processed
 * @param {Object} options Options for converting to a list
 * @param {Element | null} [options.target=null] The element to render to
 * @param {'ul' | 'ol'} [options.listType='ul'] The type of list to create
 *
 * @returns {HTMLElement}
 */
export function arrayToList(data, { target = null, listType = 'ul' } = {}) {
	let listItems = [];
	for (let value of data) {
		let listItem = document.createElement('li');
		listItem.textContent = value;
		listItems.push(listItem);
	}

	/*
	If the target is a list, append the list items directly

	Otherwise, create a list and return it
	*/
	if (target instanceof Element && ['OL', 'UL'].includes(target.nodeName)) {
		target.append(...listItems);
		return target;
	} else {
		let list = document.createElement(listType);
		list.append(...listItems);
		return list;
	}
}
