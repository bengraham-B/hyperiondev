let userInput = prompt("Enter Message: ")


console.log("userInput = "  + " " + userInput)

let prev = ''

let carryOverNumber = ''
let newAlphabetNumber = ''
let actualNumber = ''

cypher = (userInput) => {
	for (let i = 0; i < userInput.length; i++) {
	
	    let asciiNumber = userInput.charCodeAt(i)
	    let ceaserNumber = asciiNumber + 15
	    let encoded = String.fromCharCode(ceaserNumber)
	
	
	    switch(true){ 
	        case 32 <= asciiNumber && asciiNumber <= 47: // Objects 
	            encoded = userInput[i]
	            break
	    
	        case 48 <= asciiNumber && asciiNumber <= 57: // Numbers 
	            
	
	            if(48 <= asciiNumber && asciiNumber <= 52){ //below 5 
	                ceaserNumber = asciiNumber + 5
	                encoded = String.fromCharCode(ceaserNumber)
	            } 
	            
	            else if(53 <= asciiNumber && asciiNumber <= 57){ //above 5 
	                ceaserNumber = asciiNumber - 5
	                encoded = String.fromCharCode(ceaserNumber)
	            }
	
	            break
	    
	        case 64 <= asciiNumber && asciiNumber <= 90: // Uppercase 
	
	            if( 64 <= asciiNumber && asciiNumber <= 75){ 
	                ceaserNumber = asciiNumber + 15
	                encoded = String.fromCharCode(ceaserNumber) 
	
	            }
	            
	            else if(76 <= asciiNumber && asciiNumber <=90) { 
	                carryOverNumber = 90 - asciiNumber 
	                newAlphabetNumber = 15 - carryOverNumber 
	                actualNumber = 64 + newAlphabetNumber 
	                encoded = String.fromCharCode(actualNumber) 
	            }
	            console.log("")
	
	            break
	        
	        case 97 <= asciiNumber && asciiNumber <= 122: // lower case
	
	            if(97 <= asciiNumber && asciiNumber <= 107){ 
	                ceaserNumber = asciiNumber + 15
	                encoded = String.fromCharCode(ceaserNumber) 
	            } 
	            
	            else if(108 <= asciiNumber && asciiNumber <= 122){ 
	
	                console.log(userInput[i])
	                carryOverNumber = 122 - asciiNumber 
	
	                newAlphabetNumber = 15 - carryOverNumber 
	                actualNumber = 96 + newAlphabetNumber // Adding to '96' because if the carry over number is one it must be 97 - which is the ascii value for lower case a
	                encoded = String.fromCharCode(actualNumber) 
	            }
	
	            break
	    
	        default:
	            encoded = userInput[i]
	            break
	    }
	
	    prev = prev + encoded
	
	}
    return prev
}
console.log(cypher(userInput))

