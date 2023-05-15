import React from 'react'

//^ Importing Components
import Header from '../components/Header'
import TitleComponent from '../components/TitleComponent'

//^ Importing Components from ProjectComponents 
//^ These componets will make up the page
import ProjectOne from './ProjectCompoents/ProjectOne'

export default function projects() {
  return (
    <div className="project">
        <Header/>
		<TitleComponent title={"Projects Page"}/>

		<div className="projects-container">
			<div className="project-wrapper">
				<ProjectOne/>
			</div>
		</div>




        <style global jsx>{`

			.project {

			}





			*{
				margin:0;
				padding:0;
			}

      `}</style>
        
    </div>
  )
}
