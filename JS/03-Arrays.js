'use strict';

// ? string[] names=

//! OLD WAYYYYYYYY
// let myArr = Array();
let myArr = Array(10);
myArr[0] ="Vin";
myArr[5]="Sav";
myArr[9]="Alex"
// let myArr = Array("Vinesh","Savannah","Alex");
// console.log(myArr);

//! NEW WAYYYY
//! This short hand - we omit the Array keyword!
            // 0        1       2           3
const fruit=["Grapes","pears","Apples","Peaches",1234,{"name":"Vinesh"}];

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);
// console.log(fruit[5]);

// console.log(fruit.length);

// simple for loop
// for(let i =0; i<fruit.length;i++){
//     console.log(fruit[i]);
// }

//Enhanced for loop
//   let <some val> -temporary val 
for(let item of fruit){
    console.log(item);
}

// Array methods
console.log(fruit);
console.log(fruit.sort()); 
console.log(fruit.reverse());
console.log(fruit.join(" and "));

// adding elements to the end
fruit.push("Oranges");
console.log(fruit);
fruit.pop();
console.log(fruit);

// adding element to the start
fruit.unshift("Cherrys");
console.log(fruit);
fruit.shift();
console.log(fruit);




//! Show map

