/*
create your email class here
*/
let emailArray = []
let inbox = []

class Email {
	constructor(emailContents, fromAddress, isSpam, hasBeenRead){
		this.emailContents = emailContents
		this.fromAddress = fromAddress
		this.isSpam = false
		this.hasBeenRead = false

		emailArray.push(this) //Stores all the emails in a general array, in which they will be added to other more specific arrays through the programme 
	}

	markAsRead = () =>{
		this.hasBeenRead = true
	}

	markAsSpam = () =>{
		this.isSpam = true
	}
}

// Six email instances
let email0 = new Email("0: Hello hoes it going", "Jim@gmail.com")
let email1 = new Email("1: How is the project going", "Jenny@gmail.com")
let email2 = new Email("2: When will the meeting take place", "Roger@gmail.com")
let email3 = new Email("3: The deadline is on the 27th", "Sarah@gmail.com")
let email4 = new Email("4: The clients are requesting the documents", "Edward@gmail.com")
let email5 = new Email("5: The meeting with the client is canceled", "James@gmail.com")



// Addes email to the inbox array from the general mail array, 'mailArray', if unread is false on the emal instances.
const addEmail = () =>{
	for(let i = 0; i < emailArray.length; i++){
		if(emailArray[i].hasBeenRead === false){
			inbox.push(emailArray[i])
		}
	}
	return console.log("Inbox:", inbox)
}

const getCount = () => { // Returns the amount of emails in the inbox array
	let counter = 0
	for(let i = 0; i < inbox.length; i++){
		counter++
	}
	console.log("The amount of emails in your inbox is:", counter)
	return counter

}

const getEmail = (index) => { //Retrives the email at the index which the uses inputted.
	return console.log("Email:", inbox[index])
}

const readEmail = (emailIndex) => {
	console.log("Email you are reading: ", emailArray[emailIndex])
	emailArray[emailIndex].markAsRead()

	let unReadArray = [] //This array stores objects where hasBeenRead == true.

	for(let i = 0; i < emailArray.length; i++){
		if(emailArray[i].hasBeenRead != true){
			unReadArray.push(emailArray[i])
		}
	}
	return console.log("unReadArray:", unReadArray)
}

const markSpam = (emailIndex) => {
	emailArray[emailIndex].markAsSpam() //Uses class method to mark email as spam
	let spamArray = []

	for(let i = 0; i < emailArray.length; i++){
		if(emailArray[i].isSpam === true){
			spamArray.push(emailArray[i])
		}

	}
	return console.log("spamArray", spamArray)
}

const sendEmail = (sentTo, emailContents) => {
	let sentEmail = { // Creates an object, when the uses sends an email
			"Sent To": sentTo,
			"Email Contnets": emailContents
		}
	return console.log("Email Sent", sentEmail) //Logs the email the user sent to the console
}

const deleteEmail = (index) => { //This function will delete the email from array containing all the emails 
	let emailToBeDeleted = emailArray[index]
	console.log("emailToBeDeleted", emailToBeDeleted)
	emailArray.splice(emailToBeDeleted, 1)
	inbox.splice(emailToBeDeleted, 1)
}

const viewSpamEmails = (array) =>{ // Logs all the emails marked as spam to the consle 
	console.log("Spam Emails:", array)
}

const viewUnreadEmails = () => { // Logs all the emails marked as unread to the consle 
	let unreadEmailsArray = []
	for(let i = 0; i < emailArray.length; i++){
		if(emailArray[i].hasBeenRead === false){
			unreadEmailsArray.push(emailArray[i])
		}
	}
	console.log("Unread Emails",unreadEmailsArray)
}


userChoice = "";
while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");

	if(userChoice == "1"){ //Read email
		let userInputReadEmail = prompt("Enter the index of the email you which to read:")
		readEmail(userInputReadEmail)
	}
	
	else if(userChoice == "2"){ // Mark Email as spam
		let userInputMarkEmailAsSpam = prompt("Which email would you like to mark as spam: ")
		markSpam(userInputMarkEmailAsSpam)
	}
	
	else if(userChoice == "3"){ // Send Email
		let sentTo = prompt("Who would you like to send the email to: ")
		let emailContents = prompt("What would you like to say:")
		sendEmail(sentTo, emailContents)
	}
	
	else if(userChoice == "4"){ // Delete Email
		let userInputDeleteEmailIndex = prompt("Which email would you like to delete: ")
		deleteEmail(userInputDeleteEmailIndex)
	}
	
	else if(userChoice == "5"){ // view Spam
		viewSpamEmails(spamArray)
		break
	}
	
	else if(userChoice == "6"){// View Unread emails
		viewUnreadEmails()
	}
	
	else if(userChoice == "7"){ // Quit
		console.log("Goodbye");
	}else{
		console.log("Oops - incorrect input");
		
	}
}
