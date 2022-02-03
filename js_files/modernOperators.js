const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: [
    "Lewandowski",
    "Gnarby",
    "Lewandowski",
    "Hummels",
    "Lewandowski",
    "Lewandowski",
    "Lewandowski",
    "Hummels",
    "Hummels",
    "kalimeris",
  ],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals(...players) {
    players.forEach((player) => {
      console.log(`the player's name is : ${player}`);
      console.log(`and score ${players.length}`);
    });
  },
};

// Create one player array for each team called players1 playears2

// i can the players by accessing the object , players is an array having 2 arrays

// let players1 = game.players[0];
// console.log(players1);

// but what we want the other way as well with destructuring

let { players } = game;

let [players1, players2] = players;

console.log(players1);
console.log(players2);

//2.

let [gk, ...restTeam] = players1;

let teamOne = {
  gk,
  fieldPlayers: restTeam,
};

console.log(teamOne);

// 3.

let allPlayers = [...players1, ...players2];
console.log(allPlayers);

///4.

let players1Final = [...players1, "player1", "player2", "player3"];
console.log(players1Final);

// 5. destructuring an object

let { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

// 6.

game.printGoals("nikolas", "spyros", "levadofsko");

// 7.

console.log(team1 > team2 || "team 1 is more likely to win");
console.log(team1 < team2 || "team 2 is more likely to win");

// End of first set of practice

// Starting Practice number 2

// 1.
game.scored.forEach((scorrer, index) => {
  console.log(`Goal ${index + 1} : ${scorrer}`);
});

// 2.

let odds = game.odds;

// for (let item of Object.values(odds)) {
// }

let oddsValues = Object.values(odds);

let average =
  oddsValues.reduce((sum, odd, arr) => {
    sum += odd;
    return sum;
  }) / oddsValues.length;

console.log(average);

// 3.

// gives me an array of arrays with 2 values key :  value
oddsEntries = Object.entries(odds);

// since its an array we can loop through it

oddsEntries.forEach((odd) => {
  let [key, value] = odd;
  if (key === "x") {
    console.log(`Odd of draw : ${value}`);
  } else {
    console.log(`Odd of victory ${game[key]}  : ${value} `);
  }
});

let scorrers = game.scored;

console.log(scorrers);

// find the unique players from the array

objectScorrers = {};

scorrers.forEach((scorrer) => {
  if (!Object.keys(objectScorrers).includes(scorrer)) {
    objectScorrers[scorrer] = 1;
  } else {
    objectScorrers[scorrer] += 1;
  }
});

console.log(objectScorrers);
