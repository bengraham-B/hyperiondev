let userInput = prompt("enter number: ")

// (1) Used stack overflow, redarding use true within the switch statement
switch(true){

      // Divisible by both 7 and 11
      case userInput % 7 == 0 && userInput % 11 == 0:
            console.log("is divisible by both 7 and 11")
            break

      // Divisible by both 7
      case userInput % 7 == 0:
            console.log("is divisible by 7")
            break

      // Divisible by both 11
      case userInput % 11 == 0:
            console.log("is divisible by 11")
            break

      // Divisible by both niehter 7 and 11
      default:
            console.log("is divisible by neither 7 nor 11")
            break
}


/*
resources used:
(1) https://stackoverflow.com/questions/9235152/can-i-use-a-case-switch-statement-with-two-variables
*/
