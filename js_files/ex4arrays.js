

// excersice , Camelize the given string remove - and return it as string

let camelize = (text) =>{
    
   return text.split("-")
    .map((word, index)=>index == 0 ?  word :  word[0].toUpperCase() + word.slice(1))
    .join("")

}

let text = "banana-text-aest-family";
console.log(camelize(text));
console.log(text);


// Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and lower
// or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

let arr1 = [1,2,3,4,5,6,7,8,9,0,10,11,12,13];

let filterRange = (arr, a, b) =>{
    let newarrr = arr.filter((element, index) => {
        if(element >= a && element <= b){
            return element;
        }
    })
    return newarrr;
}

console.log(filterRange(arr1, 3, 6));

console.log(arr1);

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr
// and removes from it all values except those that are between a and b.
// The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.


let filterRangeInPlace = (arr,a,b)=>{
    arr.forEach((element, index)=> {
       if (element < a || element > b){
            arr.splice(index,1);
       }
    });
}
let array3 = [5,3,8,1,9,10];
filterRangeInPlace(array3,1,4);
console.log(array3);

let john = { name: "John", surname: "Smith", id: 1 , age : 40};
let pete = { name: "Pete", surname: "Hunt", id: 2, age : 38 };
let mary = { name: "Mary", surname: "Key", id: 3, age : 30 };

let users = [ john, pete, mary ];

let names = users.map((user, index)=>{
    return user.name;
})

// create an array of users with full name and id

let userWithFullName = users.map((user)=>{
    newUser = {
        fullname : `${user.name} ${user.surname} `,
        id : user.id
    }
    return newUser;
})

console.log(userWithFullName);

console.log(userWithFullName[0].fullname);


function sortByage(arr){
    arr.sort((a,b)=> a.age - b.age);
}

sortByage(users);
console.log(users);

let getAverageAge = (array) =>{
    let average = users.reduce((sum,user)=>{
        return (sum + user.age);
    }, 0)
    return average/array.length;
}

console.log(getAverageAge(users));