//(1) You could rather have used const to declare userInput in line 1 of characters.js because the variable does not change during the execution of the program. 

//(2) In line 8 strictly speaking you should have casted userInput to a number (!Number.isNaN(userInput)) before doing the isNaN check, because the return from prompt is always a string. 

const userInput = prompt("Enter an uppercase letter or a lower case letter or a number: ")


if (userInput.toUpperCase() === userInput && userInput.toLowerCase() !== userInput){
      console.log(`${userInput} is an uppercase letter`)
} else if(userInput.toLowerCase() === userInput && userInput.toUpperCase() !== userInput) {
      console.log(`${userInput} is a lowercase letter`)
} else if(!isNaN(userInput)){
      console.log(`${userInput} is a number`)
}else {
      console.log('Is a not a letter or number')
}

/* 
Resources used to complete this task, 
(1) https://nikitahl.com/check-if-letter-is-uppercase-javascript#:~:text=You%20can%20use%20test(),if%20the%20letter%20is%20uppercase.
(2) https://javascript.plainenglish.io/3-ways-to-check-if-variable-is-a-number-in-javascript-bd8157301274 
(3) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
*/