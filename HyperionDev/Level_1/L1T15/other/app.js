//Recursive function

const countToTen =(num) => {

    // Log the Number
    console.log(num)

    //Add one
    const updatedNumber = num + 1

    //Base Line
    if(updatedNumber <= 10){
        countToTen(updatedNumber)
    }


}

countToTen(1)


// ^ =========== Factorial example ===========

const factorial = (n) =>{
    if(n == 0){
        return 1
    }else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))