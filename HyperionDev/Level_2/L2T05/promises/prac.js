const promise = new Promise((resolve, reject) => {

    let ans = true

    if(ans){
        resolve("👍")
    }

    else{
        reject("👎")
    }

})

promise.then( (message) => {
    console.log(message) //* The resolve 

}).catch((message) =>{
    console.log(message) //! The reject
})


