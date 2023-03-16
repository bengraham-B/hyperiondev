let userInput = prompt("enter number: ")

// (3) Used information on w3schools regarding converting strings to intergers
let userInputInt = parseInt(userInput) // Converintg user inputed number to an interger 

// Used (2) information from the course dropbox link and (3) w3schools to help formulate this switch statement 
// is userInputInt divisible by 7
switch(userInputInt % 7){
      case 0:
            console.log("7 - divisible")
            break
}

// is userInputInt divisible by 11
switch(userInputInt % 11) {
      case 0:
            console.log("11 - divisible")
            break
}

// is userInputInt divisible by both 7 and 11
switch(userInput % 11 == 0 && userInput % 7 == 0){
       case true: 
            console.log("divisible by both seven or eleven")
}

// is userInputInt divisible by both 7 and 11
switch(userInput % 11 != 0 && userInput % 7 != 0){
      case true: 
            console.log("divisible by nether seven or eleven")
}


/*
Links to resources used:
(1) https://www.dropbox.com/home/BG23010006078/1%20-%20Web%20Development%20Essentials/L1T05?preview=WD+L1T05+-+Logical+Programming+-+Operators+and+Switch+Statements.pdf
(2) https://www.w3schools.com/js/js_operators.asp
(3) https://www.w3schools.com/jsref/jsref_parseint.asp
*/













