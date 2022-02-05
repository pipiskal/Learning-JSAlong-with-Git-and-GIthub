"use strict";

// Within classes i need to understand Prototypical inheritance

// to be able to create an object we have constructor functions
// and what this is is a simple function that uses the this keyword.

// all the magic is happening with the new keyword

const Player = function (firstName, lastName) {
  // we can prove here that the this keyword points to an empty object;
  console.log(this);
  // we prove that the empty newly created object has access to __proto__ property than points to its constructor function
  // in our case the function that created it is the Player.
  console.log(this.__proto__);
  this.firstName = firstName;
  this.lastName = lastName;
};

// What is happening here is that the new Keyword is responsible for 4 things

//1. its creates an empty object
//2. Addds a property to the new object (__proto__)that links to the constructor functions prototype object
//3. binds the newly created object to this and now we can refer to the object with this.
// 4. in the end it returns the object it self, reuterns this

let player1 = new Player("Spyros", "Kalimeris");

console.log(player1);

// let me try something here

// to be able to understand the access to the constructor function

const greet = function (name) {
  // this is undefined , it doenst have an instance to point to
  console.log(this);
  this.name = name;
  console.log(`hello ${this.name}`);
  console.log(this);
  // the second value in the array is the fuction it self
  return [this, this.__proto__];
};

// what will happen if i try to call normally this constructor function where this will point??

// greet("Spyros");
// it will raise a TypeError because this points to undefined
// -- we can resolve this with call, apply and bind methods if we want to this will be able to
// to point to an instance object but we will check it a bit later

// i made a mistake here , i tried to create a new object without using the new keyword
// so greet("Spyros") is a normal function call so this again points to undefined
// let greet1 = greet("Spyros");

let greet1 = new greet("Spyros");

// what is constructor functions prototype object ???

console.log(Player.prototype);
