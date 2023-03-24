import { createSlice } from "@reduxjs/toolkit";


export const hangmanSlice = createSlice({
    name: "hangman",

    initialState : {
        word: "AVIATION",
        userGuess: [],
        gueses: [
            {guess:"A", show: false}, 
            {guess:"V", show: false}, 
            {guess:"I", show: false}, 
            {guess:"A", show: false}, 
            {guess:"T", show: false}, 
            {guess:"I", show: false}, 
            {guess:"O", show: false}, 
            {guess:"N", show: false}, 
        ],
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
        //^ Displays leeters to the screen to form the keyboard
        displayLetter: (state, letter) => {
            state.userGuess.push({userLetter:letter.payload})

            //^ Checks to see if the user inputed letter is contained within the word
            if (!state.word.includes(letter)){ //* (1)www.w3schools.com/
                if(state.lives === 0){
                    alert("GAME OVER")
                    state.gameEnd = true

                   
                }
            }

        },

        playerLivesCount: (state, letter) => {
            //TODO if the letter is correct do not add one to lofe by using an if statement...
            console.log("playerLives from REDUX:",letter.payload)

            const guesesArray = []

            for(let i = 0; i < state.gueses.length; i++){
                guesesArray.push(state.gueses[i].guess)
            }
                console.log(guesesArray)

                if(!guesesArray.includes(letter.payload)){
                    state.lives = state.lives + 1
                }

            //* This reducer is mainly used in 2.Game/Game.js
            // console.log("playerLives from REDUX:", state.lives)
            if(state.lives < 12){
                // state.lives = state.lives + 1
            }
            else{
                state.lives = 1
			    alert("GAME OVER :( ")

                //& This will reset the user gueses if they loose the game
                for(let i = 0; i < state.gueses.length; i++){
                    state.gueses[i].show = false
                }

            }


        },

        //^ Displays all the correct guesses the user made.
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
            }
            
            
        },

        removeChoosenLetter: (state, letter) => {
            //* if the word contains the user's letter: true
            if (state.word.split("").includes(letter.payload)){ //* (1)www.w3schools.com/

            }

            //! if the word does not contains the user's letter: false
            else {

                state.letters = state.letters.filter((obj) => {
                    return obj.letter !== letter.payload

                })
            }
        }

    }
})

export const {displayLetter, removeChoosenLetter, displayGueses, playerLivesCount} = hangmanSlice.actions 
export default hangmanSlice.reducer


/*
 * Resounrces Used:
 * (1) https://www.w3schools.com/jsref/jsref_includes.asp: Information redarding the '.includes Method'
 * (2) https://bobbyhadz.com/blog/javascript-check-if-all-array-values-true: Information regarding the .everyArray method in JS.
 */