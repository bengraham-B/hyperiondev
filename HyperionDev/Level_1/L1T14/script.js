const rowWin = [
    ["O", "O", "O"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

const colWin = [
    ["-", "X", "-"],
    ["-", "X", "-"],
    ["-", "X", "-"]
]

const diagonalWin = [
    ["-", "-", "O"],
    ["-", "O", "-"],
    ["O", "-", "-"]
]

const diagonalWinInverse = [
    ["X", "-", "-"],
    ["-", "X", "-"],
    ["-", "-", "X"]
]







const evaluateGrid = (grid) =>{
    if( //& rowWin   //* Works
        grid[0][0] == 'O' && grid[0][1] == 'O' && grid[0][2] == 'O' &&
        grid[1][0] == '-' && grid[1][1] == '-' && grid[1][2] == '-' &&
        grid[2][0] == '-' && grid[2][1] == '-' && grid[2][2] == '-'){
        console.log("X - Lost")
        console.log("O - Won")
    } 

    else if( //&  colWin   //* Works
        grid[0][0] == '-' && grid[0][1] == 'X' && grid[0][2] == '-' &&
        grid[1][0] == '-' && grid[1][1] == 'X' && grid[1][2] == '-' &&
        grid[2][0] == '-' && grid[2][1] == 'X' && grid[2][2] == '-'){
        console.log("X - Won")
        console.log("O - Lost")
    } 

    else if( //& diagonalWin   //* Works
        grid[0][0] == '-' && grid[0][1] == '-' && grid[0][2] == 'O' &&
        grid[1][0] == '-' && grid[1][1] == 'O' && grid[1][2] == '-' &&
        grid[2][0] == 'O' && grid[2][1] == '-' && grid[2][2] == '-'){
        console.log("X - Lost")
        console.log("O - Won")
    } 

    else if( //& diagonalWinInverse //* Works
        grid[0][0] == 'X' && grid[0][1] == '-' && grid[0][2] == '-' &&
        grid[1][0] == '-' && grid[1][1] == 'X' && grid[1][2] == '-' &&
        grid[2][0] == '-' && grid[2][1] == '-' && grid[2][2] == 'X'){
        console.log("X - Won")
        console.log("O - Lost")
    }

    else {
        console.log("No Win")
    }

    console.log("-------------------------")

}


//^ This array is storing all the possible wins for TicTacToe
const playArray = [
    diagonalWinInverse,
    diagonalWin,
    colWin,
    rowWin
]

//^ This .forEach will loop over the wins in
playArray.forEach((grid) => {
    if( //& rowWin   //* Works
        grid[0][0] == 'O' && grid[0][1] == 'O' && grid[0][2] == 'O' &&
        grid[1][0] == '-' && grid[1][1] == '-' && grid[1][2] == '-' &&
        grid[2][0] == '-' && grid[2][1] == '-' && grid[2][2] == '-'){
        console.log("X - Lost")
        console.log("O - Won")
    } 
    
    else if( //&  colWin   //* Works
        grid[0][0] == '-' && grid[0][1] == 'X' && grid[0][2] == '-' &&
        grid[1][0] == '-' && grid[1][1] == 'X' && grid[1][2] == '-' &&
        grid[2][0] == '-' && grid[2][1] == 'X' && grid[2][2] == '-'){
        console.log("X - Won")
        console.log("O - Lost")
    } 
    
    else if( //& diagonalWin   //* Works
        grid[0][0] == '-' && grid[0][1] == '-' && grid[0][2] == 'O' &&
        grid[1][0] == '-' && grid[1][1] == 'O' && grid[1][2] == '-' &&
        grid[2][0] == 'O' && grid[2][1] == '-' && grid[2][2] == '-'){
        console.log("X - Lost")
        console.log("O - Won")
    } 
    
    else if( //& diagonalWinInverse //* Works
        grid[0][0] == 'X' && grid[0][1] == '-' && grid[0][2] == '-' &&
        grid[1][0] == '-' && grid[1][1] == 'X' && grid[1][2] == '-' &&
        grid[2][0] == '-' && grid[2][1] == '-' && grid[2][2] == 'X'){
        console.log("X - Won")
        console.log("O - Lost")
    }
    
    else {
        console.log("No Win")
    }

    console.log("-------------------------")
    
    
})
