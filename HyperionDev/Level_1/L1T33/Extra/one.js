function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making a request to ${location}`)
        if(location === "Google"){
            resolve("Google Says Hi")
        }

        else {
            reject("We can only talk to Google")
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("Processing Response")
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Facebook').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedRequest => {
//     console.log(processedRequest)
// }).catch(err => {
//     console.log(err)
// })

//* Putting async code here
async function doWork(){
    console.log(" --- Async await code below --- ")
    try{
        const response = await makeRequest('FACEBOOK')
        console.log(response)
        const processedRequest =  await processRequest(response)
        console.log(processedRequest)
    }

    catch(err){
        console.log("Error:", err)
    }

}

doWork()