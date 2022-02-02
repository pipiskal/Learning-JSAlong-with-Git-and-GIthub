
// Still working with arrays

// The task is: find the contiguous
// subarray of arr with the maximal sum of items.

// this is a O(n2) solution we have for inside for
    
let getMaxSubSum = (array) =>{
    let max = 0;
    for (let i=0; i<array.length; i++){
        // in each itteration i want the sum to start from 0 so it wont keep the previous sum
        let sum = 0;
        // i want to start counting from the next item in the array
        for (let j= i; j<array.length; j++){
            sum += array[j]
            if(max<sum) max = sum;
        }
        // if the sum is always negative the max will remain 0
        
    }
    return max;
}


// This is O(n) solution we iterate only once

let getMaxSubSum2 = (array) =>{
    let max = 0;
    let tempMax = 0;
    for (let el of array){
        tempMax += el;
        if(tempMax<0){
            tempMax = 0
        }
        // remember the maximum
        max  = Math.max(tempMax, max);
    }
    return max;
}

console.log(getMaxSubSum2([-30,1,2,5,3,100,-9,-10,-30]));