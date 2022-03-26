const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

// fethc random user and add money

function addData(obj) {
  data.push(obj);

  updateDom();
}

// calculate all wealth
function calculateAll(providedData = data) {
  const total = data.reduce((total, current) => {
    console.log(total);
    console.log(current.money);
    return total + current.money;
  }, 0);

  const element = document.createElement("div");
  element.classList.add("all-wealth");
  element.innerHTML = `Total Wealth : ${total}`;
  main.append(element);
}

// Update DOM
function updateDom(providedData = data) {
  // clear main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

  providedData.forEach((item) => {
    const element = document.createElement(`div`);
    element.classList.add("person");
    element.innerHTML = `<strong> ${item.name} </strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// double everyones money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDom();
}

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");

  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Format number as money

function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

function showOnlyMillionaires() {
  newData = data.filter((person) => {
    return person.money > 1000000;
  });

  updateDom(newData);
}

function sortByWealth() {
  data.sort((a, b) => b.money - a.money);

  updateDom();
}
// Event Listeners

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
showMillionairesBtn.addEventListener("click", showOnlyMillionaires);
sortBtn.addEventListener("click", sortByWealth);
calculateWealthBtn.addEventListener("click", calculateAll);

getRandomUser();
getRandomUser();
getRandomUser();
