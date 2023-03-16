const question = 
`
Which planet is closets to the sun:
a. Venus
b. Mercury
c. Earth
d. Saturn
` // The question which the user will be asked
// (1) i used information regarding do-while loops from w3school and the (2) task pdf to assits in structuting my answer
do{
    let userAnswer = prompt(question + "\nEnter a, b, c, or d:" )

    if(userAnswer != "b"){
        let userYesOrNo = prompt("Would you like to try agin: y/n")

        if(userYesOrNo == "n"){
            break
        }
    }else { // if the user inputs 'b' the loop will exit and the message 'That's correct!' will be displayed.
        alert("That's correct!")
        break
    }



   

} while(true)



/*

Resources used: 
(1) https://www.w3schools.com/jsref/jsref_dowhile.asp
(2) https://www.dropbox.com/home/BG23010006078/1%20-%20Web%20Development%20Essentials/L1T07?preview=WD+L1T07+-+Beginner+Control+Structures+-+While+Loops+.pdf
*/
