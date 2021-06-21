//Dom-Manipulation
//The Document Object Model (DOM) is a programming interface for HTML and XML documents. 
//It represents the page so that programs can change the document structure, style, and content.

//The DOM represents the document as nodes and objects. 
//That way, programming languages can connect to the page.
//A Web page is a document. This document can either be displayed in the browser window 
//or as the HTML source, but it is the same document in both cases. The DOM represents that same document so it can be manipulated / modified with a scripting language, such as JavaScript.


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
