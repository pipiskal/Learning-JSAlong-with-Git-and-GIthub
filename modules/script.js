// // Importing module
// import "./shoppingCart.js";
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from "./shoppingCart.js";

// console.log("Importing modules");

// addToCart("banana", 7);

// console.dir(addToCart);

// console.log(`total price : ${price}, Quantity : ${quantity}`);

console.log("importing module");
// import * as shoppingCart from "./shoppingCart.js";

// shoppingCart.addToCart("banana", 7);

import { addToCart, cart } from "./shoppingCart.js";

addToCart("apple", 10);
addToCart("banana", 10);
addToCart("bread", 10);

addToCart("oranges", 10);
// we should avoid mixing exports in the same import statement

console.log(cart);

// imports are not coppies of the exports its a live connection
// its the same reference of objects
