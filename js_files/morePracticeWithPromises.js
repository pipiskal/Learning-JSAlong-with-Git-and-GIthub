"use strict";

// old way for doing Ajax calls --> xml http request
const urlName = `https://restcountries.com/v3.1/name/`;
const urlNeibghor = "https://restcountries.com/v3.1/alpha/";

// // what we want to do we open the connection with the api and we want to GET information
// // 1st argument : http method, 2nd argument : endpoint
// const getCountryInfo = function (url, country) {
//   // creating a new request to perform Ajax call
//   const request = new XMLHttpRequest();
//   request.open("GET", url + country);
//   // then we need to send the request, to fetch the data in the background
//   request.send();
//   //   we will get the data when the asynchronous task is completed and loaded
//   //   so we use  the eventListener to check when is loaded and when it is we can use that data
//   request.addEventListener("load", function () {
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // lets get country and capital
//     console.log(
//       `Country : ${data.altSpellings[1]} and Capital : ${data.capital}`
//     );
//   });
// };

// getCountryInfo(url, "greece");

// lets do again the old way
// we want to sent a request to the server
// const request = new XMLHttpRequest();
// // what type of method we want to use and what will be the end point, lets open the connection

// request.open("GET", urlName + "greece");
// //since we opened the connection we need to send it to get the data
// request.send();
// // we might have send it , but send reeturn undefined cause its an asynchronous task we need to wait for a load even

// // arrow function dont have this keyword so we cant use it here
// request.addEventListener("load", () => {
//   // since in here its loadded we should have something back as a response
//   let data = request.responseText; // this is Json format so we need to convert it to js object
//   let [finalData] = JSON.parse(data);
//   // now we got the data in here we can do whatever we want
// });

// Instead of creating a XMLHttpRequest we can use the modern way of Js to do asynchronous work
// With Promises

// const fetchAndJson = function (url, country) {
//   return fetch(url + country).then((response) => response.json());
// };

// const getCountryData = function (country) {
//   return fetchAndJson(urlName, "ukraine")
//     .then((data) => {
//       let finalData = data[0];
//       console.log(
//         `country : ${finalData.name.common} Capital : ${finalData.capital}`
//       );
//       let neighbor = finalData.borders[0];
//       // and now we want to get the data for the neighbor as well
//       return fetchAndJson(urlNeibghor, neighbor);
//     })
//     .then((data) => {
//       let [neighborData] = data;
//       console.log(
//         `country : ${neighborData.name.common} Capital : ${neighborData.capital}`
//       );
//       return neighborData;
//     })
//     .then((data) => data);
// };

// let testData = getCountryData("ukraine");

// testData.then((data) => {
//   console.log(data);
// });

// lets do it again and again

// old way

const request = new XMLHttpRequest();
request.open("GET", urlName + "greece");
request.send();
request.addEventListener("load", function () {
  let [data] = JSON.parse(request.responseText);
  console.log(data);
});

// promises way

const table = `
    <table>
        
    </table>
`;

const getCountryData = function (country = "greece") {
  fetch(urlName + country)
    .then((response) => response.json())
    .then((data) => {
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // country2
      return fetch(urlNeibghor + neighbour);
    })
    .then((response) => response.json())
    .then((data) => console.log(data[0]));

  return 23;
};

// create an html element

document.body.innerHTML =
  "<button type = 'button' class='button'>Click me</button>";

let button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => console.log(getCountryData()));
