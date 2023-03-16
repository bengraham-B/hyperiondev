const url = "https://pokeapi.co/api/v2/pokemon/%7Bpokemon%7D/"
const favPokemon = "charizard"
const url2 = `https://pokeapi.co/api/v2/pokemon/${favPokemon}/`

fetch(url2)
    .then(result => result.json())
        .then((result) => {
            console.log("Name:\n",result.name)
            console.log("\n")
            console.log("Weight:\n",result.weight)
            console.log("\n")
            console.log("Abilities\n",result.abilities)
            }),
            (error) => {
                console.log(error)
            }

/*
* Resources Used:
* (1) Task 32 PDF: information regarding the fecth function 
 */