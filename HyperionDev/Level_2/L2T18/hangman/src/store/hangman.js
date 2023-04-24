import { createSlice } from "@reduxjs/toolkit";

export const hangmanSlice = createSlice({
    name: "hangman",

    initialState : {
        word: "AVIATION",
        userGuess: [],
        gueses: [
            {guess:"G", show: false}, 
            {guess:"R", show: false}, 
            {guess:"A", show: false}, 
            {guess:"H", show: false}, 
            {guess:"A", show: false}, 
            {guess:"M", show: false}, 

        ],
        rules: false,
        lives: 1,
        gameEnd: false,
        letters: [
            {letter: "A", choosen: false},
            {letter: "B", choosen: false},
            {letter: "C", choosen: false},
            {letter: "D", choosen: false},
            {letter: "E", choosen: false},
            {letter: "F", choosen: false},
            {letter: "G", choosen: false},
            {letter: "H", choosen: false},
            {letter: "I", choosen: false},
            {letter: "J", choosen: false},   
            {letter: "K", choosen: false},
            {letter: "L", choosen: false},
            {letter: "M", choosen: false},
            {letter: "N", choosen: false},
            {letter: "O", choosen: false},
            {letter: "P", choosen: false},
            {letter: "Q", choosen: false},
            {letter: "R", choosen: false},
            {letter: "S", choosen: false},
            {letter: "T", choosen: false},
            {letter: "V", choosen: false},
            {letter: "W", choosen: false},
            {letter: "X", choosen: false},
            {letter: "Y", choosen: false},
            {letter: "Z", choosen: false}
        ]

    },

    //! All reducers are called in 4.LetterSection/LetterSelection.js
    reducers: {
        //^ Displays leeters to the screen, which form the keyboard for the user to input their guesses.
        displayLetter: (state, letter) => {
            state.userGuess.push({userLetter:letter.payload})

            //^ Checks to see if the user inputed letter is contained within the word
            if (!state.word.includes(letter)){ //* (1)www.w3schools.com/
                if(state.lives === 0){
                    alert("GAME OVER")                   
                }
            }
        },






        playerLivesCount: (state, letter) => {
            const guesesArray = []

            for(let i = 0; i < state.gueses.length; i++){
                guesesArray.push(state.gueses[i].guess)
            }
                if(!guesesArray.includes(letter.payload)){
                    state.lives = state.lives + 1
                }

            //* This reducer is mainly used in 2.Game/Game.js
            if(state.lives < 12){

            }
            else{
                state.lives = 1
			    alert("GAME OVER :( ")

                state.gameEnd = true

                //& This will reset the user gueses if they loose the game
                for(let i = 0; i < state.gueses.length; i++){
                    state.gueses[i].show = false
                }

            }
        },






        //^ Displays all the correct guesses the user made within the 3.UserLetters component.
        displayGueses: (state, letter) => {
            console.log(state.lives)
            //& Cheks if user's letter matches with letters in the state.guess object/
            for(let i = 0; i < state.gueses.length; i++){
                if(state.gueses[i].guess === letter.payload){
                    state.gueses[i].show = true
                    console.log("state.lives:", state.lives)
                }
            }

            //& adds the object value of shown to an array, so it can be looped over and if all the values are 'true' the user will have won the game
            const guesesArray = []
            for(let i = 0; i < state.gueses.length; i++){
                guesesArray.push(state.gueses[i].show)
            }

            //& Determine if the game has been won!
            //? (2) bobbyhadz.com
            if(guesesArray.every(element => element === true)){
                alert("WON")
                state.gameEnd = true

                // //& This for loop resets the 3.UserLetters component, when the user fails or compeletes the game
                for(let i = 0; i < state.gueses.length; i++){
                    state.gueses[i].show = false
                    console.log("BOOOOOOOOOOOOOOOO", state.gueses[i].choosen)
                }
            }

        },






        //^ Removes a letter from the keboard, diplayed by the 'displayLetter' reducer
        removeChoosenLetter: (state, letter) => {
            //* if the word contains the user's letter: true
            if(!state.word.split("").includes(letter.payload) || state.word.split("").includes(letter.payload)){ //* (1)www.w3schools.com/
                  state.letters = state.letters.filter((obj) => {
                    return obj.letter !== letter.payload
                })
            }
        },

        //^ Tracks the state, regarding showing the rules and the button to close the rules components.
        showRules:(state, currentState) => {
            console.log("currentState.payload:", currentState.payload)
            state.rules = !state.rules
        },






        resetGame:(state) => {
            console.log("from redux LOG")

            state.lives = 1



            for(let i = 0; i < state.letters.length; i++){
                state.letters[i].choosen = false
            }

            //& This for loop resets the 3.UserLetters component, when the user fails or compeletes the game
            for(let i = 0; i < state.gueses.length; i++){
                state.gueses[i].show = false
            }

            //& When the game resets the it changes the state of gameEnd back to its orginal state, false
            state.gameEnd = false
        }

    }
})

export const {displayLetter, removeChoosenLetter, displayGueses, playerLivesCount, showRules, resetGame} = hangmanSlice.actions 
export default hangmanSlice.reducer


/*
 * Resounrces Used:
 * (1) https://www.w3schools.com/jsref/jsref_includes.asp: Information redarding the '.includes Method'
 * (2) https://bobbyhadz.com/blog/javascript-check-if-all-array-values-true: Information regarding the .everyArray method in JS.
 */