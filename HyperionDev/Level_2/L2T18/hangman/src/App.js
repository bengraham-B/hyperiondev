import "./App.css";
import "./styles/style.css"; //& Importing the sass styles

import Game from "./components/2.Game/Game";
import Header from "./components/1.Header/Header";
import UserLetters from "./components/3.UserLetters/UserLetters";
import LetterSelection from "./components/4.LetterSelection/LetterSelection";
import Rules from "./components/5.Rules/Rules";

import { useSelector,useDispatch } from "react-redux";
import {showRules} from './store/hangman' //^ Importing Reducers


function App() {
	
	const dispatch = useDispatch()
	
	const rulesFromredux = useSelector((state) => state.hangman.rules)
	
	function handleRules(){
		dispatch(showRules(rulesFromredux))
	}
	
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
  
//   return (
//     <div className="App">
//       <Header />
//       {rulesFromredux ? <Rules/> : <button onClick={handleRules}>Show Rules</button>}
//       <Game />
//       <UserLetters />
//       <LetterSelection />
//     </div>
//   );
}

export default App;
