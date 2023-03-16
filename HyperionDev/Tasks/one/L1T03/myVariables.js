let myFirstNumber = 11
let mySecondNumber = 3

let myFirstString = "Hello how are you? "
let mySecondString = "I'm good thanks and you."

let myBoolean = true

console.log(myFirstNumber * mySecondNumber)
console.log(myFirstString + mySecondString)


let multiLineString = 
`
The boolean is: ${myBoolean}
The first Number is: ${myFirstNumber}
The second number is: ${mySecondNumber}
${myFirstNumber} * ${mySecondNumber} = ${myFirstNumber * mySecondNumber}
The first string is: ${myFirstString}
The second string is: ${mySecondString}
These two together make: ${myFirstString} ${mySecondString}
`

console.log(multiLineString)