'use strict';

// checking for equality

let bool1 = true; // 1
let bool2 = false; // 0
let anyNumber = 12;
let one = 1; 

// CHECKING THE VALUE
console.log(bool1 == one); //?  1 == 1
console.log(bool1 == bool2); 

// Strict Equality - Check the value AND the type!
console.log(bool1 === one); //? boolean === number

let variable;
let nullable = null; 

console.log(variable == nullable); //? falsey == falsey (true)
console.log(variable === nullable); //? false

console.log(1 == "1"); //? TRUE
console.log(1 === "1"); //? FALSE

console.log(1 != "1"); //? FALSE
console.log(1 !== "1"); //? TRUE


// ITERATORS
let x = 1; 
// POST INCREMENT
console.log(x++); //? 1 
console.log(x); //? 2

let y = 1;
// PRE INCREMENT
console.log(++y); //? 2

for(let i =0; i<5; i++){
    console.log(i);
}
console.log("-----------")
for(let i=0; i<5; ){
    console.log(i); 
    i++;
}

// for ( [ initial expression]; [condition]; [iterator]){

// }

// while loop -> check the condition first, if its good then it'll run 
// do while loop -> run atleast ONCE even if condition fails

let canIRun = false; 
do{
    console.log("Oh look, savannah ran.. for once..");
}while(canIRun);


while(canIRun){
    console.log("Sav's on a run");
}

// SWITCH - Evaluates an expression, then finds and runs matching case

let now = new Date(); 
console.log(now);

switch(now.getDay()){
    case 0: 
        console.log(`It's sunday!`);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a week day!`);
        break;
    case 6:
        console.log(`It's saturday!`);
        break;
    default:
        console.log(`couldn't find what you were looking for... sorry!`);
        break;
}

// if else
let greeting = `Good`;

if(now.getHours() > 17){
    greeting += ` evening`;
}else{
    greeting += ` morning`;
}

console.log(greeting);

// Ternary Statement

// syntax: (condition) ? valueIFTRUE : valueIfFalse;
let greeting2 = (now.getHours() > 17) ? `Good Evening` : ` Good Morning`;
console.log(greeting2);

let age = 71;

if(age<=18){
console.log("You can enter the club");
}else if(age>21 && age<70){
    console.log("welcome back")
}else{
    console.log("Go home and sleep");
}

//! different between || and && 