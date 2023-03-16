const start = () =>{
    console.log(counter)
    counter++

}


const stop = () =>{
    clearInterval(myInterval2)
}
let counter = 1

const myInterval2 = setInterval(start, 50)
if(counter === 20){
    stop(myInterval2);
}




//&  ===============================================================================================================================================
// let counter = 1
// myInterval = setInterval(() => {
//     console.log(counter, "Hello")
    
//     if(counter === 20){
//         clearInterval(myInterval);
//     }
//     counter++

// }, 5);
