// Function
function add(a, b) {
    return a + b;
}
console.log(add(1,2));

// Also function
let alsoAdd = function(a, b) {
    return a + b;
}
console.log(alsoAdd(1,2));

// Callback functions
function stillAdd(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2, stillAdd) {
    let sum = 0;
    for (i=0; i<num2; i++) {
        sum = stillAdd(sum, num1);
    }
    return sum;
}
console.log(multiply(2,5, stillAdd));

// Arrow functions basics
// Cannot used as object methods (no `this`)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
let sum = (a, b) => a + b;
console.log(sum(2,8));
