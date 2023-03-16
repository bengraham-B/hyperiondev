/*
 * Corrections As requested:
 * (1) Keypress envent: line 78 - 82
 * (2) Checked Function: line 52 & 92 - 96
 */


// & --- Getting Elements from index.html ---
const addBtn = document.querySelector("#add-btn");
const ul = document.getElementById("item-list");
const input = document.querySelector("#input");

// * Array of the grocery items.
const groceryItems = ["Eggs", "Milk", "Bread", "Butter"];

//* Calling the function.
displayList();

function displayList() {
	//* --- Creating the list items ---
	for (let i = 0; i < groceryItems.length; i++) {
		const li = document.createElement("li");
		li.setAttribute("class", "li");

		const divContainer = document.createElement("div");
		divContainer.setAttribute("class", "div-container"); // Used for styling.
		divContainer.setAttribute("id", groceryItems[i]); //Index to delete the item from the array.

		const paraTag = document.createElement("p");
		paraTag.innerHTML = groceryItems[i];

		divContainer.append(paraTag);

		//~ --- Calling the createSpan function ---
		createSpan(divContainer, li, groceryItems[i]);
		li.append(divContainer);

		ul.append(li);
	}
}

//^ --- Create Span ---
function createSpan(parentElement, divConainerParentElement, deleteId) {
	//? The parentElement, is what the span will be append to
	const span = document.createElement("span");
	span.setAttribute("class", "-x-"); //? This is the class which handles styling the "x"
	span.innerHTML = "\u00D7";

	//? Adding the delete functianlity to the span elements
	span.addEventListener("click", () => {
		deleteItem(parentElement, divConainerParentElement, deleteId);
		addCloseClass(divConainerParentElement) //& Calling the function to add the class 'close' - functionis on line 92
	});





	parentElement.append(span);
}

//^ --- Delete Items from array and from the shopping list display ---
function deleteItem(parentElement, divConainerParentElement, deleteId) {
	const getDivContainerForDelete = parentElement; //? This gets the div tag in the li element
	const getParaTagForDelete = parentElement.firstChild; //? This gets the paragraphy tag in the div element
	const getSpanTagForDelete = parentElement.lastChild; //? This gets the span tag in the div element

	//~ Remove list item from array
	groceryItems.splice(groceryItems.indexOf(deleteId), 1);

	console.log("Delete item", deleteId);
	// console.log(groceryItems.indexOf(getParaTagForDelete.value))
	// console.log(getParaTagForDelete)

	//~ Remove list item from DOM
	// divConainerParentElement.remove(getDivContainerForDelete)
	
	// divConainerParentElement.style.display = "none"; // This sets list parent element's display to none.

	console.log("Array:", groceryItems);
}


//& --- Adding the keypress envent ---
//& The document.querySelector() is on line 4
input.addEventListener("keypress", function(event){
	if (event.key === "Enter") {
		addBtnOnCLick()
	}
})

//& --- Function to cross out items  ---
function addCloseClass(element){
	element.classList.add('close') //& This adds the class to the item.
	console.log("Line 96")
}




//^ This function will update the gocery list when the input is full and click the 'add item' button
function addBtnOnCLick() {
	//? adding a click event listener to the add button so only when clicked will it notify the user whether the inpu is empty or has text.
	//? The if statement checks if the input is empty or not
	if (input.value === "") {
		alert("The input field is empty!");
	}

	//? If the input contains text it will execute the code below.
	else {
		const li = document.createElement("li");
		li.setAttribute("class", "li");

		const divContainer = document.createElement("div");
		divContainer.setAttribute("class", "div-container");

		const paraTag = document.createElement("p");
		paraTag.innerHTML = input.value;

		divContainer.append(paraTag);

		//~ --- Calling the createSpan function ---
		createSpan(divContainer, li);
		li.append(divContainer);

		ul.append(li);

		groceryItems.push(input.value); //? Pushing the text of the create elemenet to the 'groceryItems' Array
		console.log(groceryItems);
  	}

	//? Reseting the input value to empty after the user has added an item
	input.value = "";
}
