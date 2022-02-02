// we can create objects like this

// Remeber that arrow functions cant use the this keyword for the object

let person1 = {
  firstName: "Spyros",
  lastName: "Kalimeris",
  birthYear: 1992,
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  summary: function () {
    // because we are calling the calcAge here we have access to the age attribute;
    this.calcAge();
    let description = `${this.firstName} is ${this.age} years old and he is a programmer`;
    return description;
  },
};

// lets add another atribute to the person1 object

person1.nationality = "Greek";

console.log(person1);

// we need to call the function before we will be able to access the age
console.log(person1.age); // --> this willreturn undefined

person1.calcAge();

console.log(person1);

// So we can create methods in the object that even create new attributes for
// the model itself

console.log(person1.summary());

// excersice to learn a bit more about objects

let mat = {
  fullName: "Mat Murdock",
  bodyMass: 80,
  height: 1.78,
  calcBmi: function () {
    return this.bodyMass / (this.height * this.height);
  },
};

let foggy = {
  fullName: "Foggy Nelson",
  bodyMass: 115,
  height: 1.91,
  calcBmi: function () {
    return this.bodyMass / (this.height * this.height);
  },
};

let matsBmi = mat.calcBmi();
let foggysBmi = foggy.calcBmi();

console.log(matsBmi);
console.log(foggysBmi);

// lets say we want to itterate over our object
// we can do that with the for in loop

// we can get each key
for (let key in mat) {
  console.log(`${key} : ${mat[key]}`);
}

console.log(mat.key);

console.log(Object.keys(mat));
console.log(Object.values(mat));

// a bit more of for loops

// lets say that we want to check an array of 10 items has values
// higher than 5 and print them to the log

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] <= 5) continue;
  if (array1[i] === 8) break;
  console.log(array1[i]);
}

// so we can use continue to conitune looping for ignore the rest of the code
// inside the loop after the continue statement
