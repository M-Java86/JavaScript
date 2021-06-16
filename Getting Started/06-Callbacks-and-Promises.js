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

let myProm = new Promise((reslove, reject)=>{
    let a = 1; 
    if(a===1){
        resolve("Yes this worked");
     } else{
         resolve("oh no:(") //or to reject it 
         //reject("oh no:(")

    }
    myProm.then((msg))=>{
        alert("Hey this worked and we have the following message +msg")

    }


