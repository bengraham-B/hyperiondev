const url = 'https://api.chucknorris.io/jokes/random'

const chuckPromises = new Promise((resolve, reject) => {

    fetch(url)
    .then((result) => result.json())
    .then((result) => {
        console.log(result)
    }),
    (error) => {
        console.log(error)

    }

    

})

