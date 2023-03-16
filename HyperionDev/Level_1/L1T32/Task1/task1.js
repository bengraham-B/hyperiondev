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

/*
* Resources Used:
* (1) Task 32 PDF: information regarding the fecth function 
 */


async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

thisThrows()
    .catch(console.error)
    .then(() => console.log('We do cleanup here'));