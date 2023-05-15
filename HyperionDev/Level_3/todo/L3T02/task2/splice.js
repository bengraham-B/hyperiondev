const array = [
    {name:"red", price: 2}, 
    {name:"yellow", price: 4}, 
    {name:"blue", price: 6},
    {name:"green", price: 67}
]

console.log(array.map((item) => item.name).indexOf("green"))
