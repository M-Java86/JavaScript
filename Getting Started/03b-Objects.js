//QA Excercises 

//1.Create an object called darthVader with the keys allegiance, 
//weapon and sith and the values of empire,
// lightsabre and true. Finally log darthVader

let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
    };
   
    console.log(darthVader);

// OutPut = allegiance: "Empire", weapon: "lightsaber", sith: true}

//2.Create the following log statements using the darthVader Object

//Darth Vader's allegiance is to the Empire;

//Darth Vader's weapon of choice is a lightsabre;

//Darth Vader is a sith? true;

//Darth Vader is a Jedi? false.;

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

//Output-Darth Vader's allegiance is to the Empire
//VM2969:2 Darth Vader's weapon of choice is a lightsaber
//VM2969:3 Darth Vader is a sith? true
//VM2969:4 Darth Vader is a Jedi? false

//3.Create an array with the name myArray with 2 elements hello,everyone..

//Next print the length of the array

//Next use the push() method to add 3 elements to the array

//Next print the length of the array

//Next use shift() to remove an element

//Finally print the contents of the array using a for of loop.

//1.
let myArray = ["hello",'everyone'];
//2.
 console.log(myArray.length);
//3.
 myArray.push("goodbye");
//4.
 console.log(myArray.length);
//5.
 myArray.shift();
//6.
 for(eachElement of myArray) {
     console.log(eachElement);
 }

 //OutPut-2
//VM2974:8 3
//VM2974:13 everyone
//VM2974:13 goodbye