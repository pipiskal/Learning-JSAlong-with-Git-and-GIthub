// This is a small app to learn and write code with callback functions

// we will create a cazino game where we can play 3 games
// 1. black jack  --- 2. higher card ---- 3. paper/ scissor/ rock

let generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

let blackJack = () => {
  let sum = 0;
  console.log("you started playing BlackJack Nice!!");

  console.log("At the begining you get cards");
  let firstCard = generateRandomNumber(1, 11);
  let secondCard = generateRandomNumber(1, 11);
  sum = firstCard + secondCard;
  console.log(`Your hand is firstCard : ${firstCard}
  , the secondCard is : ${secondCard}, sum : ${sum}`);
  while (sum <= 21) {
    console.log("do you want to draw another card??");
    let answer = prompt("yes or no ??");
    if (answer === "yes") {
      let newCard = generateRandomNumber(1, 11);
      sum += newCard;
      console.log(`you draw ${newCard} and your sum now is ${sum}`);
      if (sum > 21) {
        console.log(`i am sorry but u lost! you got ${newCard}`);
      }
    } else {
      break;
    }
  }

  console.log(`your final hand has a sum of : ${sum}`);

  // check who's won
};

let higherCard = () => {
  console.log("you started playing higherCard Nice!!");

  // we can implement a game here
};

let paperGame = () => {
  console.log("you started playing paperGame Nice!!");

  //  we can implement the game here
};

function mainGame(game1, game2, game3) {
  console.log("pick an option what u want to play");
  console.log("You can type 1 or 2 or 3 to choose a game");

  let options = [game1, game2, game3];

  options.forEach((game, index) => {
    console.log(`${index} : ${game.name}`);
  });

  let answer = Number(prompt("Pick a number from 1 to 3"));

  // we call the appropriate function to start the game
  if (answer) options[answer - 1]();
}

mainGame(blackJack, higherCard, paperGame);
