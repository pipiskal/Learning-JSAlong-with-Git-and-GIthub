"use strict"; 

// calling functions from functions

// we are going to create a sum of 3 grades and the find the average of that student


let sum = (a, b, c) => a + b+ c;

let average = (a,b,c) =>{
    let summarize = sum(a,b,c);
    return summarize / 3;
}


// Working with arrays

let array1 = [1,2,3,4,5,6,7]

// lets add an 8 to the end of the list

array1.push(8);

// an array can hold different values, so we can pass a string or even an object

array1.push("Spyros");


let person1 = {
    name : "Spyros",
    age : 29
}

array1.push(person1);


// we can also add an element to the bigging of the array 
// with unshift

array1.unshift("first element");


// We can remove elements from the array

let poppeditem = array1.pop();
// the object person is removed
console.log(poppeditem);


// we can remove from the beggining with shift

// the values is actually returned so we can save it as we did before
array1.shift();
// "first element" now is removed cause it was the first element in the array


// We can create an array by using this syntax

let array2 = [] // its created but its empty

// but we can use this as well

let array3 = new Array(1,2,3,4); // is empty as well but we use the new keyword
// to create an istance of Array


// we can get the ellements of an array by using square brackets
// or at any index that we want 
let firstElement = array1[0];


// if we try to get an index higher that arrays length we will get undefined

// this will return undefined
let index = array1[100];

// we get the length
let size = array1.length;


array1.pop();


// arrays at their core are still an object

//array1[0] that returns the first element --> is like object[key]

// and because is an object is coppied by reference
// so if i create an array4

// array4 is a reference to memory to the actual array
let array4 = [1,2,3,4,5];

// array5 referes to the same memory place that holds the array 
let array5 = array4;



// since they now both refere to the same memory place
// if we change 1 of them the changed will apply to both 
// because they refer to the same memory that holds the array object

array5.pop();


// all values are coppied by reference except the primitive values like numbers

let number1 = 10;
let number2 = number1;


// but if i change the number1 - 2, number2 will not change

number1 -= 2;



// we can loop over arrays with old for loop but we can also use for...of
// we have to define the variable that will hold the value
for (let item of array1){
    console.log(item);
}

// Generally, we shouldn’t use for..in for arrays. 
// Because it iterated over all the properties, its used to itterate over objects

// We have more methods that we can use with Arrays

// splice we can use splice to remove items from a starting point 
// we can remove as many as we want from the starting point

let array6 =[1,2,3,4,5,6,7]
//lets say that i want to remove 4 from the array
// the index its 3 so

// splice(starting point , how many to delete after starting point)
array6.splice(3,1);
console.log(array6);

//if you try to delete more that the arrays length it simply deleted till
// the end of the array

//we can also add items with splice
// in this case because our starting point in the begging it will add it to the start
array6.splice(0,0,"test");
console.log(array6);

// we can add to the end as well

array6.splice(array6.length,0,"enother test");
console.log(array6);


// we can create a copy of an array either by irritating or we can use slice
// its a copy of its values not the reference
let testArr = array6.slice();

console.log(testArr);

testArr.splice(3,testArr.length);
console.log(testArr);
console.log(array6);

// so slice returns a copy of the senction that we specify



