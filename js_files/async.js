// Creating a new Promise

// Promise takes 1 argument an executor function

const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You win 💰"); // will mark the promise as a resolved promise
  } else {
    reject("You lose");
  }
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
