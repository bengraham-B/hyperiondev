//^ --- Promise 1 --- 

let p = new Promise(function(resolve, reject) {
    let a = 1 + 2
    if(a == 4){
        resolve("Success")
    }

    else{
        reject("failed")
    }

})
//~ Running the promises
// p.then((message) => {
//     console.log("This is in the '.then' - " + message)

// }).catch((message) => {
//     console.log("This is in '.catch' - " + message)
// })

p.then(function(message){
    console.log(message)
}).catch(function(message){
    console.log(message)
})