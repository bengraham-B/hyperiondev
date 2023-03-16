// Code here for Compulsory Task 1

// setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
    intervalID = setInterval(
        //create the logic needed in the setInterval() function for
        //incrementing the counter and outputting to the console

        () =>{  //Function which will be executed evey 1000ms
            counter++
            console.log(counter)
        }, 1000



    );
}

function stopCounter() {
    // add the logic required to stop the counter
    // using clearInterval()
    clearInterval(intervalID)
    console.log("stop")

}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// the event listener is missing a callback function argument
// this button should start the outputting of the counter to the console
startButton.addEventListener("click", startCounter);

// the event listener is missing a callback function argument
// this button should stop the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);

/**
 * Resources Used:
 *                 --- Suggested Links ---
 * (1) https://www.w3schools.com/jsref/met_win_clearinterval.asp
 * (2) https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 * (3) https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
 * (4) https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 * 
 *                 --- Other Links ---
 * (5) https://stackoverflow.com/questions/8315078/id-for-setinterval-how-does-it-work
 */
