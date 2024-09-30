import { a } from './exports.js';

// a is local to this file
console.log(a);

// Make 'a' globally available

// Works in Node and browsers
globalThis.a = a;
// Removes the variable
delete globalThis.a;

// Works in browsers only
window.a = a;
// Removes the variable
delete window.a;
