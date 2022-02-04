class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // This methods will be on the Prototype of the object not in the object itself
  calcAage() {
    console.log(` age: ${2022 - this.birthYear}`);
  }
}

let mat = new Person("mat", 37);

console.log(mat);

mat.calcAage();
