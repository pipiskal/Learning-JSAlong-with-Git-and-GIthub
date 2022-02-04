"use strict";

// Regular functions the this keyword point sto undefined

let test = function (name, age) {
  console.log(`${name} is ${age} years old ${this}`);
};

test("spyros, 29");

// methods of the object though points to the object it self with this
// so now we are able to point to the object it self with the this keyword

let person1 = {
  name: "spyros",
  age: 29,
  description(eyes) {
    console.log(`${this.name} is ${this.age} years old ${this}`);
  },
};

person1.description();

// it will be the same if we wrote perso1.name

//tell javascript explicity what the this keyword will be like
// where it will point

// we have 3 function methods
// call
// apply
// bind

// so let me get the description function out of the person1
// and use it as a normal function

let normalDescription = person1.description;

// this cause an error cause the this keyword points to undefined
// console.log(normalDescription());

// so lets use our function methods to let the normalDdescription function
// to know to what object it will point

// so we specifically saying what the object will be
// the first argument is the object , then are the function arguments
normalDescription.call(person1);

// There is also Apply Method

// is exactly as save but it doenst take thearguments comma seperated
// but as an array

normalDescription.apply(person1, [1, 2, 3]);

// call is used with modern javascript

// lets create a new object that will belong to a restaurant
// and give it some functionality like reserveTable

let restaurant1 = {
  name: "Armagedon",
  area: "Galatsi",
  bookings: [],
  openDays: ["mon", "sat", "sun"],
  openHours: {
    mon: "open from 5pm to 12am",
    sat: "open from 9pm to 2am",
    sun: "open from 9pm to 3am",
  },

  bookTable(name, numberOfPeople) {
    console.log(
      `You booked a table at ${this.name}, area:  ${this.area} with name : ${name} and number of People : ${numberOfPeople}`
    );
    this.bookings.push(`there is a booking from ${name} at ${this.name}`);
  },
};

restaurant1.bookTable("spyros", 5);

console.log(restaurant1.bookings);

// lets get the function to use it out of the object

let book = restaurant1.bookTable;

// this will cause an error again because the this keyword points to
// undefined.
// book("takis", 6);

// lets use the call  method again to call it with the correct object

book.call(restaurant1, "nikos", 10);
book.call(restaurant1, "natasha", 4);

console.log(restaurant1.bookings);

let person2 = ["takis", 3];

// first argument is the object that this will refer
// the rest are the arguments of the function

// we use the spread operator because the call needs its values
// seperated by comma "name", 13, 12 etc
book.call(restaurant1, ...person2);

// let now use the bind method

// bind method doenst not call / invoke te function immediatly
// but it return a new function with the this keyword binded to the obejct
// we passed. for example

// we bind the booking1 function to always be called with restaurant1
const booking1 = book.bind(restaurant1);
// and we call it as a normal function with arguments
booking1("pipis", 4);

// lets create a new restaurant that it will now have the function

let restaurant2 = {
  name: "Lamaron",
  area: "Kypseli",
  bookings: [],
  openDays: ["mon", "sat", "sun"],
  openHours: {
    mon: "open from 5pm to 12am",
    sat: "open from 9pm to 2am",
    sun: "open from 9pm to 3am",
  },
};

// we can bind restaurant2 as well

// and we can bind it with default arguments
const booking2 = book.bind(restaurant2, "spyros", 5);
// not this is bind to restarant 2 and name will always be spyros and people will be 5
booking2();

// if we try to call that function with other arguments it will not work
// isnt working it will get called with the bound arguments
booking2("kalimeris soyros", 2);

// ---------------------------------------------

const addTax = (rate, value) => console.log(`the tax is : ${value * rate}`);

const addVat13 = addTax.bind(null, 0.13);
const addVat24 = addTax.bind(null, 0.24);
console.log(addVat13(100));
console.log(addVat24(1200));

// so we now want to do it by returnning the function with the vat

const returnFunctionWithTax = (tax) => {
  return addTax.bind(null, tax);
};

let test1 = returnFunctionWithTax(0.13);

test1(100);
