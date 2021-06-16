'use strict';
//Two types of scope?
// Local - inside of function
// Global - Global throughout the whole document.

//Local Scope
function someFunction(){
    
    let hello = "Hi friends;"
     console.log(hello.length);
}

// return the function it self
// someFunction;
//! () - invokes in other words call the function
someFunction();
// console.log(hello); // WILL NOT WORKKKK!

//Global Scope

let myFlag = false;
console.log(myFlag);// false

function changeFlag(){
    myFlag= true;
}
changeFlag();
console.log(myFlag);// false

function someFunc(){
    hello = "hi my friend";
}
someFunc();
console.log(hello);
hello="this is not good :(!"
console.log(hello);