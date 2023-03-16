dogName = "Max" //compilation error, this occurs because the varibale "dogName" i not declereated with wither the 'let' or 'const' keyword

if(dogName = "Max"){ // compliation error, this will occur as the single '=' is used opposed to the '==' which should be used to check wheather the conditionis true or false
    console.log(dogName + "Is the name of my cat") // Logical error as this is not the expected outp put 
    console.log(catName + "My cats name is actually Lewis") // Runtime error, this will occur during the execution of the programe as only when the if statement is execute will computer detect that the variable "catName" has not been declered
}

