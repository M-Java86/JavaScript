`use strict`;

// checking for equality

let bool1 = true; //1
let bool2 = true;
let one = 1;

console.log(bool1 ==one); //? 1 == 2
console.log(bool2 == bool2);



// strict equality - check the value and the type!
console.log(bool1 == one); //? boolean == number 

let variable;
let nullable = null;

console.log(variable == nullable); //? falsey == flasey
console.log(variable == nullable); //? false

console.log(1 == "1"); //? True
console.log(1 == "1"); //? False

console.log(1 != "1"); //? False
console.log(1 !== "1"); //?True
//ITERATIONS
let x =1
//POST INCREMENT
console.log(x++); //? 1
console.log(x); //? 2

let y = 1;
//PRE INCREMENT
console.log(++y); //? 2

for(let i =0; i<5; i++) {
    console.log(i);   
}
console.log("........")
for(let i=0; i<5;){
    console.log(i);
    i++;
}
// for ([initial expression]; [condition]; [iterator]){

//}

//while loop -> check the condition first, if its good
