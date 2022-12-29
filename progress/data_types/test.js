"use strict";

// Constant
const NUMBER = 1234;

// Declare several variables
let name = "John",
    age = 25,
    message = "hello";

// Infinity
let infinity = 1/0;
console.log(infinity);

// NaN
console.log("string" / 2); // NaN - Computational error
// Mathematical operations are safe. It never stops with error, but returns NaN instead.

// BigInt: Outside of range +-2^53
// Add "n" at the end
const bigInt = 1234n;

// Print with variables or expression
// Can be used only with ``, not simple or double quotes
console.log(`Hello ${name}.`);
console.log(`1+2=${1+2}`);

// Boolean
let isGreater = 4 > 1;
console.log(isGreater);

// null
let time = null;

// Undefined
// Value is not assigned
let yourName;
console.log(yourName);

// typeof()
typeof("yourName");
typeof(alert);
typeof(Math);