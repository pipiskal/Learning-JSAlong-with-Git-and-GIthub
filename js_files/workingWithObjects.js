// what is the difference between let and var

// var is function scoped
// let is block scoped

// 2) what is a closure.

// a closure happens when a function has access to its parents variables
// if if the parent function has ended execution.
// The closure will consist of all the local variables that were in-scope when the closure was created.

// 3) // Delegation Model

// JavaScript’s default behavior that allows moving declarations to the top is called Hoisting.

// Event Capture and Bubbling

let person1 = {
  firstName: "Spyros",
  age: 29,
};

let person2 = person1;
console.log(person1);

const calculateYear = function (person) {
  person.birthYear = 2022 - person.age;
};

calculateYear(person1);

console.log(person1);
console.log(person2);

///

let numberTest = 10;

let secondNumber = numberTest + 5;

const testFunction = function (num) {
  num += 10;
  console.log(num);
};

testFunction(numberTest);
testFunction(secondNumber);

console.log(numberTest);
console.log(secondNumber);
