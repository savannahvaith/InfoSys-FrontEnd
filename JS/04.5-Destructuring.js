'use strict'

// Arrays
const myArray = [1,2,3,4,5,6,7,8,9,10];

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[0],myArray[1],myArray[2],myArray[3],myArray[4]);

// with destructuring 

    // myArray[0], myArray[1], myArray[2]
const [,firstPlace,secondPlace,thirdPlace,...rest] = myArray;

//? The rest operator ...<some val>
// console.log(firstPlace);
// console.log(secondPlace);
// console.log(thirdPlace);
// console.log(rest);
// console.log(myArray[0]);

// Objects

const person = {
    first: "Vinesh",
    second:"ghela",
    country:"Uk"
}
console.log(`my name is ${person.first}, ${person.second}`);

let {first,second} = person;

console.log(`my name is ${first}, ${second}`);