//QA Excercises 

//1. Write the following code and assess the output

///Create a function
//Declare a variable with a value inside it (i.e. let x = 'foo')
//Write an if statement that checks if the variable meets a condition
//Inside create a local variable
//Try to access both variables and asses your output

function submit() {
    let x = "foo";
    if (x == "foo") {
      let y = "boo";
    }
    console.log(x); // 'foo'
    console.log(y); // 'Reference error'
  }
  submit();

  //2.What is the result of executing this code and why?

function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();

  //Result- 
  // The answer is a ReferenceError as a 
  //is not declared and this will cause an 
  //error to be thrown according to ES6.