import React from 'react'

//& Importing SASS style sheet.
import './styles/styles.css'

//? Importing Components
import Header from './components/Header/Header'


//? Importing pages
import Home from './pages/Home'


export default function App() {
	return (
  		<div id="APP">
      		<Header/>

			<div className="pages">
				<Home/>
			</div>
		</div>
  	)
}
