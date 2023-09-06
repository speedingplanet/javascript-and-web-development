let textButton = document.querySelector('#add-text-button');
let htmlButton = document.querySelector('#add-html-button');

textButton.addEventListener('click', () => {
	let p = textButton.parentElement.querySelector('p');
	p.textContent = p.textContent + ' Added text';
});

htmlButton.addEventListener('click', () => {
	let list = htmlButton.parentElement.querySelector('ol');

	// also insertAdjacentElement() if you have an HTML element to insert
	// target.insertAdjacentHTML(positionRelativeToTarget, content);
	list.insertAdjacentHTML('beforeend', '<li>Added list item</li>');

	// Avoid innerHTML because it's inefficient, provokes whole-page repaints
	// And sometimes removes styles and event handlers.
	// list.innerHTML = list.innerHTML + '<li>Added list item</li>';
});
