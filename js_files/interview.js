// "use strict";
// HOISTING

// var foo  // undefined
// var bar // undefined

// console.log("bar : ", bar);
// bar = 15;
// var foo = 1;
// console.log("foo:", foo, "bar:", bar);
// var bar;

// undefined
// foo : 1 bar : 15

//-----------------------------------------

// greetings();
// var greetings = function () {
//   console.log("First greetings");
// };
// greetings();

// function greetings() {
//   console.log("Second greetings");
// }

// greetings();

//-------------------------------

// // var variable ; undefined
// var variable = 10;
// // invoked immmediatly
// (() => {
//   console.log(variable);
//   variable = 20;
//   console.log(variable);
// })();

// console.log(variable);
// var variable = 30;

// 10
// 20
// 20

//-------------------------------

// function createClosureArray() {
//   var badArr = [];
//   for (let index = 0; index < 5; index++) {
//     badArr[index] = function () {
//       return "n = " + index;
//     };
//   }
//   return badArr;
// }

// var badArr = createClosureArray();
// console.log(badArr);
// for (var index in badArr) {
//   console.log(badArr[index]());
// }

// function findSum(a, b) {
//   var sum = a + b;
//   return () => {
//     var avg = sum / 2;
//     return avg;
//   };
// }

// let averageOfTwo = findSum(2, 8);

// // lets create a private counter

// const privateCounter = function () {
//   let counter = 0;
//   return () => ++counter;
// };

// console.dir(averageOfTwo);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// }

// function createGoodStack() {
//   let items = [];
//   return {
//     getitems() {
//       console.log(items);
//     },
//     push(item) {
//       items.push(item);
//     },
//     pop(item) {
//       return items.pop();
//     },
//   };
// }

// const stack = createGoodStack();
// console.dir(stack);

// const multiply = function (a, b) {
//   console.log(arguments);
//   if (arguments.length === 1) {
//     return (num) => {
//       return num * a;
//     };
//   }

//   return a * b;
// };

// // const double = multiply(2);

// // console.log(double(5));

// // console.log(multiply(2, 4));

// console.log(multiply(2, 4));

// const double = multiply(2);

// const thrid = multiply(3);

// console.log(thrid(3));

// console.log(double(6));
// console.log(double(4));

fetch("test api").then((response) => {});
