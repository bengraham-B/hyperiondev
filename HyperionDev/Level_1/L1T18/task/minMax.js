let array = [23, 45, 22, 69, 33]

let result = array.map((i) => {
    return(parseInt(i))

})

const lowest = Math.min(...array)
const highest = Math.max(...array)

console.log(lowest)
console.log(highest)

console.log(typeof array)