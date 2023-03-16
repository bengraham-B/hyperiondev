const userWater = prompt("Enter the amount of liters of water you have used 11: ")

// Water Tariffs
const waterTariffOne = 15.73
const waterTariffTwo = 22.38
const waterTariffThree = 31.77
const waterTariffFour = 69.76

// Calculations to determine the water bill
let stepOne = waterTariffOne * userWater/1000 
let stepTwo = (waterTariffOne * 6) + (waterTariffTwo * (userWater/1000 - 6))
let stepThree = (waterTariffOne * 6) + (waterTariffTwo * 4.5) + (waterTariffThree * (userWater/1000 - 10.5))
let stepFour = (waterTariffOne * 6) + (waterTariffTwo * 4.5) + (waterTariffThree * 10.5) + (waterTariffFour * (userWater/1000 - 21))

// Calculations to determine the water bill of indigent households
let stepThreeIndigentHouseholds = (waterTariffThree * (userWater/1000 - 10.5))
let stepFourIndigentHouseholds =  (waterTariffThree * 10.5) + (waterTariffFour * ((userWater/1000) - 21))



console.log(stepThreeIndigentHouseholds)
console.log(stepThree)

console.log(stepFourIndigentHouseholds)
console.log(stepFour)

/*

The code marked with a *, i was unable to get it to run.

*/


if(userWater <= 6000){
      let userChoice = prompt("Are you an indigent household: ")

      if(userChoice == "n" || userChoice == "no"){
            console.log(`Your water bill is: R${stepOne}`) 
      } else {
            // Indigent households
            console.log(`Indigent household: Your water bill is: R0.`) 
      }

} else if( 6000 < userWater <= 10500) {
      let userChoice = prompt("Are you an indigent household: ")


      if(userChoice == "n" || userChoice == "no"){
            console.log(`Your water bill is: R${stepTwo}`)

      } else {
            // Indigent households
            console.log(`Indigent household: Your water bill is: R0.`) 
      }

} else if(10500 < userWater <= 35000){
      let userChoice = prompt("Are you an indigent household: ")


      if(userChoice == "n" || userChoice == "no"){
            console.log(`Your water bill is: R${stepThree}`)

      } else {
            // Indigent households
            console.log(`Indigent household: Your water bill is: R${stepThreeIndigentHouseholds}`) 
      }

} else if( userWater > 35000){
      let userChoice = prompt("Are you an indigent household: ")


      if(userChoice == "n" || userChoice == "no"){
            console.log(`Your water bill is: R${stepFour}`) // *


      } else {
           //Indigent households
            console.log(`step 4 Indigent household: Your water bill is: R${stepFourIndigentHouseholds}`) // *
      }
}













