// This is a small app to learn and write code with callback functions

// we will create a cazino game where we can play 3 games
// 1. black jack  --- 2. higher card ---- 3. paper/ scissor/ rock

let blackJack = () => {};

let higherCard = () => {};

let paperGame = () => {};

function mainGame(game1, game2, game3) {
  console.log("pick an option what u want to play");
  console.log("You can type 1 or 2 or 3 to choose a game");

  let options = [game1, game2, game3];

  options.forEach((game, index) => {
    console.log(`${index} : ${game.name}`);
  });
}

mainGame(blackJack, higherCard, paperGame);

console.log(blackJack.name);
