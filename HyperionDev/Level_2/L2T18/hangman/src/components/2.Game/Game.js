import React, {useState, useEffect} from 'react'
import './game.css'
import { useDispatch, useSelector } from 'react-redux'
import { playerLivesCount } from '../../store/hangman' //^ Importing Reducers



export default function Game() {
	const dispatch = useDispatch()
	const getLivesFromRedux = useSelector((state) => state.hangman.lives)
	const [img, setImg] = useState(getLivesFromRedux)

	useDispatch(playerLivesCount())

	useEffect(() => {
		//^ Using state to update image of hangman
		if(getLivesFromRedux !== 12){
			setImg(require(`./assets/state${getLivesFromRedux}.GIF`))
		}

	}, [getLivesFromRedux])
	
  	return (
   		<div id="GAME_CONTAINER">

			<div className="img-container">
				<img src={img} alt="hangman figure" />
			</div>

    	</div>
  )
}
