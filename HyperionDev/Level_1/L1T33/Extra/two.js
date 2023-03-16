//~ Get whather from API

const url = "https://swapi.dev/api/planets/3"

const starwarsAPI = async () => {
    const response = await fetch(url)
    return response.json().name
}

console.log(starwarsAPI().then(
    response => console.log(response)
    ))