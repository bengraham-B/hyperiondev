const url = "https://www.affirmations.dev/"

fetch(url)
    .then(result => result.json())
        .then((result) => {
            console.log(result)
            }),
            (error) => {
                console.log(error)
            }

/*
* Resources Used:
* (1) Task 32 PDF: information regarding the fecth function 
 */