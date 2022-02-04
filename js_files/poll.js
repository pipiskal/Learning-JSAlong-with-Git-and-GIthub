const poll = {
  question: "Whats your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  promptMessage: "What is your favorite programming language?",
  registerNewAnswer() {
    this.promptMessage;

    this.options.forEach((language) => {
      console.log(language);
    });

    while (true) {
      let answer = prompt("plz provide your number it should be from 0 to 3");
      console.log(answer);
      let answerNum;
      if (answer === null) {
        console.log("you canceled its ok take care");
        break;
      }
      // if the user provides something else like a string it will return Nan
      answerNum = Number(answer);
      // so it will go directly to the else statement
      if (answerNum >= 0 && answerNum <= 3) {
        console.log(`You selected the option ${Number(answer)}`);
        this.answers[answer] += 1;
        this.displayResults();
        break;
      } else {
        console.log(`You should give an valid answer , an number from 0-3`);
      }
    }
  },
  displayResults(type = this.answers) {
    if (Array.isArray(type)) {
      console.log(type);
    } else if (typeof type === "string") {
      console.log(type);
    }
  },
};

let pollRegister = poll.registerNewAnswer.bind(poll);

let pollButton = document.querySelector(".poll");

pollButton.addEventListener("click", pollRegister);

// lets get ther displayResults out of the object and use it as a normal function

let array1 = [5, 2, 3];
let text = "5, 2, 3";

let display = poll.displayResults;

display.call(array1, array1);
display.call(text, text);
