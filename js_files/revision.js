const url = "https://restcountries.com/v3.1/name/";
const urlCode = "https://restcountries.com/v3.1/alpha/";
// old way

const getCountryInfo = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", url + country);
  request.send();
  console.log(request);
  request.addEventListener("load", function () {
    console.log(request);
    if (request.status !== 404) {
      let data = JSON.parse(this.responseText);
      console.log(data[0]);
    } else {
      let error = new Error("The country doest not exist");
      console.error(error);
    }
  });
};

const getCountryData = function (country) {
  fetch(url + country)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[0]);
    });
};

const getCountryInformation = function (country) {
  fetch(url + country)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("the coutry you provided is not valid");
      }
      return response.json();
    })
    .then((data) => {
      console.log(
        `country : ${data[0].name.common}, capital : ${data[0].capital}`
      );
      // let get the neighbour as well
      let neighbour = data[0].borders[0]; // we will get the first country
      //   let neighbour = "dadadad";
      // and we want to get the details for that country as well
      if (!neighbour) {
        throw new Error("That country has no neighbours");
      }
      return fetch(urlCode + neighbour);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("the neighbour you provided is not valid");
      }
      return response.json();
    })
    .then((data) => {
      console.log(
        `country : ${data[0].name.common}, capital : ${data[0].capital}`
      );
    })
    .catch(function (err) {
      console.error(err);
    })
    .finally(function () {
      console.log("We are done with those promises");
    });
};

// getCountryInformation("greece");

// lets create some closures to be able to answer

// what is a closure?

// a closure is happening when a function can access the variables of its parent function
// even when the parent function is done excecuting

// its the ability of the inner function to remember the variables of the
// parent functions at birth place

// a closure is created on the decleration of the function not when it gets executed

// Consuming Promises with Async / Await

// adding async it will make the function an asychronous function, when its done it will return a promise
const whereAmI = async function (country) {
  // await will stop the execution of this function await / until fetch is done
  // this will not stop the main thread of execution cause its running asynchronously.
  const response = await fetch(url + country);
  // await return the promise result
  const [data] = await response.json();
  console.log(data);
  console.log(`country : ${data.name.common}, capital : ${data.capital}`);
  let neighbour = data.borders[0];

  const response2 = await fetch(urlCode + neighbour);
  const [data2] = await response2.json();
  console.log(`country : ${data2.name.common}, capital : ${data2.capital}`);
};

let test = whereAmI("greece");

console.log("FIrst");
