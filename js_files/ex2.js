
// Conditional (ternary) operator


// the conditional (ternary) operator is the only JavaScript 
// operator that takes three operands: a condition followed by a 
// question mark (?), then an expression to execute if the condition
// is truthy followed by a colon (:), and finally the expression
// to execute if the condition is falsy. This operator is frequently
// used as an alternative to an if...else statement.

// condition ? exprIfTrue : exprIfFalse


let x = 14;

let test = x > 12 ? `${x} is greaten than 12` : `${x} is less or equal than 12`

console.log(test);


// Converting Between Types 

// type conversion
// we convert from one type to another

const inputYear = "1991";

let newYear = Number(inputYear);
// the original value doenst change to a number it remains a String
console.log(inputYear);
console.log(newYear);

let age = 29;
// convering to a string

let stringAge = String(age);
console.log(stringAge);


// type coercion

console.log("i am " + 29 + "years old");
console.log("23" - "1" -3);
