"use strict";

// if
let ifVar = 1;
if (ifVar == "1") {
    console.log("1.");
} else if (ifVar == true){
    console.log("True.");
} else {
    console.log("False.")
}

// ?
let question = 1;
let isBTrue = question == true ? "True." : "False.";
console.log(isBTrue);

// ??
// Result of a ?? b
// If a is defined, then a, else b
let notDefined;
let isDefined = notDefined ?? "Default value.";
console.log(isDefined);