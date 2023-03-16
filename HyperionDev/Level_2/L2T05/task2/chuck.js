const divJoke = document.getElementById("joke")

const url = "https://api.chucknorris.io/jokes/random"

//! This function is not working.
const joke = () =>{
	fetch(url)
    .then(response => {
      	return response.json()
    })
    .then(data => {
		// Work with JSON data here
		divJoke.innerHTML = data.value
    })
} 


// // joke()

// fetch(url)
//     .then(response => {
//       	return response.json()
//     })
//     .then(data => {
// 		// Work with JSON data here
// 		console.log(data.value);
//     })

  