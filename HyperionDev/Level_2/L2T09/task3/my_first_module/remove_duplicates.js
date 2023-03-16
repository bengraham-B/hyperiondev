const lodash = require('lodash')
const array = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10]

console.log(
    //(1) www.stackoverflow.com
    lodash.uniq([1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10], ()=>{
        return array
    })
)


/**
 * Resources Used: 
 * (1) https://stackoverflow.com/questions/31740155/lodash-remove-duplicates-from-array: information regarding, lodash's 'uniq' function.
 */
