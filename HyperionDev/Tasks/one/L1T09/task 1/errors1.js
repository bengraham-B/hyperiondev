// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log("Welcome to the error program"); //Syntax error
console.log("\n"); //Syntax error

let ageStr = ("24 years old"); //Syntax error
age = parseInt(ageStr) //Syntax error

console.log("I'm " + age + " years old."); // Logical error
let three = 3;  //logical error

let answerYears = age + three;

console.log("The total number of years: " + answerYears); //Syntax error and runtime error
let answerMonths = (answerYears * 12  + 6)//Runtime error and syntax error and logical error
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old"); //Syntax error 

//HINT, 330 months is the correct answer