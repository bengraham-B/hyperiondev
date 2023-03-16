// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion" // Syntax error
let animalType = "cub"; // Stntax error
let numberOfTeeth = 16;
let numberOfLegs = '4'; // logical error //(1)codeburst.io: Information regarding '==' and '==='

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth` // sytax error and runtime error and logical error

if (numberOfLegs == 4) { // Logical error 1:(and syntax error) //(1)codeburst.io: Information regarding '==' and '==='
        console.log(fullSpec); // Syntax and logical error
}

//1: New error I found


/*
Resources used:
(1) https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
*/