// with callback functions we basically Achieve abstraction
// the high order function doenst need to know what the lower level
// functions are doing its simply accepting them as arguments
// and we call them inside the function for a result

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split("");
  return [first.toUpperCase(), ...others].join("");
};

// this is a high order function -- it take in a function as argument
const transformer = function (str, fn) {
  console.log(`original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("javascript is the best!", upperFirstWord);

transformer("javascript is the best!", oneWord);

const high5 = function () {
  console.log("test test");
};

document.body.addEventListener("click", high5);

// Another example of call back functions

let upperFirstLetter = function (text) {
  let [first, ...others] = text;
  let upper = first.toUpperCase();
  return [upper, ...others].join("");
};

let checkAge = (age) => (age >= 18 ? true : false);

let createMoviesUnder18 = () => {
  let movies = [
    "spiderman",
    "iroman",
    "catwoman",
    "avengers",
    "batMan",
    "superMan",
    "pacMan",
    "antMan",
  ];
  let fourMovies = [];
  // we will create 4 movies
  for (i = 0; i <= 4; i++) {
    fourMovies.push(movies[Math.floor(Math.random() * movies.length)]);
  }
  return fourMovies;
};

let getAndValidateInfo = function (firstName, age, fName, fAge, moviesUnder18) {
  if (fAge(age)) {
    console.log(`Mr/Mis ${fName(firstName)} your age is :  ${age}
        you can pass`);
  } else {
    console.log("you are under 18 -- i am sorry you cant see Thriller Movies");
    console.log("But u might want to choose one of the following  :");

    let movies = moviesUnder18();
    movies.forEach((movie, index) => {
      console.log(`${index + 1} : ${movie}`);
    });

    // here we can axpand and even ask for an input

    // and keep going with the callback functions
  }
};

getAndValidateInfo(
  "spyros",
  16,
  upperFirstLetter,
  checkAge,
  createMoviesUnder18
);

// High Order Function can also return a function as well
// hight order FUnctions are nothing more that function that can get
// other functions as arguments and can return function as well
// since functions are first class citizens they are just like a value type
// like number , String or anything else and we can work with them and pass them
// like any other value. Can store them into variables etc

//closures is another topic

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet("Hello")("Spyros");

let greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

let greet3 = (greeting) => (name1) => console.log(`${greeting} ${name1}`);

greet2("hi")("Kalimeri");

greet3("How are you")("Dimitra?");
