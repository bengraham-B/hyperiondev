//* This is extra infor regarding promisses in JS

//^ --- Promise 1 --- 

let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if(a == 4){
        resolve("Success")
    }

    else{
        reject("failed")
    }

})
//~ Running the promises
p.then((message) => {
    console.log("This is in the '.then' - " + message)

}).catch((message) => {
    console.log("This is in '.catch' - " + message)
})





//^ --- Promise 2 ---

const userLeft = false
const userWatchingCatMeme = true

// function watchTutorialCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     }

//     else if(userWatchingCatMeme){
//         errorCallback({
//             name: "User wayching cat memes",
//             message: "WebDevSimp < Cat"
//         })
//     }

//     else {
//         callback("Thumbs Up and Subscribe")
//     }
// }

// watchTutorialCallback((message) =>{
//     console.log("Success " + message)
// }, (error) =>{
//     console.log(error.name + ' ' + error.message)
// })

function watchTutorialPromise(){
    return new Promise((resolve, reject) => { 
        if(userLeft){
            reject({
            name: 'User Left',
            message: ':('
        })
    }

    else if(userWatchingCatMeme){
        reject({
            name: "User wayching cat memes",
            message: "WebDevSimp < Cat"
        })
    }

    else {
        resolve("Thumbs Up and Subscribe")
    }
})
}

watchTutorialPromise().then((message) =>{
    console.log("Success " + message)
}).catch((err) =>{
    console.log(err.name + ' ' + err.message)
})


//^ --- Promise 3 ---

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 recorded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})
//~ Returns first value, when the first value has ran, only returns 'Video 1 recorded'.
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})
