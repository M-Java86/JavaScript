//1.Recreate the following flowchart as a loop >>flowchart located in QA Community under Iterations
//Iteration and loops allow us to loop over a block of code until a condition is met.
//If the condition is not satisfied, the code will terminate out of its current execution.
//Some of the common loops that are used within JavaScript include:

//for Loop
//While Loop
//Do While Loop
//Switch Cases


let a = 100;
while (a <= 200) {
  a++;
  console.log(`a = ${a}`);
}

//soultion printed out in devTools console 


//2.Recreate the following flowchart as a loop.

let a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}

//Solution printed out in DevTools console

 //3.   Create a method that can print out the numbers 1-10 10 times each.

 for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  