'use strict'

//! previous ES6
let myCar = new Object();
console.log( myCar);
//      key: value
myCar["Make"] = "Audi";
myCar["Model"] = "A5";
myCar["Reg"] = "W8M8";
console.log( myCar);
console.log( myCar.Make);
console.log( myCar.Model);
console.log( myCar.Reg);

let savsCar={
    "Make":"BMW",
    "Model":"M5",
    "Reg":"T00 S1OW"
}
console.log(savsCar);
console.log(savsCar.Make);
console.log(savsCar.Model);
console.log(savsCar.Reg);
// Array of objects
let carPark = [
    {"Make":"BMW","Model":"M5","Reg":"T00 S1OW"},
    {"Make":"Audi","Model":"A5","Reg":"W8M8"},
]

// console.log(carPark);
// console.log(carPark[0]);
// console.log(carPark[1]);

for (let car of carPark){
    for(let key in carPark[car]){
        console.log(`${key} and the value is ${carPark[car][key]}`);
    }
}

// console.log(carPark[0][make]);

// for of loop is for iterable object like an array 
// for in loop for properties in an object!

let myJSONObject = {
    "searchResults": [
        {
            "productName": "Aniseed Syrup",
            "unitPrice": 10
        },
        {
            "productName": "Alice Mutton",
            "unitPrice": 39
        }
    ]
};

console.log(myJSONObject);
console.log(myJSONObject.searchResults[0].productName);
console.log(myJSONObject.searchResults[0].unitPrice);
console.log(myJSONObject.searchResults[1].productName);
console.log(myJSONObject.searchResults[1].unitPrice);

//Returns it as a object!!!!
let myObj = JSON.parse('{"name":"Alex"}');
console.log(myObj);
console.log(myObj.name);
//Returns it as a strong
let myOtherObj = JSON.stringify({name:"Savannah"});
console.log(myOtherObj);