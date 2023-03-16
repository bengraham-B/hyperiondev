// Every second character repalced with '!'
function everySecondChar(word){
    let newWord = []
    for(let i = 0; i < word.length; i += 2){
        // (2) w3schools: information regarding ".charAt()"
        newWord.push(word.charAt(i))

        for (i = i; i < word.length -1; i++){
            newWord.push("!")
            break
        }
    }
    let string = newWord.toString()
    //(2) wschools: Information regarding '.repalceAll()'
    return console.log("New Word: " + string.replaceAll(',', ''))
}





//Log word in reverse
function reverse (word){
    let wordArray = []
    for(let i = 0; i < word.length; i++) {
        wordArray.push(word[i])
        
    }
    
    //(3) wschools: Information regarding reversing an array '.reverse()'
    let wordReverse = wordArray.reverse()

    //(5) https://stackoverflow.com: Information regarding declearing variables as empty strings
    let wordReverseString = ''
    for(let i = 0; i < wordReverse.length; i++) {
        wordReverseString =  wordReverseString + wordReverse[i]
        
    }
    return console.log(wordReverseString)
}



// Every sixth letter is uppercase
function sixthLetterUpperCase(word){
    let wordArray = []
    for(let i = 0; i < word.length; i++){
        wordArray.push(word[i])
    }

    let sixthWord = ''
    for(let i = 0; i < wordArray.length; i++){
        
        if(i % 6 == 0 && i != 0){
            //(6) https://www.w3schools.com: Infromation regarding '.toUppercase()'
            sixthWord =  sixthWord + wordArray[i].toUpperCase() 
        } else{

            sixthWord =  sixthWord + wordArray[i]
        }

        
    }
    return console.log("Word: " + sixthWord, "Length: " + sixthWord.length + " Characters")
}




// Ascii value
function asciiValue(word){
    let result = ''
    let asciiArray = []
    for(let i = 0; i < word.length; i++){
        // (7) https://www.programiz.com: information regarding ascii values
        result = word[i].charCodeAt(0)
        asciiArray.push(result)
    }

    return console.log(asciiArray)
}


let userInput = prompt("Enter a word: ")
everySecondChar(userInput)
reverse(userInput)
sixthLetterUpperCase(userInput)
asciiValue(userInput)







//resources used
//(1) https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-21.php
//(2) https://www.w3schools.com/jsref/jsref_charat.asp
//(3) https://www.w3schools.com/jsref/jsref_reverse.asp
//(4) https://www.scaler.com/topics/javascript-remove-character-from-string/
//(5) https://stackoverflow.com/questions/27821111/why-am-i-getting-undefined-output-javascript/27821131#27821131
//(6) https://www.w3schools.com/jsref/jsref_touppercase.asp#:~:text=The%20toUpperCase()%20method%20converts,not%20change%20the%20original%20string.
//(7) https://www.programiz.com/javascript/examples/ascii-value-character