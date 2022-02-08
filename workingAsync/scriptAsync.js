"use strict";

const getCountryData = function (country) {
  const btn = document.querySelector(".btn-country");
  const countriesContainer = document.querySelector(".countries");
  ///////////////////////////////////////

  //OLd way of doing Asynchronous request to the server

  const request = new XMLHttpRequest();

  // we open the request that we want to make to a specific endpoint
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  // and then for the server to get it we need to sent it
  // this will start to work an asychronous way and it will finish when its done, when it has the data
  request.send();

  // but request.send wont give us the data directly
  // we will use an eventListener with load, so when the data is loaded from the request.send
  // we will run the function to get it back
  request.addEventListener("load", function () {
    // this in an eventListener corresponds to the object that the event is added
    // if it was an html element this keyword with point to that element
    // now it points to the request object

    // destructuring the first element of the array
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${
      data.languages[Object.keys(data.languages)[0]]
    }</p>
    <p class="country__row"><span>💰</span>${
      data.currencies[Object.keys(data.currencies)[0]].name
    } ${data.currencies[Object.keys(data.currencies)[0]].symbol}</p>
  </div>
</article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("greece");
getCountryData("portugal");
