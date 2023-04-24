import React from 'react'

import {displayLetter, removeChoosenLetter, displayGueses, playerLivesCount, resetGame} from '../../store/hangman' //^ Importing Reducers
import { useDispatch, useSelector } from "react-redux";



export default function RestartButton() {
	const dispatch = useDispatch()

    const handleRestart = () => {
        dispatch(resetGame())
    }

    return (
        <div id="RESTART_BUTTON">
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}
