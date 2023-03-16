
// Calculations for calculating speed, distance and time.
const calcSpeed = (distance, time) => {
    return console.log("Your speed is: " + distance / time + "km/h")
}

const calcDistance =(speed, time) => {
    return console.log("Your Distance is: " + speed * time + "km")
}

const calcTime = (distance, speed) => {
    return console.log("Your Time is: " + distance / speed + "Minutes")
}


while(true){

    try {

        let userInput = prompt("Choose Speed, Time or Distance: ")
        if(userInput != "time" && userInput != "distance" && userInput != "speed" ) {
            throw `${userInput} is an invalid option!`
        }

        if(userInput == "speed"){
            try {
                let distance = prompt("Enter Distance in Kilometers:")
                
                if(isNaN(distance)){
                    throw `'${distance}': is not a number `
                    
                }

                let time = prompt("Enter time in Minutes: ")

                if(isNaN(time)){
                    throw `'${time}': is not a number `
                }
                
                calcSpeed(distance, time)
                
            } catch (error) {
                console.log(error)
                break // If an error occurs, the loop will be terminated
                
            }
            
        }


        else if(userInput == "distance"){
            try {
                let speed = prompt("Enter speed in km/h: ")
                if(isNaN(speed)){
                    throw `'${speed}': is not a number `
                }
                
                let time = prompt("Enter time in Minutes: ")
                if(isNaN(time)){
                    throw `'${time}': is not a number `
                }
                
                calcDistance(speed, time)
                
            } catch (error) {
                console.log(error)
                break // If an error occurs, the loop will be terminated
                
            }

            
        }
       
        else if(userInput == "time"){
            try {
                let distance = prompt("Enter Distance in Kilometers:")
                if(isNaN(distance)){
                    throw `'${distance}': is not a number `
                }

                let speed = prompt("Enter speed in km/h: ")
                if(isNaN(speed)){
                    throw `'${speed}': is not a number `
                }
                
                calcTime(distance, speed)

            } catch (error) {
                console.log(error)
                break // If an error occurs, the loop will be terminated
                
            }
        }
        
    } catch (error) {
        console.log(error)
        break // If an error occurs, the loop will be terminated
    }
}