/* eslint-disable no-unused-vars, n/handle-callback-err, prefer-promise-reject-errors */
function generateAPromiseThat(result) {
	return new Promise((resolve, reject) => {
		if (result === true || result === 'succeeds') {
			resolve('Success!');
		} else if (result === false || result === 'fails') {
			reject('Failed!');
		} else {
			return Date.now() % 2 ? resolve('Random Success!') : reject('Random Failure!');
		}
	});
}

let initialPromise = generateAPromiseThat('random');

// Promise API: promise.then(successCallback, failureCallback?)

// Success and failure
initialPromise.then(
	(result) => console.log(`Resolved with ${result}`),
	(error) => console.error(`Failed with ${error}`)
);

// Chained success and failure
initialPromise
	.then((success) => console.log('Chained success'))
	.catch((error) => console.log('Chained fail'));

// Standalone
generateAPromiseThat('fails')
	.catch((error) => console.error('Something went wrong'));
generateAPromiseThat('succeeds')
	.then((result) => console.log('Only a success callback'));

let chainedResultsPromise = generateAPromiseThat(true);

let link2Promise = chainedResultsPromise.then((success) => {
	console.log('Link 1:', success);
	return 10;
});

let link3Promise = link2Promise.then((link2Result) => {
	console.log('Link 2:', link2Result);
	return 20;
});

link3Promise.then((link3Result) => {
	console.log('Link 3:', link3Result);
});

generateAPromiseThat('succeeds')
	.then((link1Result) => {
		console.log('Chained Link 1:', link1Result);
		return 10;
	})
	.then((link2Result) => {
		console.log('Chained Link 2:', link2Result);
		return 20;
	})
	.then((link3Result) => {
		console.log('Chained Link 3:', link3Result);
	});

generateAPromiseThat('fails')
	.then((link1Result) => {
		console.log('Chained Link 1:', link1Result);
		return 10;
	})
	.then((link2Result) => {
		console.log('Chained Link 2:', link2Result);
		return 20;
	})
	.then((link3Result) => {
		console.log('Chained Link 3:', link3Result);
	})
	.catch((error) => {
		console.error('Somewhere above, there was a problem:', error);
	});

let resultsPromise = generateAPromiseThat('succeeds');

// Prefer chaining to capturing a return promise and calling then()
let results = resultsPromise.then((value) => {
	return value;
});

let randomPromise = generateAPromiseThat('who knows');
randomPromise.finally(() => {
	console.log('Runs on success OR failure');
	console.log('But receives no argument');
});
