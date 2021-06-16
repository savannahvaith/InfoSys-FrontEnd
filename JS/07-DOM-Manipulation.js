'use strict';

let myDogElment = document.querySelector("#dog");

console.dir(myDogElment);
myDogElment.alt="this is a fluffy dog!";

myDogElment.setAttribute("width","50%");
myDogElment.setAttribute("height","50%");
myDogElment.className="CheckMeOut"

let allParas = document.querySelectorAll("div p");
console.dir(allParas);

for(let i =0; i<allParas.length;i++){
    allParas[i].style.backgroundColor ="Red";
    allParas[i].style.color ="blue";
}

let myBut = document.createElement("button");
let mytext = document.createTextNode("Click me!")
myBut.className="btn btn-danger";

myBut.appendChild(mytext);

console.dir(myBut)

const div = document.querySelector('#addToMe')

    div.appendChild(myBut);
   

