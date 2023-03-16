let userMotherFirstName = prompt("Enter your mother's first name: ")
let userStreetTheyGrewUp = prompt("Enter the street name which you grew up on: ")
let userFavouriteColourAsAChild = prompt("Enter your favourite colour as a child: ")
let userCurrentAge = prompt("Enter your current age: ")
let numberBetweenOneAndTen = prompt("Enter a number between 1 and 10: ")

console.log(
      `${numberBetweenOneAndTen} years from now, you are going to meet your best friend named ${userMotherFirstName +" "+ userStreetTheyGrewUp}. 
      You will get married in ${Math.round(userCurrentAge / numberBetweenOneAndTen)} years and have ${userCurrentAge % numberBetweenOneAndTen} children. 
      In ${userCurrentAge - numberBetweenOneAndTen} years you and your best friend ${userMotherFirstName +" "+ userStreetTheyGrewUp}, will dye your hair ${userFavouriteColourAsAChild}`
)


// Used https://www.w3schools.com/jsref/jsref_round.asp as my source regarding Math.round