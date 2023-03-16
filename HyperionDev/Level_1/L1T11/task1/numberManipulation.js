// let userInput = prompt("Please add 10 numbers: ")

// let numberList = [3, 5, 7, 23.46, 77.34, 29, 123.54, 69, 420.69, 231]
let numberList = []
console.log(numberList)

// Sum of umbers in array
function totalNumbers(array){
    let prev = 0
    for(let i = 0;i < array.length; i++){
        prev = parseInt(array[i]) + parseInt(prev)
    }
    console.log(`Sum of numbers in List: ${prev}`)
}

// Find index of max number and log
function maxNumber(array){
    // (1) developer.mozilla.org: information regarding the max number within an array
    let maxNumber = Math.max.apply(null, array)
    return console.log(`Maximum Number in List: ${maxNumber}`)
}


// Find index of min number and log 
function minNumber(array){
    // (1) developer.mozilla.org: information regarding the min number within an array
    let minNumber = Math.min.apply(null, array)
    return console.log(`Minmum Number in List: ${minNumber}`)
}

// Calc average to 2 decimal places and log 
function average(array){
    let prev = 0
    for(let i = 0; i < array.length; i++ ){
        prev = parseInt(array[i]) + parseInt(prev)
    }
    let averageOfArray = prev/array.length
    //(2) www.w3schools.com: Was used to find ".toFixed()" function which restricts the deecimal points to two places.
    console.log(`Average: ${averageOfArray.toFixed(2)}`)
}

// find median number and log 
function median(array){
    // (3)https://medium.com: Information regarding sorting a array numerically, ".sort((a,b)=>(a-b)"
   let sortedArray = numberList.sort((a,b)=>(a-b))
   let median = (parseInt(sortedArray[4]) + parseInt(sortedArray[5])) / 2
   console.log(`Median of list of Numbers: ${median}`)
}



do{
    let userInput = prompt("Please add 10 numbers: ")
    numberList.push(userInput)

} while(numberList.length < 10){
    totalNumbers(numberList)
    maxNumber(numberList)
    minNumber(numberList)
    average(numberList)
    median(numberList)
}


/*
Resources used: 
(1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
(2) https://www.w3schools.com/jsref/jsref_tofixed.asp
(3) https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958#:~:text=We%20can%20use%20.,%3Eb%2Da)%20for%20descending%20order.
*/

