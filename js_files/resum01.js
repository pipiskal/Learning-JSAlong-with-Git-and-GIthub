"strict mode";

// primitive types

// string , number , null , undifined , symbol , bigint, NaN

//reference types

//objects , arrays , sets, functions --> everything that is an objects and evrything is except the primitives

// we have the conditiion statements --> if , lese if , else

// but we also have the tenerar operator

// condittion --> a>10 ? return if true : return if false

let arr = [1, 23, 4, 5, 6, 7, 8, 99, 0, 23];

arr.forEach((item) => {
  item > 10 ? console.log(item) : console.log(`${item} is not higher than 10`);
});

// we can unpuck an array and an object

let arr1 = [1, 2, 3];

let [a, b, c] = arr1;
console.log(a, b, c);

let object1 = {
  firstName: "Spyros",
  lastName: "kalimereris",
};

// inside the bracket we need to have the keys
// first is always the key and then is the name that you want to access

let { firstName: name1, lastName: surname } = object1;
console.log(name1, surname);

let arr2 = [1, 23, 4, 5, 6, 10, 11, 13, 14, 89];

// now arr3 is a copy of arr2 and its not by reference its by value;
let arr3 = [...arr2];

console.log(arr2);
console.log(arr3);

arr2.push(100);
console.log(arr2);
console.log(arr3);

//Rest of the the elements

let [test1, test2, ...theRest] = [...arr2];

console.log(test1, test2, theRest);

// with can also use the ... in a function to be able to get any number of arguments

// we create an arrow function

let testFunction = (...array) => {
  array.forEach((element) => {
    console.log("this is exelent", element);
  });
};

testFunction(...arr2);

// how to use logical operators

// So we can use || and && to return values based if they are trythy or falsy

//  falsy values are : "", 0, null, undefined, NaN, false,

// Everything else is a Truthy value; like "1" , "dada", 1 ->is truthy

// We can use that into our advanage like that

let value = "" || 0 || null || 100 || undefined;
// it is going to be 100
// because it will stop and return the first truthy value that it will find
// and ignore all the rest
console.log(value);

// The opposite is for && , it will stop at the first falsy value
// and return it and it will ignore all the rest

let value1 = null && "" && 0 && null && 100 && undefined;
console.log(value1);

console.log("test" + 3); // string always win when adding

// this will return NaN
console.log(2 + 4 + 5 - "test" + 3);

// checking equality always use === cause its checking for for value and type
console.log(2 == "2");
console.log(2 === "2");

// lets work a litle but more with arrays

//we are going to use map.
// map is able to transform the values of the array with a callback function
// it doenst change the elements of the original array
// it returns the new array and the array has the exact same length as
// the one given it cannot filter the array
// for that we use .filter

console.log(arr2);

// lets say that i want an another array like arr2 but to add 10 to each element

let newArr1 = arr2.map((element, index, arr) => {
  return element + 10;
});

console.log(newArr1);

// we also can use for each to loop over an array

// performs a speccific action for eeach element of the array
// it doenst mutate the orriginal array
// it doenst return anything even if we and the return inside the callback
// that why we cannot chain actions

// the forEeach it self doenst not mutate the array but
// the callback Function can do it as we want
arr2.forEach((element, index) => {
  let item = element + 10;
  console.log(item);
  arr2[index] = item;
});

console.log(arr2);

//we also have filter
// basically returns the elements that pass a psecific condition
// and that can be anything

// so i our case we will accept the items that are higher than 40

//filter returns the values
// it doenst mutate the original array
// it checks the if element sattisfies an condition and returns if true
// it doent care what we are doing it only need a true or false in the end

let testArr4 = arr2.filter((element, index) => {
  if (element > 20) return element;
});

// this is not the same , map will return every single item
// cause it returns the same ammount of length as the passed array
let testArr5 = arr2.map((element, index) => {
  if (element > 20) return element;
});

console.log(testArr4);

console.log(testArr5);

// a more practical example
// lets say that we have 3 students and we have information about their birth year
// if their age are higher than 13 they are allowed to see spiderman

// we are going to create 3 objects
// we will do this later with classes so we dont have to repeat everysingle one

let student1 = {
  firstName: "nikos",
  lastName: "kal",
  age: 14,
  grade: 32,
};

let student2 = {
  firstName: "julia",
  lastName: "meraki",
  age: 13,
  grade: 18,
};

let student3 = {
  firstName: "mark",
  lastName: "davinson",
  age: 12,
  grade: 21,
};

let students = [student1, student2, student3];

// so i want to create a new array filtered with students that
// their age is is === or > 13

let higherStudents = students.filter((student, index) => {
  return student.age >= 13;
});

console.log(higherStudents);

// now i want to sort the array by students grade
// highest grade goest first as an element

// sort() mutates!!! the original array
// it also return if we want another array sorted

students.sort((a, b) => (a.grade > b.grade ? 1 : -1));

console.log(students);

for (let item of students.entries()) {
  console.log(typeof item);
  console.log(item);
}
