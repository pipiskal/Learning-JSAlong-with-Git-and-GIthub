// "use strict";

// This inside an object methods refers to the object it self
// This as object value --> global -->Window

// person = {
//   firstName: "Spyros",
//   self: this,
//   selfMethod() {
//     return this;
//   },
//   fullName(surname) {
//     return `${this.firstName} ${surname}`;
//   },
// };

// console.log(person.fullName("kalimeris"));

// console.log(person.self);
// console.log(person.selfMethod());

// // Alone this --> Window , the global object

// console.log(this);

// // Inside a function

// const test = function () {
//   return this;
// };

// console.log("this insede a function : " + test());

// // lets create a high order function

// const fullName = function (firstName, lastName) {
//   console.log("second this");
//   console.log(this); // second calls of this
//   return `${firstName} ${lastName}`;
// };

// const highOrder = function (firstName, callback) {
//   console.log("first this");
//   console.log(this); // first one thats called
//   let lastName = "Kalimers";
//   return callback(firstName, lastName);
// };

// console.log(highOrder("Spyros", fullName));

// function logThis() {
//   console.log(this);
// }

// const myObj = {
//   logThis,
//   logThis2() {
//     console.log(this);
//   },
// };

// logThis();

// myObj.logThis();

// function logThis() {
//   console.log(this);
// }

// const myObj = {
//   foo: function () {
//     logThis();
//   },
// };

// myObj.foo();

// const logThis = () => {
//   console.log(this);
// };

// const myObj = {
//   foo: logThis,
// };

// myObj.foo();

// function logThis() {
//   console.log(this);
// }

// const myObj = { name: "sag1v" };

// logThis.apply(myObj);

// const logThis = () => {
//   console.log(this);
// };

// const myObj = { name: "sag1v" };

// logThis.apply(myObj);

// function logThis() {
//   console.log(this);
// }

// const someObj = new logThis();
// console.log(someObj);

// function logThis() {
//   "use strict";
//   console.log(this);
// }

// function myFunc() {
//   logThis();
// }

// const someObj = new myFunc();

// function logThis() {
//   console.log(this);
// }

// class myClass {
//   logThat() {
//     console.log(this);
//     logThis();
//   }
// }

// const myClassInstance = new myClass();
// myClassInstance.logThat();

// function logThis() {
//   console.log(this);
// }

// class myClass {
//   logThat() {
//     logThis.call(this);
//   }
// }

// const myClassInstance = new myClass();
// myClassInstance.logThat();

// class myClass {
//   logThis = () => {
//     console.log(this);
//   };
// }

// const myObj = { name: "sagiv" };

// const myClassInstance = new myClass();
// myClassInstance.logThis.call(myObj);

// function test() {
//   console.log(`first this : ${this}`);

//   (() => {
//     console.log(`Second this : ${this}`);
//   })();
// }

// const person = {
//   fullName: "Spyros Kalimeris",
//   getName() {
//     console.log(this.fullName);
//   },
//   getName2: () => {
//     console.log(this.fullName);
//   },
// };

// person.getName();
// person.getName2();

// class User {
//     constructor() {
//         (this.fistName = "John Doe"),
//             (this.score = 20),
//             (this.sayUser = function () {
//                 // when `this` is accessible
//                 console.log(this.fistName);

//                 const innerFunction = () => {
//                     // when `this` refers to the global scope/object
//                     console.log(this.fistName);
//                 };
//                 const thirdInnerFunction = function () {
//                     console.log(this.fistName);
//                 };

//                 function secondInnerFunction() {
//                     console.log(this);
//                     console.log(this.fistName);

//                     const innerInner = function () {
//                         console.log(this.fistName);
//                     };

//                     innerInner();
//                 }

//                 innerFunction();
//                 secondInnerFunction();
//                 thirdInnerFunction();
//             });
//     }
// }
// let name1 = new User();
// name1.sayUser();

function greet(firstName = "noName", lastName = "NoLastName") {
  console.log(this);
  console.log(`hello Mr. ${lastName} ${firstName}`);
  console.log(`${this.firstName} is ${this.age} years old`);
}

// greet("Spyros");

let person = {
  firstName: "Dimitra",
  age: 27,
};

// Call invokes the function and allows you to pass in arguments one by one
greet.call(person, "Spyros", "Kalimeris");

// Apply invokes the function and allows you to pass in arguments as an array
greet.apply(person, ["Nikos", "Kalogeras"]);

// Bind returns a new function, allowing you to pass in a this array and any number of arguments

const newFunc = greet.bind(person, "Ioanna", "Alexopoulou");

newFunc();
