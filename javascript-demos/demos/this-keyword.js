function getX() {
	return this.x;
}

// In the browser, could also use `window`
// `this` refers to the global context
globalThis.x = 'Global level x';

let getXLaterFnThis;

let obj = {
	x: 'Object level x',
	// `this` refers to the parent context, here it is `obj`
	getX,
};

class Foo {
	x = 'class instance-level x';
	constructor(x) {
		// Nullish coalescing assignment!
		// Only assign x to this.x if x is not null or undefined
		this.x ??= x;
	}

	/*
	getX() {
		// `this` refers to the parent context, here it is the instance of Foo
		return this.x;
	}
		*/

	// `this` is known to be weird with setTimeout, so let's not use it
	// reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout#the_this_problem

	getXLaterFn() {
		getXLaterFnThis = this;
		getXLaterFnThis.x = 'getXLaterFn CONTEXT';
		setTimeout(function () {
			// The anonymous function declaration is effectively running here, so `this` refers to
			// the context of getXLaterFn()
			// `this` refers to the parent context, here it is Foo.getXLaterFn()
			// console.log(`getXLaterFn(): ${this.x}`);
			try {
				console.log(`getXLaterFn(): ${getX()}`);
				console.log('Added a line');
				// console.log(`(this.x version line 38) getXLaterFn(): ${this.x}`);
			} catch {
				console.warn(
					'(this.x version) getXLaterFn: could not access X because "this" is undefined'
				);
			}
		}, 100);
	}

	getXLaterArrow() {
		// Arrow function is effectively running here, so `this` refers to the class instance

		setTimeout(() => {
			// Arrow functions inherit the parent context. So `this.x` here is running within
			// getXLaterArrow, instead of one level down in this callback.
			// Here `this` refers to the instance of Foo.
			console.log(`getXLaterArrow(): ${this.x}`);
			// console.log(`getXLaterArrow(): ${getX()}`);
		}, 100);
	}
}

try {
	// Works in non-strict mode because `this` falls back to globalThis
	// Fails / is undefined in strict mode
	console.log(`Calling getX(): ${getX()}`);
} catch {
	console.warn('Could not access x in getX() because "this" is undefined in strict mode');
}
console.log(`Calling obj.getX(): ${obj.getX()}`);

Foo.prototype.getX = getX;
let f = new Foo();
console.log(`Calling Foo.getX(): ${f.getX()}`);

console.log(`Getting X later... `);
console.log('...using a function declaration');
f.getXLaterFn();

console.log('...using an arrow function');
f.getXLaterArrow();

/*
// False in both strict and non-strict mode
console.log(globalThis === undefined);

// true in strict mode, false otherwise
console.log(this === undefined);

function getY() {
	if (this) {
		console.log(this.y);
	} else {
		console.warn('this is undefined');
	}
}

let arrowGetY;

class Container {
	constructor() {
		this.y = 'Constructed y value';
		this.fnGetY = getY;
		// arrowGetY is a closure over the current `this` and NEVER changes
		arrowGetY = () => console.log(this.y);
	}

	levelOne() {
		let self = this;
		function levelTwo() {
			function levelThree() {
				console.log('Calling getY()');
				getY();
				console.log('Calling this.fnGetY()');
				// Would fail, because `this` is undefined at this level
				this?.fnGetY();
				console.log('Calling self.fnGetY()');
				self.fnGetY();
				console.log('Calling arrowGetY()');
				arrowGetY();
			}
			levelThree();
		}
		levelTwo();
	}
}

let c = new Container();
c.levelOne();
console.log('Calling arrowGetY() outside of Container:');
arrowGetY();
*/
