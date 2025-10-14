const states = ['NJ', 'MA', 'CA', 'IL', 'FL'];

// Should print out CA
// console.log(states.at(2));
// console.log(states[2]);

// Getting the last element
// console.log(states.at(-1));
// console.log(states[states.length - 1]);

let firstTwo = states.slice(0, 2);

console.log(firstTwo);
console.log(states);

// states.sort();
let sortedStates = states.toSorted();
console.log(states);
console.log(sortedStates);

let statesCopy = [...states];
statesCopy.splice(1, 1, 'PA');
console.log(statesCopy);

let changedStates = states.with(1, 'PA');
console.log(states);
console.log(changedStates);
