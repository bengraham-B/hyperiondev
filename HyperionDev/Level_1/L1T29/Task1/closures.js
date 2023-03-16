const multiply = (() =>{
    let n = 0
    let mainNumber = 3
    return () =>{
        let answer = `${n} * ${mainNumber} = ${n * mainNumber}`
        n += 1
        return answer
    }
    
})()

// Using a for loop to loop through 10 numbers, 0 to 9.
for(let i = 0; i < 10; i++){
    console.log(multiply())

}
