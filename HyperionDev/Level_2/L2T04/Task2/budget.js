//? Creating the JS income object
//? (1) https://developer.mozilla.or
function income(name, amount, recurring){
    this.name = name
    this.amount = amount
    this.recurring = recurring
}

const income1 = new income("Work", 20000, true)
const income2 = new income("Parents", 1000, false)
const income3 = new income("Renting Out Property", 2500, true)
const income4 = new income("Stock Trading", 7500, false)
const income5 = new income("Crypto Currency", 4500, false)



//! Creating the JS expense object
function expense(name, amount, recurring){
    this.name = name
    this.amount = amount
    this.recurring = recurring
}

const expense1 = new expense("Grocieries", 1700, false)
const expense2 = new expense("Electricty", 500, true)
const expense3 = new expense("DSTV", 800, true)
const expense4 = new expense("Internet", 950, true)
const expense5 = new expense("Gym Membership", 650, true)



//^ Storing the values in Session Storage
const incomeArray = [income1, income2, income3, income4, income5]
const expenseArray = [expense1, expense2, expense3, expense4, expense5]


//* (2) https://www.w3schools.com
// & Buttons on index.html to call the function: displayIncome() & displayExpense() & displayDisplosableIncome() & transferIncomeToSavings()
//& Display Income
const displayIncome = () => {
    const retirvedItems = JSON.parse(sessionStorage.getItem('Income'))

    //& Prompting user to add more data 
    const promptName = prompt("Enter name")
    const promptAmount = prompt("enter Amount")
    let promptRecurring =prompt("Enter Recurring")

    //& Converting a string of 'true' or 'false' into a Boolean.
    if(promptRecurring === "false" || promptRecurring === "False"){
        promptRecurring = false
    }

    else if(promptRecurring === "true" || promptRecurring === "True"){
        promptRecurring = true
    }

    incomeArray.push(new income(promptName, parseInt(promptAmount), promptRecurring))

    //^ Storing the values in Session Storage
    sessionStorage.setItem("income", JSON.stringify(incomeArray))


    for(let i = 0; i < incomeArray.length; i++){
        console.log(incomeArray[i])
    }

 
    console.log("totalIncome", displayTotalIncome())


    

}

//* (2) https://www.w3schools.com
//& Display Expense
const displayExpense = () => {
    const retirvedItems = JSON.parse(sessionStorage.getItem('Expenses'))

    //& Prompting user to add more data 
    const promptName = prompt("Enter name")
    const promptAmount = prompt("enter Amount")
    let promptRecurring =prompt("Enter Recurring")

    //& Converting a string of 'true' or 'false' into a Boolean.
    if(promptRecurring === "false" || promptRecurring === "False"){
        promptRecurring = false
    }

    else if(promptRecurring === "true" || promptRecurring === "True"){
        promptRecurring = true
    }

    expenseArray.push(new expense(promptName, parseInt(promptAmount), promptRecurring))

    //^ Storing the values in Session Storage
    sessionStorage.setItem("Expnese", JSON.stringify(expenseArray))


    for(let i = 0; i < expenseArray.length; i++){
        console.log(expenseArray[i])
    }

   
    

    console.log("totalExpense", displayTotalExpense())


    // console.clear()
}

//& Calculating total income
const displayTotalIncome = () => {
let totalIncome = 0
    for(let i = 0; i < incomeArray.length; i++){
    totalIncome = incomeArray[i].amount + totalIncome
    }   
    return totalIncome
}

//& Calculating total expense
const displayTotalExpense = () => {
    let totalExpense = 0
    for(let i = 0; i < expenseArray.length; i++){
        totalExpense = expenseArray[i].amount + totalExpense
    }
    return totalExpense
}

//* This functions will display the disposable income
const displayDisplosableIncome = () =>{

    const disposableIncome = displayTotalIncome() - displayTotalExpense()
    console.log("Disposable Income:", disposableIncome)

    sessionStorage.setItem("DisposableIncome", JSON.stringify(disposableIncome))



    return disposableIncome

}
//~ Function to transfer money to savings
const transferIncomeToSavings = () => {
    const savingTransferAmount = prompt("How much would you like to transfer to your savings")
    
    const amountLeft = displayDisplosableIncome() - savingTransferAmount

    //~ Overwriting the amount (after the money was put into the savings) to session storage
    sessionStorage.setItem("DisposableIncome", JSON.stringify(amountLeft))

    //~ Saving the amount the user wants to transfer to session storage, under the savings key
    sessionStorage.setItem("SavingsAccount", JSON.stringify(savingTransferAmount))


    alert(`You have ${amountLeft} in your Disposable Income`)

    
}







/*
 * Resounrces Used:
 * (1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new: Information regarding JS objects with the 'new' keyword
 * (2) https://www.w3schools.com/jsref/event_onclick.asp: Information regarding the 'onlick=""' function in HTML
 */