// * Array of the grocery items.
const groceryItems = [
    "Eggs",
    "Milk",
    "Bread",
    "Butter"
]

//* Getting the ul list in 'index.html'
const ul = document.getElementById("itemList")

const displayList = () => {
    //* --- Creating the list items ---
    for(let i = 0; i < groceryItems.length; i++){
        const li = document.createElement("li")
        li.innerHTML = groceryItems[i]
        li.classList.add('li')
        ul.append(li)
    }

    //* --- Changing bought item's text colour to green ---
    const boughtItem = document.getElementsByClassName('li')[1]
    boughtItem.style.color = 'green'
    
    const otherBoughtItem = document.getElementsByClassName('li')[3]
    otherBoughtItem.style.color = 'green'
}


//* Calling the function.
displayList()
