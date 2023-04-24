import { Route, Routes, Link } from 'react-router-dom'

import './styles/styles.css'

import Get from "./views/Get/Get";
import Post from "./views/Post/Post";
import Delete from './views/Delete/Delete';
import Put from './views/Put/Put';

function App() {
  return (
    <div id="App">
		<div className="app-container">

			<div className="app-links-container">
				<Link to="/get" className='links'>GET</Link>
				<Link to="/post" className='links'>POST</Link>
			</div>

			<div className="views-container">
				<Routes>
					<Route path="/get" element={<Get/>}/>
					<Route path="/post" element={<Post/>}/>
				</Routes>
			</div>




		</div>
     
    </div>
  );
}

export default App;
