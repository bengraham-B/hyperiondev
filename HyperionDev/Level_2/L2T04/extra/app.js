let data = {firstName:'john', lastName:'doe'};
let data2 = {firstName:'Simon', lastName:'Samuals'}
let data3 = {firstName:'Allen', lastName:'Smith'}
let data4 = {firstName:'Dixin', lastName:'Willims'}

let objectArray = [
    data,
    data2,
    data3,
    data4
]

sessionStorage.setItem('queryData', JSON.stringify(objectArray));
const retrivedArray = JSON.parse(sessionStorage.getItem('queryData'))
const userUpdateValue = "john"
const findUserIndex = retrivedArray.findIndex(obj => {
    return obj.firstName === "Dixin" && obj.lastName === "Willims"
})

console.log(findUserIndex)


const editData = (sessionStorageName, valueToUpdate, value) => {
    let prevData = JSON.parse(sessionStorage.getItem(sessionStorageName));

    for(let i = 0; i < prevData.length; i++){
        console.log(prevData[i])

        div(prevData[i].firstName, prevData[i].lastName, body)
    }

}

//! Creating the delete button.
const addEditBtn = (parentElement) => {
    const deleteBtn = document.createElement("span");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.innerHTML = "     Edit";
    deleteBtn.style.color = "blue";
  
    deleteBtn.addEventListener("click", (e) => {

        const toEditFirstName = document.getElementById('div-first-name').innerHTML
        const toEditLastName = document.getElementById('div-last-name').innerHTML

        console.log(toEditFirstName, toEditLastName)

        let prevData = JSON.parse(sessionStorage.getItem('queryData'));

        for(let i = 0; i < prevData.length; i++){
            // console.log(prevData[i])
    
            // div(prevData[i].firstName, prevData[i].lastName, body)
        }
    });
  
    parentElement.appendChild(deleteBtn);
};





const div = (fname, lname, parent) =>{
    const div = document.createElement('div')
    div.setAttribute('id', 'parent-div')

    const divTextContainer = document.createElement('div')
    div.setAttribute('id', 'div-text-container')


    const fnameDiv = document.createElement('div')
    fnameDiv.setAttribute('class', 'div')
    fnameDiv.setAttribute('id', 'div-first-name')
    fnameDiv.innerHTML = fname

    const lnameDiv = document.createElement('div')
    lnameDiv.setAttribute('class', 'div')
    lnameDiv.setAttribute('id', 'div-last-name')
    lnameDiv.innerHTML = lname

    divTextContainer.append(fnameDiv)
    divTextContainer.append(lnameDiv)

    div.append(divTextContainer)

    addEditBtn(div)

    parent.append(div)



}

const body = document.getElementById('body')



editData('queryData', "", "")





function update(value, data){
    let prevData = JSON.parse(sessionStorage.getItem(data));
    Object.keys(value).forEach(function(val, key){
         prevData[val] = value[val];
    })
    sessionStorage.setItem(data, JSON.stringify(prevData));
}

// update({

// }, 'queryData')

