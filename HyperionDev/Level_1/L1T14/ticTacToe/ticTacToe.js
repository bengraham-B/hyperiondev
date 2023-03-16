// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you


/* ============================================= My Code ============================================= */

/*
Adding all the above arrays into 'playArray' which will then be provided to the function
'evaluatePlay' which will loop over each item in playArray and determine which type of 
win each item represensts

*/
const playArray = [
    rowWin,
    colWin,
    diagonalWin,
    diagonalWinInverse
]

function evaluatePlay(array){
    
    // This '.forEach' will loop over the wins in the provided array and determine the type of win
    array.forEach((grid) => {
        if( // Tests for rowWin
            grid[0][0] == 'O' && grid[0][1] == 'O' && grid[0][2] == 'O' &&
            grid[1][0] == '' && grid[1][1] == '' && grid[1][2] == '' &&
            grid[2][0] == '' && grid[2][1] == '' && grid[2][2] == ''){
            console.log("==== Row Win ====")
            console.log("X - Lost")
            console.log("O - Won")
        } 
        
        else if( //Tests for colWin   
            grid[0][0] == '' && grid[0][1] == 'X' && grid[0][2] == '' &&
            grid[1][0] == '' && grid[1][1] == 'X' && grid[1][2] == '' &&
            grid[2][0] == '' && grid[2][1] == 'X' && grid[2][2] == ''){
            console.log("==== Column Win ====")
            console.log("X - Won")
            console.log("O - Lost")
        } 
        
        else if( //Tests for diagonalWin
            grid[0][0] == '' && grid[0][1] == '' && grid[0][2] == 'O' &&
            grid[1][0] == '' && grid[1][1] == 'O' && grid[1][2] == '' &&
            grid[2][0] == 'O' && grid[2][1] == '' && grid[2][2] == ''){
            console.log("==== Diagonal Win ====")
            console.log("X - Lost")
            console.log("O - Won")
        } 
        
        else if( //Tests for diagonalWinInverse 
            grid[0][0] == 'X' && grid[0][1] == '' && grid[0][2] == '' &&
            grid[1][0] == '' && grid[1][1] == 'X' && grid[1][2] == '' &&
            grid[2][0] == '' && grid[2][1] == '' && grid[2][2] == 'X'){
            console.log("==== Diagonal Inverse Win ====")
            console.log("X - Won")
            console.log("O - Lost")
        }
        
        else { // If an item in the array does represent a type of win, the function will return 'No Win'
            console.log("No Win")
        }
    
        console.log("-------------------------")
        
        
    })
}

// Calling the function 
evaluatePlay(playArray)
