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


// Type conversion
let value = true;
console.log(typeof(value));
console.log(typeof(String(value)));
console.log(typeof(Number(value)));


// Boolean conversion
// 0, null, undefined.. --> false
// The rest (including all strings) --> true
console.log(Boolean("undefned")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true

// Number conversion
let form_input_1 = "10";
let form_input_2 = "11";
console.log(Number(form_input_1) + Number(form_input_2));
console.log(+form_input_1 + +form_input_2);


// Changing assignments
a = b = c = 2 + 2;
console.log(a, b, c);

// Comparison
let a = 0;
console.log(Boolean(a));
let b = "0";
console.log(Boolean(b));
console.log(a == b);
// OK...

// Strict equality
// == - Type conversion
// === - No type conversion
console.log('' == false);
console.log('' === false);

// Pay extra attention when comparing...
// Comparisons with null & undefined lead to some strange results...




