// const options = {
// 	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9607ab87d1mshbc4b3ca0dabff99p18ad2djsna2974da23430',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

// // Cape Town Cordinates
// const lat = '33.918861'
// const long = '18.4233'
const url_cat = "https://cdn2.thecatapi.com/images/av0.gif"
// const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${long}&units=metric&lang=en`

const capeTownWeather = async() =>{
    const response = await fetch(url_cat)
    return console.log(response.url)
}

// // fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=33.918861&lon=18.4233&units=metric&lang=en', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err));

console.log(capeTownWeather())

const url = "https://cdn2.thecatapi.com/images/av0.gif"  //^ URL for the cat gif.

//*(1) https://stackoverflow.com.
const getCatGIF = async() =>{ 
    const response = await fetch(url)
    return console.log(response) //^ Returns the url from the api.
}

console.log(getCatGIF()) //^ Logs the url to the cat gif to the console.



