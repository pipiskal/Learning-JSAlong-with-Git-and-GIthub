const addUserBtn = document.getElementById("add-user");
const doubleMoneyBtn = document.getElementById("double");
const showMillionariesBtn = document.getElementById("show-millionaires");
const sortByWealthBtn = document.getElementById("sort");
const sumAllBtn = document.getElementById("calculate-wealth");
const main = document.getElementById("main");
const peopleList = document.querySelector(".people-list");

let people = [];

const addPerson = function (person) {
  people.push(person);
};

function updateDom(info = people) {
  // we need to clear the view before
  peopleList.innerHTML = "";
  // we need to create a new element
  info.forEach((el) => {
    const element = document.createElement("div");
    element.classList.add("person-wealth");
    element.innerHTML = `<strong> ${el.firstName} ${el.lastName} </strong>  <strong> ${el.wealth}</strong>`;
    peopleList.appendChild(element);
  });
}

const getRandomUser = async function () {
  const person = {};
  const response = await fetch(
    "https://random-data-api.com/api/users/random_user"
  );
  const data = await response.json();
  person.firstName = data.first_name;
  person.lastName = data.last_name;
  const money = Math.floor(Math.random() * 1000000);
  person.wealth = money;
  addPerson(person);

  updateDom();
};

function doubleMOney() {
  people = people.map((person) => {
    return { ...person, wealth: person.wealth * 2 };
  });
  updateDom(people);
}

function showOnlyMillionaires() {
  const millionaires = people.filter((person) => {
    return person.wealth > 1000000;
  });

  updateDom(millionaires);
}

function calculateAllWealth() {
  const entireWealth = people.reduce((total, current) => {
    return total + current.wealth;
  }, 0);

  const element = document.createElement("div");
  element.classList.add("entire-wealth");
  element.innerHTML = `<strong> Entire Wealth </strong>  <strong> ${entireWealth}</strong>`;
  peopleList.appendChild(element);
}

function sortByWealth() {
  const sortedData = people.sort((a, b) => {
    console.log(a, b);
    return b.wealth - a.wealth;
  });

  updateDom(sortedData);
}

// Event Listeners

addUserBtn.addEventListener("click", getRandomUser);
doubleMoneyBtn.addEventListener("click", doubleMOney);
showMillionariesBtn.addEventListener("click", showOnlyMillionaires);
sumAllBtn.addEventListener("click", calculateAllWealth);
sortByWealthBtn.addEventListener("click", sortByWealth);

// Extra functionality ??
