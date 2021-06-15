'use strict'; // 
var dontuse; // ! DON'T USE ME!

let variableA = "Change me";

const FINAL = "You can't even if you tried!";

variableA = "Look I changed!!!!";

console.log(variableA);

// update the value of FINAL - CONT TYPE ERROR!
// FINAL = "look I changed?"; //! this won't work!!!

// Data Types

// ? JAVA - boolean, int, long, char, String (weird one), float, double, byte

// Javascript - loosely typed language, not strict!!

let firstName = "Harry"; 
let age = 25; 
let salary = 3256874.56;
let siblings = ["Lisa", 23, false, "hello"];
let bool = false; 
let symbol = Symbol("x"); 
// let NaN; // not a number
let obj = {
    "make" : "Toyota",
    "model" : "Yarius", 
    "year": 2015,
    "doors" : 2
};

console.log(typeof bool); // Boolean
console.log(typeof siblings); // Object
console.log(typeof age); // Number

// ? undefined - not defined, aware that it exsits but doesn't know what value it has  

let infosys; 

console.log(infosys);

// ? null - doesn't have an inherited object, no value of any kind, empty, value a to represent NOTHING!

let lookAtMe = null; 

console.log(lookAtMe);

bool = 0; // ? Can update a vairbale to another datatype as and when you want to!

console.log(typeof bool); 

// JS - 
// * NUMBER
// * STRING
// * OBJECT
// * NULL
// * UNDEFINED
// * SYMBOL

// Template Literals

let str = " 5 + 3 = ";
let value = 5+3;
let str2 = str+value;
console.log(str2);
// ? 5 + 3 = 8
// ? 8

console.log(` 5 + 3 = ${value} OR computations ${ 5 + 3 } `);

//? ' ' - Single quotes
//? " " - Double Quotes
//? ` ` - back ticks

console.log("Mr Speaker said : \"Hello\" ");
console.log(`Mr Speaker said : "Hello" `);

// ASI - Automatic Semicolon Insertion!

// 1. Adds a ; when two lines are separated by a enter key
// 2. Adds a ; when two statements are separated by a { }
// 3. Adds a ; when RETURN BREAK CONTINUE OR THROW

function sayHello(){ 
    return ( 
            "Savannah Says hi" 
    ) 
} 

console.log(sayHello()); 


// ? Explanation of VAR and why it's bad!

var x  = 12 ; 
console.log(`${x} and ${y}`);
var y = 5;

// ? 12 and undefined
// ? 12 and 5 x3

let x1 = 23; 
let y1 = 5;
console.log(`${x1} and ${y1}`);


function balance(){
    available = 1000; 
}

balance(); 
console.log(available);