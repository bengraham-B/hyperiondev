import "./App.css";
import "./styles/style.css"; //& Importing the sass styles

import Game from "./components/2.Game/Game";
import Header from "./components/1.Header/Header";
import UserLetters from "./components/3.UserLetters/UserLetters";
import LetterSelection from "./components/4.LetterSelection/LetterSelection";

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <UserLetters />
      <LetterSelection />
    </div>
  );
}

export default App;
