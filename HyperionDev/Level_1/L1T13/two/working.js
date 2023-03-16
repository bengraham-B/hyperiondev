let userInput = prompt("Enter Message: ")


console.log("userInput = "  + " " + userInput)

let prev = ''

let carryOverNumber = ''
let newAlphabetNumber = ''
let actualNumber = ''
// code = String.fromCharCode(actualNumber) //*works

for (let i = 0; i < userInput.length; i++) {

    let asciiNumber = userInput.charCodeAt(i)
    let ceaserNumber = asciiNumber + 15
    let encoded = String.fromCharCode(ceaserNumber)


    switch(true){ 
        case 32 <= asciiNumber && asciiNumber <= 47: // Objects //* ==================================== works ====================================
            encoded = userInput[i]
            console.log('objects = ' + encoded)
            break
    
        case 48 <= asciiNumber && asciiNumber <= 57: // Numbers //* ==================================== Working ====================================
            

            if(48 <= asciiNumber && asciiNumber <= 52){ //below 5 //* =================== works =====================
                console.log("<><><><> Below 5 <><><><>")
                ceaserNumber = asciiNumber + 5
                encoded = String.fromCharCode(ceaserNumber)
                console.log('Number = ' + encoded)
                console.log("")
            } 
            
            else if(53 <= asciiNumber && asciiNumber <= 57){ //above 5 //* =================== works =====================
                console.log("<><><><> Above 5 <><><><>")
                ceaserNumber = asciiNumber - 5
                encoded = String.fromCharCode(ceaserNumber)
                console.log('Number = ' + encoded)
                console.log("")
            }

            break
    
        case 64 <= asciiNumber && asciiNumber <= 90: // Uppercase //* ==================================== works ====================================

            if( 64 <= asciiNumber && asciiNumber <= 75){ //* ==================================== works ====================================
                console.log("above K")
                ceaserNumber = asciiNumber + 15
                encoded = String.fromCharCode(ceaserNumber) 
                console.log('Encoded Upper Case = ' + encoded)

            }
            
            else if(76 <= asciiNumber && asciiNumber <=90) { //* ==================================== works ====================================
                console.log("Below K")
                carryOverNumber = 90 - asciiNumber 
                console.log(carryOverNumber)
                newAlphabetNumber = 15 - carryOverNumber 
                actualNumber = 64 + newAlphabetNumber 
                encoded = String.fromCharCode(actualNumber) 
                console.log('Encoded Upper Case = ' + encoded)
            }
            console.log("")

            break
        
        case 97 <= asciiNumber && asciiNumber <= 122: // lower case

            if(97 <= asciiNumber && asciiNumber <= 107){ //* ==================================== works ====================================
                console.log("above K")
                ceaserNumber = asciiNumber + 15
                encoded = String.fromCharCode(ceaserNumber) 
                console.log('Encoded Upper Case = ' + encoded)
            } 
            
            else if(108 <= asciiNumber && asciiNumber <= 122){ //* ==================================== Works ====================================
                console.log("Below K")
                console.log(userInput[i])
                carryOverNumber = 122 - asciiNumber 
                console.log("carryOverNumber = " + carryOverNumber)
                newAlphabetNumber = 15 - carryOverNumber 
                actualNumber = 96 + newAlphabetNumber // Adding to '96' because if the carry over number is one it must be 97 - which is the ascii value for lower case a
                console.log("actualNumber Ecoded = " + actualNumber)
                encoded = String.fromCharCode(actualNumber) 
                console.log('Encoded Upper Case = ' + encoded)
            }

            // carryOverNumber = 122 - asciiNumber 
            // newAlphabetNumber = 15 - carryOverNumber 
            // actualNumber = 97 + newAlphabetNumber 
            // encoded = String.fromCharCode(actualNumber) 
            // console.log('Encoded Lower Case = ' + encoded)
            console.log("")

            break
    
        default:
            encoded = userInput[i]
            break
    }

    prev = prev + encoded

}
console.log(prev)

