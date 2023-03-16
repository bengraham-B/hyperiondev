
/^   ================================== The API is of Cape Town ================================== ^/ 

const lat = '-33.918861'
const long = '18.4233'
const tempUrl = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${long}&units=metric&lang=en`
const populationUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=-33.918861%2B18.4233'
const elevationUrl = 'https://api.open-meteo.com/v1/elevation?latitude=-33.9189&longitude=18.4233'


// ^ ------------------------------ Temperature API ------------------------------
const optionsTemp = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9607ab87d1mshbc4b3ca0dabff99p18ad2djsna2974da23430',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};
//*(1) https://rapidapi.com
async function getTemp() {
	const response = await fetch(
		tempUrl,
		optionsTemp
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response

    return console.log("Temperature: " + data.data[0].temp)
}



// ^ ------------------------------ Population API ------------------------------
const optionsPopulation = { // this is the options to access the api.
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9607ab87d1mshbc4b3ca0dabff99p18ad2djsna2974da23430',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

//*(1) https://rapidapi.com
getPopulation = async () => {
    const response = await fetch(populationUrl, optionsPopulation)
    const data = await response.json();
    return console.log("Population: " + data.data[1].population)
}


//^ -------------------------------- Elevation API -------------------------------- 
getEleveation = async () => {
    const response = await fetch(elevationUrl)
    const data = await response.json()
    // return console.log("Elevation: " + data.elevation + ' meters')
    return data.elevation
}

getEleveation = async () => {
    fetch(elevationUrl)
        .then(result => result.json())
        .then((result) => {
            console.log("Elevation: " + result.elevation + ' meters')
        }),
        (error) => {
            console.log(error)
        }
}

//^ Calling the functions.
getEleveation()
// getTemp()
// getPopulation()



/*
 * Resources used:
 * (1) https://rapidapi.com/guides/fetch-api-async-await: information on using async await functions with rapid api
 */