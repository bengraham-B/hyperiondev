import "./App.css";
import "./styles/style.css"; //& Importing the sass styles

//^ Importing the componets
import Game from "./components/2.Game/Game";
import Header from "./components/1.Header/Header";
import UserLetters from "./components/3.UserLetters/UserLetters";
import LetterSelection from "./components/4.LetterSelection/LetterSelection";
import Rules from "./components/5.Rules/Rules";
import RestartButton from "./components/6.RestartButton/RestartButton";

import { useSelector,useDispatch } from "react-redux";
import {showRules} from './store/hangman' //^ Importing Reducers


function App() {
	
	const dispatch = useDispatch()
	const rulesFromredux = useSelector((state) => state.hangman.rules) //^ Calling the rules state from REDUX, default value is false and if true will display the Rules component to the screen.
	
	function handleRules(){
		dispatch(showRules(rulesFromredux))
	}

	//^ Maps over all the components in the array and renders them to the screen.
	const compoents = [
		{
			name: "Header",
			component: <Header/>
		},
		{
			name: "Rules", 
			component: rulesFromredux ? <Rules/> : <button onClick={handleRules} className="App-rules-button">Show Rules</button>
		},
		{
			name: "Restart", 
			component: <RestartButton/>,
		},
		{
			name: "Game", 
			component: <Game/>
		},
		{
			name: "UserLetters", 
			component: <UserLetters/>
		},
		{
			name: "LetterSelection", 
			component: <LetterSelection/>
		}
		
	

	]


  return (
    <div className="App">
     {compoents.map((component) => {
		return(
			<div key={component.name}>{component.component}</div>
		)
	 })}
    </div>
  );
}

export default App;
