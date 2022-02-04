"user strict";

// Objects are linked to a prototype object

// Prototypal Inheritance / Delegation

// 3 Ways to implement prototypal inheritance in javascript

// Constructor functions

//ES6 classes
// Behind the screen works exactly like Constructor fucntions
// Es6 classes do not behave like classes in "classical OOP"

//Object.created()
// another way of linking an object to a prototype object

// Working with constructor functions

//Programmatically create objects

// arrow function will not work to create a constructor function
// because it doenst have this keyword

const Person = function (firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  // Never do this -- if we create a lot of instances
  // Each instance it will carry this function as well
  // So we are going to have really bad performance
  // we solve this with prototype inheritance
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};

let person1 = new Person("spyros", "kalimeris", 1992);
let person2 = new Person("Dimitra", "Alexoopulou", 1995);

// When a new object is create with the "new" Keyword 4 things are happening

// 1. New {} is created
// 2. function is called, this = {}, the this will be the new created object
// 3. {} linked to prototype
// 4. function autmatically returns the {}

console.log(person1);
person1.calcAge();

// PROTOTYPES

// EACH FUNCTION IN JAVASCRIPT IMMIDIATLY HAS A PROTOTYPE
