
// This js file will hide the emplty 'div-element' from the DOM.

const divElements = document.getElementsByClassName("div-element")

console.log(divElements.length)

for(let i = 0; i < divElements.length; i++){
    if(divElements[i].innerHTML === ""){
    // divElements[i].style.display = 'none';
    divElements[i].style.background = 'inherit';
    // divElements.style.background = 'red'
}}