const url = "https://www.affirmations.dev/"

fetch(url)
    .then(result => result.json())
        .then((result) => {
            console.log(result)
            }),
            (error) => {
                console.log(error)
            }

const affirmations = () => {
    return new Promise((reslove, reject) => {
        reslove()
    })
}