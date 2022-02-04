// ok so closures

// closure is somethig that is happening in our code
// we cannot create closures on demand like we create an array

// because closures is the ability of a function to remember
// all the variables from its parent functions where it was created

// example 1

let game = function () {
  let score = 0;
  return function () {
    score += 1;
    console.log(score);
  };
};

// so lets call our game function

let activeScore = game();

// this will print the function to the console because it
// simply returns  function
console.log(activeScore);

// lets see what will happen when we call activeScore though

// activeScore();
// activeScore();
// activeScore();

//active score even if it doenst have a score variable in its scope
// it has access to the score variable from the function that was created
// even if the game function is done running

// so this is a closure is basically a bag back with variables
// that hold all the variables from the previous functions

// example 2

// lets say that 2 nested return functions

const game2 = function () {
  let score = 0;
  let time = 0;

  return () => {
    // everyTime this function is called it will increase the score by 1
    score += 1;
    // but it will also return another function that will add 10 to time
    return () => {
      score += 1;
      time += 10;
      console.log(`score : ${score}`);
      console.log(`time : ${time}`);
      return [score, time];
    };
  };
};

const f1 = game2();

const f2 = f1();

// now f2 has access to the time and score variable because their birth
// place was the game2 function
let [score, time] = f2();

// we can also see the closure that contains with console.dir

// and it hold the variables with its last value
console.dir(f2);

console.log(score, time);

// example 3

// here we we use the () to create an instant revoke of the function
// since its an expression now we can call it immidiatly

// also the function that gets return from the first call of function
// because of the closure it was access to the header element
// and what since we are excecuting it as well
// it does : when the header is clicked it changes the color to blue

// again this is possible because it know what element to change
// and where to add the eventLister because of the closure

// it can access the variables of the first function

(function () {
  const header = document.querySelector(".header");
  header.style.color = "red";
  return () => {
    header.addEventListener("click", () => {
      header.style.color = "blue";
    });
  };
})()();
