// An Email Simulation
/*
create your email class here
*/


let inbox = []
let spamEmailsArray = []
let unreadEmailsArray = []

class Email {
	constructor(emailContents, fromAddress){
		this.emailContents = emailContents
		this.fromAddress = fromAddress
		this.hasBeenRead = false
		this.isSpam = false
		inbox.push(this) //Pushes instances of all the classes to the inbox array, (1) stackoverflow.com
	}


	markAsRead(){
		this.hasBeenRead = true
	}

	markAsSpam(){
		this.isSpam = true
	}

}

let email1 = new Email("Hello hoes it going", "Jim@gmail.com")
let email2 = new Email("How is the project going", "Jenny@gmail.com")
let email3 = new Email("When will the meeting take place", "Roger@gmail.com")
let email4 = new Email("The deadline is on the 27th", "Sarah@gmail.com")
let email5 = new Email("The clients are requesting the documents", "Edward@gmail.com")
let email6 = new Email("The meeting with the client is canceled", "James@gmail.com")



addEmail = (email) => {
	for(let i = 0; i < email.length; i++){
		inbox.push(
			{
				"emailContents": email[i].emailContents,
				"fromAddress": email[i].fromAddress,
				"hasBeenRead": email[i].hasBeenRead,
				"isSpam": email[i].isSpam
			}
		)
	}

	console.log(inbox)

}

getCount = () => {
	let counter = 0
	for(let i = 0; i < inbox.length; i++){
		counter++
	}

	return console.log(`The amount of emails in inbox is: ${counter}`)


}

const getEmail = (index) => {
	console.log(inbox[index])
}

const getUnreadEmails = (unreadEmails) => {
	for(let i = 0; i < unreadEmails.length; i++){
		if(unreadEmails[i].hasBeenRead === false){
			unreadEmailsArray.push(unreadEmails[i])
			inbox.splice(unreadEmails[i], 1)
		}
	}
	console.log('unReadEmails', unreadEmailsArray)
	console.log("New inbox array", inbox)

}

const getSpamEmails = (spamEmails) => {
	for(let i = 0; i < spamEmails.length; i++){
		if(spamEmails[i].isSpam === true){
			spamEmailsArray.push(spamEmails[i])
			inbox.splice(spamEmails[i], 1) //Removing email marked as spam from inbox array, (2) stackoverflow.com
		}

	}
	console.log('spamEmails', spamEmailsArray)
	console.log("New inbox array", inbox)
}



userChoice = "";
while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	
	if(userChoice == "1"){
		let userInputReadEmail = prompt("Index of the email you want to read:")
		inbox[userInputReadEmail].markAsRead()
		getUnreadEmails(inbox)
		break

	}else if(userChoice == "2"){
		let userInputMarkAsSpam = prompt("Index of email you would like to mark as spam: ")
		inbox[userInputMarkAsSpam].markAsSpam()
		getSpamEmails(inbox)
		break

		//	Place your logic here
	}else if(userChoice == "3"){
		//	Place your logic here
	}else if(userChoice == "4"){
		//	Place your logic here
	}else if(userChoice == "5"){
		//	Place your logic here
	}else if(userChoice == "6"){
		//	Place your logic here
	}else if(userChoice == "7"){
		console.log("Goodbye");
	}else{
		console.log("Oops - incorrect input");
		
	}
}


/*
Resources Used:
(1) https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class: Information regarding pushing instances of classes to arrays
(2) https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array: Information regarding removing elements of arrays at specific index's
*/