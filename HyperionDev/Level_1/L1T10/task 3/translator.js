// (2) example.js in the L1T10 folder was used to formulate the map
// english to Norwegian
let translator = new Map()
translator.set("blue", "blå")
translator.set("red", "rød")
translator.set("green", "grønn")
translator.set("purple", "lilla")
translator.set("software", "programvare")
translator.set("car", "bil")
translator.set("house", "hus")
translator.set("tree", "tre")
translator.set("dog", "hund")
translator.set("cat", "katt")

let userInput = prompt("What would you like to translate? ")

// (2) example.js in the L1T10 folder regarding ".has()"
if(translator.has(userInput)){
    // (1) developer.mozilla.org was used regarding ".get()"
    console.log(`The translation of ${userInput} in Norwegian is: ${translator.get(userInput)}`);
} else {
    console.log(`We do not have the Norwegian translation: ${userInput}`)
}

/*
Resources used: 
(1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
(2) https://www.dropbox.com/home/BG23010006078/1%20-%20Web%20Development%20Essentials/L1T10?preview=example.js
*/

