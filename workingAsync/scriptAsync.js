"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  const flag = data.flags.png;
  const countryName = data.name.common;
  const region = data.region;
  const population = data.population;

  const getLanguageShortType = Object.keys(data.languages);
  const languageKey = getLanguageShortType[0];

  const language = data.languages[languageKey];

  const getCurrencyArea = Object.keys(data.currencies);
  const currencieKey = getCurrencyArea[0];

  const currency = data.currencies[currencieKey].name;
  const currencySymbol = data.currencies[currencieKey].symbol;

  const html = `
        <article class="country ${className}">
          <img class="country__img" src=${flag} />
          <div class="country__data">
            <h3 class="country__name">${countryName}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${population}</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency} ${currencySymbol}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// OLD WAY OF DOING ASYCHRONOUS REQUESTS

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   // we first create a request
//   const request = new XMLHttpRequest();
//   // we open it and specify what type it will be , POST , GET etc and the api endpoint
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   // fetching the data in the background, but we dont know when this will end so
//   request.send();
//   //we need to register a callback for the load event
//   // when the data arrives this callback function will be called
//   request.addEventListener("load", function () {
//     // is the same like request.responseText
//     // we get a Json format and we need to convert it to js object
//     // also using destructuring cause the object we get its the first item in an array
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render Country 1
//     renderCountry(data);

//     // Get neighbour country 2
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // SECOND AJAX CALL for the neighbour country

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// // we have to ajax calls at the same time
// // this means that we dont know exactly witch one is going to end first
// // so if we wanted to always have a specific order we need to chain the request
// // meaning that the one will run only if the first one is completed succesfully
// getCountryAndNeighbour("portugal");

// THE MODERN WAY WITH PROMISES AND ESCAPING CALLBACK HELL

//Promise is an Object that is used as a placeHolder for the future result
// of an asynchronous operation

// we dont know when the server gives the data back it make take a long period of time
// so our promise will let us know if the operation ended succesufully or failed

// Or we can say that a promise is a container for a future value might be anything objects, arrays w/e

// what we get with promises is that

// 1. we no longer need to rely on events and callbacks passed into asynchronous functions to handle
// asynchronous results

// 2. instead of nesting callbacks we can escape callback hell by chaining the promises

//a promise returns a promise and thats why we can chain

// the promise lifeCycle

// // doing a simple get request
// const request = fetch("https://restcountries.com/v3.1/name/greece");
// // we get a promise back with the fetch API
// // so our data is in this promise
// console.log(request);
const getJson = function (url, errorMsg) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // we assume that the promissed will be fulfilled
  //   fetch(`https://restcountries.com/v3.1/name/${country}`)
  //     // then method we pass a callback that will be executed when we get a result value
  //     .then(function (response) {
  //       // we get a ReadableStream back so we need to call the Json method on the response
  //       // now this will be a new promise and we need to handle this as well
  //       return response.json();
  //     })
  //     .then(function (returnedData) {
  //       const [data] = returnedData;
  //       console.log(data);
  //     });
  // lets reWrite this with arrow functions so it be easier to read

  //flat chain of promises

  //always return the promise and handle it outside

  //the first callback of then method is when the fetch is successfull
  // the second one is for the rejected

  // if we throw an error the promise will get rejected and the catch method with
  getJson(
    `https://restcountries.com/v3.1/name/${country}`,
    `Couldn't find Country with name : ${country},  try again!`
  )
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);
      let neighbour = "";

      try {
        neighbour = data[0].borders[0];
      } catch (TypeError) {
        neighbour = false;
      }

      if (!neighbour) {
        throw new Error("This country has no neighbours!");
      }
      // Country 2
      // we return the promise so we can chain
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `no neighbour for this country`
      );
    })
    .then((data) => {
      renderCountry(data[0], "neighbour");
    })
    .catch((err) => {
      // its called if a promised gets rejected
      // catch also returs a promise
      console.error(err);
      renderError(`Something Went Wrong ! ${err.message}. Try again`);
    });
  // .finally(() => {
  //   // finally will alaways be called even if its fulfilled or rejected
  //   // good for operation spinners
  // });
};

btn.addEventListener("click", function () {
  getCountryData("greece");
});

// lets try to search for something that doenst exist

//fetch rejects only when there is no internet connection


const whereAmI = function(){
  
} 