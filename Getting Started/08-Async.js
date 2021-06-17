//1.Exercises
//Write the following code:

//Create three async functions called asyncFunction<1,2,3>

//Ensure each returns a new promise

//Declare a setTimeout() method in each

//In the body of the timed interval log the name of the function

//Set the corresponding time to the functions - AsyncFunction1 = 3 second, AsyncFunction2 = 2 seconds, AsyncFunction3 = 1 seconds

//Create a function called doThings() and run each AsyncFunction in order and 
//finally print to the screen All Done!

//My Code 

async function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Async function 1');
            resolve();
        },3000);
    });
  }
  async function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Async function 2');
            resolve();
        },2000);
    });
  }
  async function asyncFunc3() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Async function 3');
            resolve();
        },1000);
    });
  }
  
  function doThings() {
    asyncFunc1();
    asyncFunc2();
    asyncFunc3();
    return "All done";
  }
  
  console.log(doThings());
  /*
  Output:
  All done
  Async Function 3
  Async Function 2
  Async Function 1
  */

//2.Now adjust the doThings() function to use the await keyword so that you get the following output:

// Async Function 1
 //Async Function 2
// Async Function 3
// All done!

async function doThings() {
    await asyncFunc1();
    await asyncFunc2();
    await asyncFunc3();
    return "All done";
}
doThings().then(console.log);