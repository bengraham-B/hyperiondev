import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {showRules} from '../../store/hangman' //^ Importing Reducers

export default function Rules() {
	const dispatch = useDispatch()
	const rulesFromredux = useSelector((state) => state.hangman.rules)

	function handleCloseRules(){
		dispatch(showRules(rulesFromredux))

	}
  return (
    <div id="RULES_CONTAINER">
		<h3>Rules of Hangman</h3>

		<ol>
			<li>1.The user will attempt to discover the word by guessing letters of the word.</li>
			<li>2.The user will have eleven attempts if they guess the wrong letter.</li>
			<li>3.If the user successfully guesses all the letters correctly they win the game.</li>
			<li>4.If the user successfully guesses all the letters correctly they win the game.</li>
			<li>5.If the user wins the game will reset and they can try again.</li>
		</ol>

		<button onClick={handleCloseRules}>Close Rules</button>
    </div>
  )
}
