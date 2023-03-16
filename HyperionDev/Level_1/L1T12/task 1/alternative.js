alternativeString = (myString) => {
    // Place your code here
    let wordArray = []
    let finalWord = ''
    
    for (let i = 0 ; i < myString.length; i++){
        wordArray.push(myString[i].toLowerCase())
    
        if(i % 2 == 0){
            wordArray[i] = wordArray[i].toUpperCase()
        }
            
    }
    for (let i = 0; i < wordArray.length; i++){
        finalWord = finalWord + wordArray[i]
    }

    return finalWord
    
    
    
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}