"use strict"; 

console.log(calculateAge(1992));

// Normal function

//calculated the age depending on birth date
function calculateAge(year){
    return 2022 - year;
}

// this will cause an error cause we cant call an expression function
// before initialization


let calculateAge2 = function (year){
    return 2022 - year;
}


console.log(calculateAge2(1995));

//Arrow functions



let calculateAge3 = (year) => 2022 - year;
// again we call the arrow function before initialization
console.log(calculateAge3(1999));