// Ask user for their current metric
let userCurrentMetric = prompt(
      `
      In which metric is the temperature you are converting
      C - Celcius
      F - Farenheit
      K - Kelvin
      `
)

// Ask user for their current temperature
let userCurrentTemp = prompt("What is the temperatue you want to convert")


// ask user which metric they want to convert too
let tempUserWantsToConvertToo = prompt(
      `
      To which metric would you like to convert the temperature
      C - Celcius
      F - Farenheit
      K - Kelvin
      `
)

// (1) used www.seanbarry.dev for refrence regarding switch(true)
switch (true) {
      // Convert Celcius to fahrenheit
      case userCurrentMetric == "C" && tempUserWantsToConvertToo == "F":
            let celciusToFahrenheit = (userCurrentTemp * 9/5) + 32
            console.log(`${userCurrentTemp}˚C is  ${celciusToFahrenheit}˚F`)
            break
            //(3) Used hyperionDev's pdf for L1T06 for this equation

      // Convert Celcius to Kalvin
      case userCurrentMetric == "C" && tempUserWantsToConvertToo == "K":
            let userCurrentTempInt = parseInt(userCurrentTemp)
            let cleciusToKelvin = (userCurrentTempInt + 273.15)
            console.log(`${userCurrentTempInt}˚C is  ${cleciusToKelvin}K`)
            break
            //(3) Used hyperionDev's pdf for L1T06 for this equation


      // Convert Fahrenheit to Celcius 
      case userCurrentMetric == "F" && tempUserWantsToConvertToo == "C":
            let fahrenheitToCelcius = (userCurrentTemp - 32) * 5/9
            console.log(`${userCurrentTemp}F is  ${fahrenheitToCelcius}˚C`)
            break
            //(3) Used hyperionDev's pdf for L1T06 for this equation


      // Convert Fahrenheit to Kelvin
      case userCurrentMetric == "F" && tempUserWantsToConvertToo == "K":
            let fahrenheitToKelvin = (userCurrentTemp - 32) * 5/9 + 273.15
            console.log(`${userCurrentTemp}˚F is  ${fahrenheitToKelvin}K`)
            break
            //(2) Used google's tempreature convertor to workout the equation to convert Fahrenheit to Kelvin


      
      //Convert Kelvin to Celcius
      case userCurrentMetric == "K" && tempUserWantsToConvertToo == "C":
            let kelvinToCelcius = userCurrentTemp - 273.15
            console.log(`${userCurrentTemp}K is  ${kelvinToCelcius}˚C`)
            break
            //(3) Used hyperionDev's pdf for L1T06 for this equation


      // Convert Kelvin to Fahrenheit
      case userCurrentMetric == "K" && tempUserWantsToConvertToo == "F":
            let kelvinToFahrenheit = (userCurrentTemp - 273.15 )* 9/5 + 32
            console.log(`${userCurrentTemp}K is  ${kelvinToFahrenheit}˚F`)
            break
            //(2) Used google's tempreature cconvertor to workout the equation to convert Kelvin to Fahrenheit

      default:
            console.log("Information not entered correctly")



}


/*
Resources used:
(1) https://seanbarry.dev/posts/switch-true-pattern
(2) Google temperature calculator https://www.google.com/search?q=google+temperature+converter&client=opera-gx&sxsrf=AJOqlzU0MCfdtppPkfaoQ2FmuBqsiI647A%3A1673776044256&ei=rMvDY6moD5GVgQbJr5CACA&oq=google+temperature+c&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQFhAeMggIABAWEB4QCjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgoIABBHENYEELADOgcIIxDqAhAnOg0IABCPARDqAhC0AhgBOhAIABCPARDqAhC0AhCLAxgBOhAILhCPARDqAhC0AhCLAxgBOgQIIxAnOgUIABCRAjoLCC4QxwEQrwEQkQI6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToICAAQgAQQsQM6EAguELEDEIMBEMcBENEDEEM6BwgAELEDEEM6CAgAELEDEJECOg0IABCABBCxAxCxAxAKOgcIABCABBAKSgQIQRgASgQIRhgBUNMEWL0vYNs4aAJwAXgAgAHVAogBzSqSAQYyLTE1LjWYAQCgAQGwARTIAQi4AQLAAQHaAQYIARABGAo&sclient=gws-wiz-serp
(3) https://www.dropbox.com/home/BG23010006078/1%20-%20Web%20Development%20Essentials/L1T06?preview=WD+L1T06+-+Capstone+Project+l+-+Variables+and+Control+Structures.pdf
*/