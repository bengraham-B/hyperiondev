import React from 'react'
import './user-letters.css'

import { useDispatch, useSelector } from 'react-redux'
import {displayLetter, removeChoosenLetter, displayGueses} from '../../store/hangman' //^ Importing Reducers


export default function UserLetters() {
	const dispatch = useDispatch()
	const userGuesesFromRedux = useSelector((state) => state.hangman.gueses)

	console.log(typeof userGuesesFromRedux)
	dispatch(displayGueses())
	return (
		<div className="user-letters-container">
			{
				userGuesesFromRedux?.map( (letter) =>  
				letter.show ? 
				<button  className="letter-selection-letter-button">{letter.guess}</button>
				: 
				<button  className="letter-selection-letter-button"></button>

				)
			}

		</div>
  )
}
