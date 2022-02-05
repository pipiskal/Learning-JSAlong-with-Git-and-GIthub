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
};

// what will happen if i try to call normally this constructor function where this will point??

// greet("Spyros");
// it will raise a TypeError because this points to undefined
// -- we can resolve this with call, apply and bind methods if we want to this will be able to
// to point to an instance object but we will check it a bit later

// i made a mistake here , i tried to create a new object without using the new keyword
// so greet("Spyros") is a normal function call so this again points to undefined
// let greet1 = greet("Spyros");

let greet1 = new Player("Spyros", "Kalimeris");

// what is constructor functions prototype object ???

// prototype is a property of a function model and its the constructor function
console.log(Player.prototype);

//greet1 is not a function is an object so it doenst contain the prototype property so we get undefined

console.log(greet1.prototype);

// but every object has a __proto__ object lunked with its creation

console.log(greet1.__proto__);

console.log(Player.prototype === greet1.__proto__);

// if i create an empy object

let empty = {};

// since its an object it has not prototype property
console.log(empty.prototype); // i will get undefined;

//buts lee the proto object that its linked with uppon creation

console.log(empty.__proto__);

// and if we see its type as well we will see that its an object

console.log(typeof empty.__proto__);

//and whats the object that is linked with that object
// lets get it

let protoObjectOfEmptyObject = empty.__proto__;

// is is null , it doenst go higher than that
// the highest point is the object it self with all its methods like hasOwnProperty etc.
console.log(protoObjectOfEmptyObject.__proto__);

//So again object.__proto__ --> brings us the actual object that is linked with our object on creation

// lets test it with a function

let testFunc = function (name, age) {
  console.log(name, age);
};

console.log(testFunc.__proto__);
// its proto of proto is the object
console.log(testFunc.__proto__.__proto__);

// and then is null
console.log(testFunc.__proto__.__proto__.__proto__);

// but since its a function it as a prototype property that we can see

console.log(testFunc.prototype);

let player3 = new Player("Nikos", "karavanis");
let player4 = new Player("Dimitra", "Alex");
let player5 = new Player("Natasha", "Ana");

console.log(player3.__proto__.__proto__.hasOwnProperty("length"));
console.log(player4);
console.log(player5);

// Every single instance of PLayer its first prototype with be the constructor function

console.log(Player.prototype === player3.__proto__);
console.log(Player.prototype === player4.__proto__);
console.log(Player.prototype === player5.__proto__);

// Lets create another constructor function

const Student = function (name, birthYear) {
  // i can create variables that will will only be accessed from the inside of the function
  let averageGrade = 0;
  this.name = name;
  this.birthYear = birthYear;

  // this is the right way because not its object it will be able to use the calc age
  // cause it gets inherrited it doesnt get created each time for each object

  Student.prototype.getInfo = function () {
    return `My name is ${
      this.name
    } and my age is : ${this.calcAge()} and my average is : ${averageGrade}`;
  };

  Student.prototype.calcAge = function () {
    return 2022 - this.birthYear;
  };

  // lets add anotherone for full description, using arrow function this time

  // we should never do this , we should not add methods directly to the constructor function because
  // every single object will carry that function with its self so the speed and quality of the app
  // will drop down, we should add the methods to the constructors prototype instead.

  // we are going to create basically a function inside another function

  // this.calcAge = function () {
  //   console.log(`${this.name} is ${2022 - this.birthYear} years old`);
  // };
};

// arrow functons doent have this so this will point to the global object

let student1 = new Student("Spyros", 1992);
let student2 = new Student("Dimitra", 1995);
let student3 = new Student("Natasha", 1967);
let student4 = new Student("test", 1995);

// lets say that i want each student to have a method to calculate its age

// so now we can do this: But instead of doing this lets add the calc age method
// directly to the prototype object of constructor's function
//
console.log(student3.calcAge());

console.log(student2.getInfo());
console.log(student3.getInfo());
console.log(student1.getInfo());

console.log(student1.averageGrade);

// we can also inherit a function by simply user the call method on the function that we want

// Now that we understood the constructor functions lets see the classes
// class is a syntantc sugar cause everything under the hood is happening exactly as we
// did with constructor functions

class Person {
  #sexPreference = "woman";

  // class field
  testValue = 10; // it is accessible from every object that gets created
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
  // i can created private variables inside the class

  // here we can have the methods

  // lets try a private method, we can use the private method inside the class
  #privateMethod() {
    return "hello world";
  }

  calcAge() {
    return 2022 - this.birthYear;
  }

  getInfo() {
    console.log(
      `${this.#privateMethod()} my name is ${
        this.firstName
      } and i am ${this.calcAge()} years old`
    );
  }
  // it make them properties
  set setSexPreference(preference) {
    this.#sexPreference = preference;
  }
  // same here it will apear as property
  get getSexPreference() {
    return this.#sexPreference;
  }
}

let person1 = new Person("Spyros", "kalimeris", 1992);

person1.getInfo();

// so can even have private fields / variables / properties in our class
console.log(person1.getSexPreference);
person1.setSexPreference = "woman again i am not changing";
console.log(person1.getSexPreference);

console.log(person1.testValue);

let person2 = new Person("Dimitra", "Alex", 1995);

// its the same field/ property with the same value
console.log(person2.testValue);
