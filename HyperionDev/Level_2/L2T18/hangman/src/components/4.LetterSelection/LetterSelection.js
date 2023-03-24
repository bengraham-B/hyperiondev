import React from 'react'
import './letter-selction.css'

import {displayLetter, removeChoosenLetter, displayGueses, playerLivesCount} from '../../store/hangman' //^ Importing Reducers
import { useDispatch, useSelector } from "react-redux";

export default function WordSelection() {
	const dispatch = useDispatch()
	const displayLetterFromRedux = useSelector((state) =>  state.hangman.letters)
	const testing = useSelector((state) => state.hangman.letters)

	// console.log( typeof testing)

	//^ This function retrevies the letter the user slected from the "LetterSelectin Component"
	const handleClick = (e) => {

		dispatch(displayLetter(e.target.innerHTML))
		dispatch(removeChoosenLetter(e.target.innerHTML))
		dispatch(displayGueses(e.target.innerHTML))
		dispatch(playerLivesCount(e.target.innerHTML))
	}

	
	return (
		<div className="letter-selection-container">
			{
				//TODO Create an object here {letter: "A", choosen: false} and if "choosen" is false, only then render the object.
				displayLetterFromRedux?.map( (letter) =>  
				letter.choosen ? <></> : <button onClick={handleClick} className="letter-selection-letter-button">{letter.letter}</button>

				)

			}
		</div>
	)
}
