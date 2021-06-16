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
 
 //4.If you have used a while loop at any point in these exercises, replace them with for loops.

 for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
  }
  for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
  }

  //5.Write a switch case statement which uses the current day as 
  //its expression and matches with the relevant case. Criteria:
//Omit a break statement if it is a weekday, until the last day
//Use a default case to handle an invalid range.
  
  let day = now.getDay();
switch (day) {
    case 0:
      console.log(`It's Sunday`);
      break;
    case 6:
      console.log(`It's Saturday`);
      break;
    case 1:
      console.log(`It's Monday`);
    case 2:
    case 3:
    case 4:
    case 5:
      console.log(`It's a weekday`);
      break;
    default:
      console.log(`Excuse me?`);
      break;
  }
