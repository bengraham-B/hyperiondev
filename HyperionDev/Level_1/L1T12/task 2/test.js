 // Place your code here
 let word = "goose duck chop"
 let seperationArray = []
let prev = []

for(let i = 0; i < word.length; i++){
    seperationArray.push(word[i])
 }
// console.log(seperationArray)

for(let i = 0; i < word.length; i++){
    if(word[i] == " "){
        // prev =  prev + '\n' + word[i] 
        prev =  ` ${prev}\n${word[i]}` 
    }

    prev =  prev + word[i] 

}
console.log(prev)