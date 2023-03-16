let userInput = prompt("Enter a word:")

function palindrome (string) { //(2) Youtube was used regarding information about palindromes
   
    let j = 0
    while(j <= string.length){
        j++
        if(string[j] !== string[string.length -1 - j]){
            return console.log(`${string} is not a Palindrome`)
        }
    }
    return console.log(`${string} is a Palindrome`)

}

palindrome(userInput)




/*

Resources used: 
(1) https://www.techiedelight.com/loop-through-array-backwards-javascript/
(2) https://www.youtube.com/watch?v=_KE_yCKBqUA

*/

