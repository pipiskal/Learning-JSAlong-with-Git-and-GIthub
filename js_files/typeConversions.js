// add string with a number
console.log("hello" + 5); // String always wins -> hello5
// adding string number to integer
console.log("5" + 5); // number gets converted to string --> 55 not 10

// add string to undefined
console.log("test" + undefined); // again it will get converted to string "undefined"-> testundefined

console.log("hello" - 5); // NaN;
console.log("10" - 5); // 5
console.log(5 - "2");
console.log(undefined - 2); // NaN

// converting a string to a number by adding +

let numb1 = +"18"; // gets converted to a number
console.log(typeof numb1); // its a number

console.log(+"5");

// check if variable is a number
