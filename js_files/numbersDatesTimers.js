"use strict";

// CONVERTING AND CHECKING NUMBERS

// numbers are stored in binary format
console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// we can convert string to number by adding + at the bigginning of the string
console.log(Number("23"));
console.log(+"23");

//Parsing

// parseInt is able to find the number from a string
// if the string starts with a number
// so it get the string and return the number that the strings starts with
// it is usefull if we want to get the number from a css values like 30px

// also the second arguement is called redis and reclares the system
// that we are working in our case and most of the times decimal
console.log(Number.parseInt("30px"), 10);

//again the same with floats
// and it returns all the values after the decimal point
console.log(Number.parseFloat("10.3333px"));

// is not a number??

console.log(Number.isNaN(20)); // --> false because its a number
console.log(Number.isNaN("20"));

// Checking if value is number
console.log(Number.isFinite(20.3));
console.log(Number.isFinite("20.3"));
console.log(Number.isFinite([1, 2, 3]));

console.log(Number.isInteger("20"));

console.log(Number.parseFloat("23")); // even if it doenst have a decimal it return the integer number

//-------------------MATH AND ROUNDING NUMBERS-------------------

Math.max();
Math.min();

console.log(Math.trunc(Math.random() * 6) + 1);

// Building a real time clock

// setInterval(() => {
//   const now = new Date();
//   let date1 = {
//     hour: now.getHours(),
//     minute: now.getMinutes(),
//     second: now.getSeconds(),
//   };

//   console.log(`The time is ${date1.hour} : ${date1.minute} : ${date1.second}`);
// }, 1000);
