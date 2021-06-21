`use strict`; 
///Promise 
//What is a promise
//“A promise is a placeholder for some data that will be available: immediately, 
//some time in the future or possibly not at all.”
//When data is needed and is not potentially available straight away we may wait for the data
// to come through but we also need a way to execute code when data is available 
///or deal with the fact it will never be available.

//pending - Hasn't been fulfilled or reject yet
//fulfiiled/ succes - the action relating to promise succeeded
//Rejected/ failed - the action relating to the promise failed 

//resolve -.then();
//reject -.catch();
//? the last then -execute no matter what

'use strict';

// promises

// Pending - Hasn't been fulfilled or rejected yet
// Fulfilled/ Success - The action relating to the promise succeeded
// Rejected/ Failed - The action relating to the promise failed

//resolve - .then();
//reject - .catch();
//? The last then - execute no matter what

// let myProm = new Promise((resolve,reject)=>{
//     let a = 1;
//     if(a===1){
//         resolve("Success");
//     }else{
//         reject("Failed")
//     }
// })

// myProm.then((msg)=>{
//     alert("Hey this worked and we have the following message "+msg )
// }).catch((msg)=>{
//     console.error("Something went wrong " +msg)
// }).then(()=>{
//     console.log("No matter what happened before i will still execute!!!!!");
// })

// console.log(myProm);

// callbacks
//! a Function that take another Function as a argument
const sayHello = (fullName)=>{
    // console.log("HEYYYYYYYYYY "+fullName);
    alert(`Hello ${fullName}`);
}

const getInput = ( callBack ) => {
    console.log(callBack);
   let getName = prompt("Whats your name!");
   //invoked just here \/ - look at the ()
        callBack(getName)
}

getInput(sayHello);
