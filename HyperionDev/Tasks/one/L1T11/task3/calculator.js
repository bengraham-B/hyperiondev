let firstNum = parseInt(prompt("Enter first number: "))
let secondNum = parseInt(prompt("Enter second number: "))
let operation = prompt("Enter an operation: ")

function add(numOne, numTwo){
    let answer = numOne + numTwo
    return console.log(`${numOne} + ${numTwo} = ${answer.toFixed(2)}`)

}

function subtract(numOne, numTwo){
    let answer = numTwo - numOne
    return console.log(`${numTwo} - ${numOne} = ${answer.toFixed(2)}`)

}

function multiply(numOne, numTwo){
    let answer = numTwo * numOne
    return console.log(`${numOne} x ${numTwo} = ${answer.toFixed(2)}`)
}

function divid(numOne, numTwo){
    let answer = numOne / numTwo
    return console.log(`${numOne}  / ${numTwo}  = ${answer.toFixed(2)}`)

}

if(operation == "+"){
    add(firstNum, secondNum)

}else if(operation == "-"){
    subtract(firstNum, secondNum)

} else if(operation == "*" || operation == "x") {
    multiply(firstNum, secondNum)

}else if(operation == "/"){
    divid(firstNum, secondNum)
}




