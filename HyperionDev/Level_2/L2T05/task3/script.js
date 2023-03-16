const timeDiv = document.querySelector(".time")
const realTime = () =>{
	//? (1) www.w3schools.com
    const date = new Date()
	const second = date.getSeconds()
	const minute = date.getMinutes()
	const hour = date.getHours()

	timeDiv.innerHTML = `${hour}:${minute}:${second}`
}

realTime()
setInterval(realTime, 1000) // calling the 'realTime' function every one second, to update it in real time.


/*
 * Resources used:
 * (1) https://www.w3schools.com/js/js_date_methods.asp: Information regarding the 'date' function
 * (2) https://stackoverflow.com/questions/26584233/updating-javascript-time-every-second: Information regarding how create a timer which updates every second
 */