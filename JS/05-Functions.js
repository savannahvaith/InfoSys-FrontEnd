'use strict';

// alert("OH NOO!!")

// console.log(`Hello Vinesh`)
// console.log(`Hello Sav`);
// console.log(`Hello Alex`);

// function <we give a name>(paramter){
    // the body of our function
// }

// console.log(sayHello("Vinesh"));
// console.log(sayHello("Sav"));
// console.log(sayHello("Alex"));

// functions have global scope
function sayHello(name, age){
    console.log(`Hey ${name} who is ${age} years old`);
    // return "Hello " + name
}
sayHello("John",15);
// console.log(sayHello("John"));

// function expressions
// welcome();// will give us an error - it fails silently
let welcome = function(){
    alert("Hey you!!") // it's blocking 
    // it block the regular execution of js code
}
// welcome();


// Arrows functions - in react this is what we will use
console.log(sayHello("Vinesh"));
function sayHello(name){
    return `Hello ${name}`
}
// this one is great for when return a single statement
let sayHello2 = (name,age) => `Hello ${name}, age is ${age}`
console.log(sayHello2("Vinesh",12));

// This one is good for returning a block of code.
let arrowFun = () =>{
    // this is good when we need to do alot

}