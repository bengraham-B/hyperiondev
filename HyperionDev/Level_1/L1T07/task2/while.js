
let prevAmount = 0
let userInputAmount = 0

while(true) {
      let userInput = prompt("Enter a number: ")

      if(userInput != '-1'){
            // (1) used geeksforgeeks for information regarding converting a string to an integer
            userInputAmount++ //every time a user inputs a number this will be incremented

            prevAmount = parseInt(userInput) + parseInt(prevAmount) // this will convert all the strings to integers
            let avg = prevAmount/userInputAmount

      } else{
            console.log("Loop ended")
            let avg = prevAmount/userInputAmount
            console.log(`Average: ${avg}`)
            break
      }



     
}



/*
Resources used:
(1) https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
*/