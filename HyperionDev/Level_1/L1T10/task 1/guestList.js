// Delcering userInput Variable
let userInput

// Declering guestList array
let guestList = []

// (1) wschools was used to help format the do while loop
do {
    userInput = prompt("Input names of people you would like to invite to a dinner party: ").toString()
    guestList.push(userInput)
    console.log(guestList)

}while(guestList.length < 10){ // When 10 gusest have been added to 'guestArray' it will break out of the loop
   alert("You have already added 10 people to your guest list")
   alert("Guest List:\n" + guestList)
}



/*
 resources used: 
 (1) https://www.w3schools.com/jsref/jsref_dowhile.asp
 */