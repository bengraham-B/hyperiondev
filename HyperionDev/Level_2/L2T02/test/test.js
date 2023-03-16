const array = [
    "ONE",
    "TWO",
    "THREE",
    "FOUR"
]

const listParent = document.getElementById('list-parent')

for(let i = 0; i < array.length; i++){

    const listItem = document.createElement('li')
    listItem.innerHTML = array[i]
    listItem.setAttribute('id', i)

    const delBtn = document.createElement('span')
    delBtn.setAttribute('class', 'delete-btn')
    delBtn.setAttribute('id', `deleteBtn: ${i}`)
    delBtn.innerHTML = 'x'
    listItem.append(delBtn)

    delBtn.addEventListener('click', (e) =>{
        console.log(e.target.id, e.target.innerHTML)
        listItem.remove(e)
        
    })




    listParent.append(listItem)
}