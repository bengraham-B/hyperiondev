// Guest List Task 2


// Delcering userInput Variable
let userInput

// Declering guestList array
let guestList = []

// (1) wschools was used to help format the do while loop
do {
    userInput = prompt("Input names of people you would like to invite to a dinner party : ").toString()
    guestList.push(userInput)
    console.log(guestList)

}while(guestList.length < 10){ // When 10 gusest have been added to 'guestArray' it will break out of the loop
   alert("You have already added 10 people to your guest list")
   alert("Guest List:\n" + guestList)

   let additionalDisplay = 'You have already added 10 people to your guest list. Would you like to replace somemone on the list with this person, y/n'
   let userInputReplaceGuest = prompt(additionalDisplay)

   if(userInputReplaceGuest == 'y'){ // If the user wishes to chane a user
        let replaceGuest = prompt("Guest List: " + guestList+ '\n' + "Name of guest you want to replace: ")
        let nameOfNewGuest = prompt("name of new guest: ")
       
        console.log(guestList)
        for(let j = 0; j < guestList.length; j++){ // Looks for the name the user wants to replace and repacles it.
            if(guestList[j] == replaceGuest){
                guestList[j] = nameOfNewGuest
                console.log(guestList)

            } 
        }
    }
    
}



/*
 resources used: 
 (1) https://www.w3schools.com/jsref/jsref_dowhile.asp
 */