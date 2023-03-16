const wordArray = "The lazy ape"

let testStrings = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms"
]


// let str = "Hello World";

// let res = str.match(/[aeiou]/ig).join("");
// console.log(res);

// let res2 = str.match(/[^aeiou]/ig).join("");
// console.log(res2);
// let stringToDisappear = "aeiou"

// const disappear =(myString, toErase)=>{
//     const aeiou = toErase
//     for(let i = 0; i < myString.length; i++){
//         const newWord = myString[i].split(/[aeiou]/)
//         console.log(newWord.join(''))
//     }
// }

// disappear(testStrings, stringToDisappear)

// disappearString = (myString, toErase) => {
//     // Place your code here
//     let prev = ''
//     const aeiou = toErase
//     for(let i = 0; i < myString.length; i++){
//         const newWord = myString[i].split(/[aeiou][0]/)
//         let newWordJoined = newWord.join('')
//         prev = prev + newWordJoined
//     }

//     return prev

// }

// disappearString(testStrings, stringToDisappear)




// const splitWords = wordArray.split('a')

// console.log(splitWords)

// const newJoinedWords = splitWords.join('')
// console.log(newJoinedWords)

//* ===================================================
// let str = 'A_B_A_C_A_D_E'
// const limit_2 = str.split('A'[0])
// console.log("Limit 2: " + limit_2.join(''))
//* ===================================================

let stringToDisappear = "aeiou"


const disappearString = (myString, toErase) =>{
    let splitString = ''
    let splitArray = []

    for(let i = 0; i < myString.length; i++){
        for(let j = 0; j < myString.length; j++){

            splitString = myString[i].split(`${toErase[j]}`[0])
            splitArray.push(splitString)
            i++
        }
    }

    for(let i = 0; i< splitArray.length; i++){
        console.log(splitArray[i].join(''))
        // return splitArray[i].join('')
    }
    // console.log(splitString.join(''))
}

disappearString(testStrings, stringToDisappear)