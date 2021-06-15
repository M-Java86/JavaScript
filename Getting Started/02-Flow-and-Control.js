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