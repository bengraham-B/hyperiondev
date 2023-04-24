import React, {useState, useEffect} from 'react'
import './letter-selction.css'

import {displayLetter, removeChoosenLetter, displayGueses, playerLivesCount, resetGame} from '../../store/hangman' //^ Importing Reducers
import { useDispatch, useSelector } from "react-redux";

export default function WordSelection() {

	/*
	* 			 --- The gameReset state and gameResetCounter state ---
	*
	* The gameReset state will update the state, when the Redux state, gameEnd === true, 
	* 	this will mean that the keyborard is reset when the game is over.
	*
	* The gameResetCounter state increments every time the user clicks a letter on the keyboard
	* 	and this state variable is place inside useEffect array, which will mean the every time 
	* 	a user clicks a letter on the keybard it will check if the gameEnd from REDUX, 
	*   gameEnd === true, and if so reset the game.
	*
	*/

	
	const [gameReset, setGameReset] = useState()
	let [gameResetCounter, setGameResetCounter] = useState(0)
	
	const [gameFirstRender, setGameFirstRender] = useState()

	const dispatch = useDispatch()
	const displayLetterFromRedux = useSelector((state) =>  state.hangman.letters)
	const getGameEndStateFromRedux = useSelector((state) =>  state.hangman.gameEnd)
	const testing = useSelector((state) => state.hangman.letters)


	//^ This function retrevies the letter the user slected from the "LetterSelectin Component"
	const handleClick = (e) => {
		dispatch(displayLetter(e.target.innerHTML))
		dispatch(removeChoosenLetter(e.target.innerHTML))
		dispatch(displayGueses(e.target.innerHTML))
		dispatch(playerLivesCount(e.target.innerHTML))
		console.log("Game Over from letter-selection",getGameEndStateFromRedux)
		setGameResetCounter(() => gameResetCounter += 1)
	}

	useEffect(() => {
		setGameFirstRender(displayLetterFromRedux?.map( (letter) =>  
			letter.choosen ? <></> : <button key={letter.letter} onClick={handleClick} className="letter-selection-letter-button">{letter.letter}</button>
		))

	}, [])

	useEffect(() => {
		if(getGameEndStateFromRedux){
			dispatch(resetGame())
			console.log("Game Reset")
			setGameReset(displayLetterFromRedux?.map( (letter) =>  
				letter ? <></> : <button key={letter.letter} onClick={handleClick} className="letter-selection-letter-button">{letter.letter}</button>
			))
		}

	}, [gameResetCounter])



	
	return (
		<div className="letter-selection-container">
			{gameReset}
			{gameFirstRender}
			{/* {
				//TODO Create an object here {letter: "A", choosen: false} and if "choosen" is false, only then render the object.
				displayLetterFromRedux?.map( (letter) =>  
				letter.choosen ? <></> : <button onClick={handleClick} className="letter-selection-letter-button">{letter.letter}</button>

				)
			} */}
		</div>
	)
}
