// ! ----------------------------- Extra Info -----------------------------
//? Stores Objects as strings using JSON
//  const objExtra = {
//     name: "bob",
//     age: 45
// }

//sessionStorage.setItem('person', JSON.stringify(objExtra)) //? Convert JSON Object to a string in order to save to session storage

//? Retrive JSON Object from session storage in the form of a string and use JSON.parse() to convert
//? it back to an object.
//JSON.parse(sessionStorage.getItem('person'))

//const retrivedJSONObject = JSON.parse(sessionStorage.getItem('person')) //? Accessing the properties of the JSON object

// ! ---------------------------------------------------------------------------------------

//^  --------- Getting HTML Elements ---------
const submitBtn = document.getElementById("submit-btn");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookNumberOfPages = document.getElementById("book-number-of-pages");
const bookInfoContainer = document.getElementById("book-div-containerr");
const bookInfo = document.getElementById("book-info");

const bookObjectArray = [];


//^  --------- Adding Functionality to Submit Button ---------
submitBtn.addEventListener("click", () => {
  console.log("Added");

const bookObject = {
		title: bookTitle.value,
		author: bookAuthor.value,
		numberPages: bookNumberOfPages.value,
  	};

  bookObjectArray.push(bookObject);
  console.log(bookObjectArray)

  displayBook()

  sessionStorage.setItem("books", JSON.stringify(bookObjectArray));
});

//^  --------- Listing Data on Web Page ---------

//! Creating the delete button.
const addDeleteBtn = (parentElement) => {
	const deleteBtn = document.createElement("span");
	deleteBtn.setAttribute("id", "deleteBtn");
	deleteBtn.innerHTML = " \u00D7";
	deleteBtn.style.color = "blue";

	deleteBtn.addEventListener("click", (e) => {
		parentElement.remove(e);
	});

	parentElement.appendChild(deleteBtn);
};

//~ Creating the Edit button - the stlyes
const addEditBtn = (parentElement, title, author, pages, index) => {
	const editBtn = document.createElement("btn");
	editBtn.setAttribute("id", "edit-btn");
	editBtn.innerHTML = " Edit";
	parentElement.append(editBtn);

  	editBtn.addEventListener('click', () => {
		bookObjectArray[index].title = prompt("Enter new Title: " + bookObjectArray[index].title)
		bookObjectArray[index].author = prompt("Enter new Author: " + bookObjectArray[index].author)
		bookObjectArray[index].numberPages = prompt("Enter new Number of Pages: " + bookObjectArray[index].numberPages)
		
		sessionStorage.set('book', JSON.stringify(newBook))
		displayBook()
	})
};

displayBook()
//^  --------- For Loop which creates Divs and inputs the data from session storage ---------
function displayBook() {
	bookInfo.innerHTML = ""
	for (let i = 0; i < bookObjectArray.length; i++) {
	
	bookInfo.setAttribute("id", "book-info");

	const book = document.createElement("div");
	book.setAttribute("id", "book");

	const bookNumber = document.createElement("div");
	bookNumber.setAttribute("class", "book-number");
	bookNumber.innerHTML = i ;

	const bookTitleDiv = document.createElement("div");
	bookTitleDiv.setAttribute("class", "book-div");
	bookTitleDiv.innerHTML = "Book Title: " + bookObjectArray[i].title;

	const bookAuthorDiv = document.createElement("div");
	bookAuthorDiv.setAttribute("class", "book-div");

	bookAuthorDiv.innerHTML = "Book Author: " + bookObjectArray[i].author;

	const bookPagesDiv = document.createElement("div");
	bookPagesDiv.setAttribute("class", "book-div");
	bookPagesDiv.innerHTML = "Number of Pages: " + bookObjectArray[i].numberPages;

	book.append(bookNumber);
	book.append(bookTitleDiv);
	book.append(bookAuthorDiv);
	book.append(bookPagesDiv);
	addEditBtn(book, bookTitleDiv, bookAuthorDiv, bookPagesDiv, i);
	addDeleteBtn(book); //! adding the delete button

	bookInfo.append(book);
}}

/*
 * Resourcesed Used:
 * (1) https://stackoverflow.com/questions/28606841/session-storage-how-to-store-multiple-objects: Extra information regarding accessing data from session storage.
 *
 *
 */
