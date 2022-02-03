// ----------SETS-------------

// we create a set by using the new keyword
// and it takes an itterable like an array
// set cannot have duplicated values
// order in a set is irrelevant
// we cannot access them with [] and index

let ordersSet = new Set([11, 22, 33, 44, 5, 5, 5, 5]);

// we can get the size as an array.length
console.log(ordersSet.size);

// we can check if a element is in the set

console.log(ordersSet.has(11));

// add new items to the set

console.log(ordersSet.add(12));

console.log(ordersSet.delete(12));

// retrieve values from set

// -- we cant get values from set we can convert it into an array

// we can clear the set

// ordersSet.clear();

// we can itterate over the set
for (let item of ordersSet) {
  console.log(item);
}

// Where to use set --> remove duplicate values from arrays

let staff = ["waiter", "chef", "chef", "waiter", "manager"];

// lets say what are roles in the roles , getting the unique values from the array

let staffUnique = new Set(staff);
console.log(staffUnique);

// but this is a set we an array

let uniqueStaffarray = [...staffUnique];

console.log(uniqueStaffarray);

// ----------------- MAPS --------------------

// map is a datastructure to store value pairs key : value

// is similar to objects but the key can be any type

// in the other hand objects the keys are always string
// but in maps the key can be an object , an array or anything else we want

// creating a new map
let rest = new Map();

//add item to map

// rest.set("key", "value")
rest.set("name", "Classico Italiano");

// but we can also use other types

rest.set(1, "Amazing gyros");

console.log(rest);

// because the set method returns the updated map we can chain the set
// over that map

// get data from a map we can use the get method
// it needs to be the exact type
console.log(rest.get("name"));

// if a map contains a certain key

console.log(rest.has(1));

// also delete

console.log(rest.delete(1));
console.log(rest);

console.log(rest.size);

rest.clear();

// we can conver an object to map

// itterate over map

// convert a map to an array

// Whitch Data Structure to use??

// Where Data can come from

// 1: From the program it self
// 2: From the user it self,  forms, aplication it self
// 3: Web Api ->Aplication Programming Interface (Serving Data to an app)
