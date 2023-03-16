
/^   ================================== The API is of Cape Town ================================== ^/ 

const lat = '-33.918861'
const long = '18.4233'
const tempUrl = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${long}&units=metric&lang=en`
const populationUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=-33.918861%2B18.4233'
const elevationUrl = 'https://api.open-meteo.com/v1/elevation?latitude=-33.9189&longitude=18.4233'


const optionsTemp = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9607ab87d1mshbc4b3ca0dabff99p18ad2djsna2974da23430',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};

const optionsPopulation = { // this is the options to access the api.
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9607ab87d1mshbc4b3ca0dabff99p18ad2djsna2974da23430',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};



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

//* (1) https://rapidapi.com
getTemp1 = async () => {
    fetch(tempUrl, optionsTemp)
    .then(result => result.json())
    .then((result) => {
        console.log("Temperature: " + result.data[0].temp + ' meters')
    }),
    (error) => {
        console.log(error)
    }
}

//* (1) https://rapidapi.com
getPopulation1 = async () => {
    fetch(populationUrl, optionsPopulation)
    .then(result => result.json())
    .then((result) => {
        console.log("Population: " + result.data[1].population)
    }),
    (error) =>{
        console.log(error)
    }
}

//^ Calling the functions.
getEleveation()
getTemp1()
getPopulation1()



/*
 * Resources used:
 * (1) https://rapidapi.com/guides/fetch-api-async-await: information on using async await functions with rapid api
 */