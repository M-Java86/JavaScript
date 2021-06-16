///All values are TRUTHY unless they are defined as FALSEY.

//These variables are always FALSEY:

//false
//0 (zero)
//'' or "" (empty string)
//undefined
//null
//NaN
//Everything else is TRUTHY:

//'0' - (String containing single digit 0 )
//'false' - (String containing text - 'false')
//[] - (An empty array)
//{} - (An empty object)
//function(){} - (An 'empty' function)

//1.What are the return values of the following code?
let strictA = true;
let strictB = 1;
console.log(strictA == strictB);
console.log(strictA === strictB);

//2.What are the return values of the following code?
console.log(strictA != strictB);
console.log(strictA !== strictB);

//3.Create a IF statement that satifies the following:
////Declare a variable age
//Write a condition that checks if age is between 18 AND 65
//Return a value in each case where the condition is satisfied and not satisfied.
//Extra: Consider the case where age is less than 18 - return 'underage

let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
} 
//Solution-prints out underage

//4.Using ternary-if syntax, write code that checks if age is above 50.
let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);

//Solution prints out 50 or over