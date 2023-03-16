const userWater = prompt("Enter the amount of liters of water you have used 7: ")

// (1) where indigent households get steps 1 and 2 for free
// (2) water rates as constants at the top of the program instead of hard coding them in the body of the code

const waterTariffOne = 15.73
const waterTariffTwo = 22.38
const waterTariffThree = 31.77
const waterTariffFour = 69.76



if(userWater <= 6000){
      let stepOne = waterTariffOne * userWater/1000 
      console.log(`Your water bill is: R${stepOne}`) 
      // Indigent households
      console.log(`Indigent household: Your water bill is: R0.`) 


} else if( 6000 < userWater <= 10500){
      let stepTwo = (waterTariffOne * 6) + (waterTariffTwo * (userWater/1000 - 6))
      console.log(`Your water bill is: R${stepTwo}`)
      // Indigent households
      console.log(`Indigent household: Your water bill is: R0.`) 


      
} else if( 10500 < userWater <= 35000){
      let stepThree = (waterTariffOne * 6) + (waterTariffTwo * 4.5) + (waterTariffThree * (userWater/1000 - 10.5))
      console.log(`step 3Your water bill is: R${stepThree}`)

      // Indigent households
      let stepThreeIndigentHouseholds = (waterTariffThree * (userWater/1000 - 10.5))
      console.log(`Indigent household: Your water bill is: R${stepThreeIndigentHouseholds}`)



} else if( userWater > 35000){
      // let stepFour = (waterTariffOne * 6) + (waterTariffTwo * 4.5) + (waterTariffThree * 10.5) + (waterTariffFour * (userWater/1000 - 21))
      // console.log(`Your water bill is: R${stepFour}`)

      //Indigent households
      // let stepFourIndigentHouseholds = (waterTariffThree * 10.5) + (waterTariffFour * (userWater/1000 - 21)) +1
      let stepFourIndigentHouseholds = (waterTariffOne * 6) + (waterTariffTwo * 4.5) + (waterTariffThree * 10.5) + (waterTariffFour * ((userWater/1000) - 21))
      console.log(`step 4 Indigent household: Your water bill is: R${stepFourIndigentHouseholds}`)
}