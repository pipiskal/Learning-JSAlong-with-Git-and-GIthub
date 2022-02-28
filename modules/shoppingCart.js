// exporting module

console.log("Exporting module");

// Inside a modules all the top level variables are private inside the module
const shoppingCost = 10;
export const cart = [];

// 2 types of exports

// Named exports and default exports

// creates a named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// export multiple this using named exports

const totalPrice = 237;
const totalQuantity = 23;

// we can even export it with an allias
// example : export {totalPrice as tp}
export { totalPrice, totalQuantity };

// Default exports , only when we want to export only 1 thing from the module

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
