// a closure is happening when a function has access to the parent variables(can be other functions as well)
// even if the parent function has stopped executing;

// the closure gets created when we declare the function not
// when the function gets executed

const parentFunction = function (name) {
  let counter = 0;
  let age = 29;

  const getNameAndAge = () => {
    return `${name}, age : ${counter + 29}`;
  };
  // child function
  return function () {
    // inner counter
    console.log(getNameAndAge());
  };
};

const test = parentFunction("Spyros");
test();

console.dir(test);

// Emulating private methods with closures

var counter = (function () {
  let count = 0;
  function changeBy(value) {
    count += value;
  }
  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    getValue: () => {
      return count;
    },
  };
})();

console.log(counter.getValue());
counter.increment();
counter.increment();

console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());

console.dir(counter.increment);

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // instead of add a function to get the full name inside the function
  // like this

  //   this.getFullName = function () {
  //     console.log(`full name is : ${this.firstName} ${this.lastName}`);
  //   };
}

Person.prototype.getFullName = function () {
  console.log(`full name is : ${this.firstName} ${this.lastName}`);
};

// or we can write a class like that, and we can even declare private variables and functions with #

class Person2 {
  // each person with have a private variable called sex that will be either man or woman
  #sex;
  // sexType 0 for man 1 for woman
  constructor(firstName, lastName, age, sexType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sexType = sexType;
    this.#addSex();
  }
  #addSex() {
    if (this.sexType === 0) {
      this.#sex = "man";
    } else if (this.sexType === 1) {
      this.#sex = "woman";
    }
  }

  getSex() {
    return this.#sex;
  }
}

let person2 = new Person2("dimitra", "alex", 27, 1);

// person can have access to the public variables as firstname, lastname, age, sextype
// and method getSex cause its public

// but not the private method #addSex or variable #sex
