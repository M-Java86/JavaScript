//QA Excercises 

//1.Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.

function subCalc(num1, num2) {
    return num1 - num2;
}

console.log(subCalc(10,1000));

//2.Create a function expression called welcome that take in name, age,gender as a parameters. The outcome should be like so:
//e.g. "My name is Felix Cited, i am 20 years old and of gender Male"

const welcome = function(name,age,gender){
    return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
    }
   
    welcome("Felix Cited",20,"Male");

    
    //3.Create an arrow function called powerUp that takes in two values n1 and n2. 
    //The arrow function will return the power of the two numbers.

    //n1=2, n2=3 will return 8 (2 x 2 x 2);

    //n1=3, n2=3 will return 27 (3 x 3 x 3);

    powerUp = (n1,n2) => Math.pow(n1,n2);

console.log(powerUp(3,3));
//Output: 27
