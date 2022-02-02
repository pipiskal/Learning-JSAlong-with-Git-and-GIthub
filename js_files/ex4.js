"use strict"; 

// calling functions from functions

// we are going to create a sum of 3 grades and the find the average of that student


let sum = (a, b, c) => a + b+ c;

let average = (a,b,c) =>{
    let summarize = sum(a,b,c);
    return summarize / 3;
}


console.log(average(1,2,3));


// Working with arrays

let array1 = [1,2,3,4,5,6,7]
console.log(array1);
// lets add an 8 to the end of the list

array1.push(8);
console.log(array1);
// an array can hold different values, so we can pass a string or even an object

array1.push("Spyros");
console.log(array1);

let person1 = {
    name : "Spyros",
    age : 29
}

array1.push(person1);
console.log(array1);

// we can also add an element to the bigging of the array 
// with unshift

array1.unshift("first element");
console.log(array1);

// We can remove elements from the array

let poppeditem = array1.pop();
// the object person is removed
console.log(poppeditem);
console.log(array1);

// we can remove from the beggining with shift

// the values is actually returned so we can save it as we did before
array1.shift();
// "first element" now is removed cause it was the first element in the array
console.log(array1);

// We can create an array by using this syntax

let array2 = [] // its created but its empty

// but we can use this as well

let array3 = new Array(1,2,3,4); // is empty as well but we use the new keyword
// to create an istance of Array

console.log(array3)

// we can get the ellements of an array by using square brackets
// or at any index that we want 
let firstElement = array1[0];
console.log(firstElement);

// if we try to get an index higher that arrays length we will get undefined

// this will return undefined
let index = array1[100];
console.log(index);

// we get the length
let size = array1.length;
console.log(size);

array1.pop();

console.log(array1.length);

// arrays at their core are still an object

//array1[0] that returns the first element --> is like object[key]

// and because is an object is coppied by reference
// so if i create an array4

// array4 is a reference to memory to the actual array
let array4 = [1,2,3,4,5];

// array5 referes to the same memory place that holds the array 
let array5 = array4;


console.log(array4);
console.log(array5);

// since they now both refere to the same memory place
// if we change 1 of them the changed will apply to both 
// because they refer to the same memory that holds the array object

array5.pop();


console.log(array4);
console.log(array5);


// all values are coppied by reference except the primitive values like numbers

let number1 = 10;
let number2 = number1;


console.log(number1);
console.log(number2);

// but if i change the number1 - 2, number2 will not change

number1 -= 2;

console.log(number1);
console.log(number2);

// we can loop over arrays with old for loop but we can also use for...of
// we have to define the variable that will hold the value
for (let item of array1){
    console.log(item);
}

// Generally, we shouldn’t use for..in for arrays.