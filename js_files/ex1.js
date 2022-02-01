// find BMI of 2 people and compare it

// this not is undefined
let markHigherBmi ;

let bmiCalculation = (mass, height) =>{
    let bmi = mass/(height*height);
    return bmi;
}

let spyrosDetails = {
    mass : 114,
    height : 1.91,
}


let georgeDetails = {
    mass : 80,
    height : 1.70,
}


let spyrosBmi = bmiCalculation(spyrosDetails.mass, spyrosDetails.height);
console.log(spyrosBmi);


let georgeBmi = bmiCalculation(georgeDetails.mass, georgeDetails.height);
console.log(georgeBmi);

if (spyrosBmi > georgeBmi){
    console.log(`Spyros bmi is higher than george with bmi :${spyrosBmi}`);
}
