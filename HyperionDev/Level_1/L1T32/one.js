let promise = new Promise(function(resolve, reject){
    let value = Math.floor(Math.random() * 2)
    console.log(value)

    if(value === 1){
        resolve('value was one!')
    }

    else {
        reject("Value was not one")
    }
})

promise
    .then(function(successMessage){ //* The first function after the '.then' handles the resolve paramater of a promise 
        console.log(successMessage) // successMessage == "resolve('value was one!')" on line 6
    }, function(errorMessage){ //! The second function after the '.then' handles the reject paramater of a promise 
        console.log(errorMessage) //errorMessage == "reject("Value was not one")" on line 10
    })