
/*
function handleClick(event) {
	console.log('The object that emitted the event:', event.target);
}

button.addEventListener('click', handleClick);
*/

/*
let p = new Promise(function (resolve, reject) {
	// Call resolve with a value to resolve successfully.
	// Call reject or throw an error to reject/fail
})
*/

let origin = new Promise((resolve) => resolve(10));

let p1 = origin.then((v1) => {
	console.log(`origin resolved with a value of ${v1}`);
	return v1 * 2;
});

let p2 = p1.then((v2) => {
	console.log(`p1 resolved with a value of ${v2}`);
	throw Error('test error');
});

let p3 = p2.then(
	(v3) => {
		console.log('We should not see this');
		console.log(`p2 resolved with a value of ${v3}`);
	},
	(error) => {
		console.error('p2 rejected with an error:', error.message);
		throw error; // Allows error to be seen down the chain
	}
);

p3.then(
	(v4) => {
		console.log(`p3 resolved successfully with a value of [${v4}]`);
	},
	(error) => {
		console.error(`p3 rejected with an error message of [${error.message}]`);
	}
);

origin.then((chain1) => {
	// chain1 should be 10
	return chain1 + 1;
})
	.then(chain2 => {
	// chain2 should be 11
		return chain2 + 1;
	})
	.then(chain3 => {
	// chain3 should be 12
		return chain3 + 1;
	});
