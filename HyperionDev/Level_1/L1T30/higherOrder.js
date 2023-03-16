const wordArray = [
    "Javascript",
    "Python", // 6
    "Java",
    "C#",
    "colour", // 6
    "car",
    "table",
    "chair",
    "dog",
    "coffin" // 6
]


const myFilterfunction = (array, callBackFunction) =>{
    let newWordArray = [] // This is where all the words with six letters will be stored, and then returned.
    for(let i = 0; i < array.length; i++){
        if(callBackFunction[i]){ // If the value at the index of the array is true it will push the word to the "newWordArray" array.
            newWordArray.push(array[i])
        }
    }
    return newWordArray
}


const newArray = (array) => {
    let valueArray = []
    let value = false
    for(let i = 0; i < array.length; i++){
        if(array[i].length === 6){
            value = true
            valueArray.push(value) // Storing true in the array if the word's length === 6
        } else {
            value = false
            valueArray.push(value) // Storing flase in the array if the word's !== 6
        }
    }
    return valueArray // This function returns an array of true and false values based on wheater the string at each index has 6 letters or not.
}

console.log(myFilterfunction(wordArray, newArray(wordArray)))

/* Resources Used
(1) https://developer.mozilla.org/en-US/docs/Glossary/Callback_function: for extra information regarding callback functions
(2) https://www.w3schools.com/jsref/jsref_length_string.asp: information regarding the length of a string
*/
