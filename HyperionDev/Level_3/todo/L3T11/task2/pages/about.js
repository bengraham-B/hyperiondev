//^ Importing components from AboutComponents 
//^ These componets will make up the page
import SkillsComponent from "./AboutComponents/SkillsComponent"
import EducationHistory from "./AboutComponents/EducationHistory"
import PassionComponent from "./AboutComponents/PassionComponent"
import AboutMe from "./AboutComponents/AboutMeComponent"

//^ Importing Components
import TitleComponent from "../components/TitleComponent"
import Header from "../components/Header"
export default () => ( 
    <div>
		<div>
			{/* Importing google fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nabla&family=Poppins:wght@200;300&display=swap" rel="stylesheet"/>
		</div>

        <Header/>

		<TitleComponent title={"About Page"}/>

		
		<div className="about-container">
			<div className="component-wrapper">
				<SkillsComponent/>
			</div>
			
			<div className="component-wrapper">
				<PassionComponent/>
			</div>
			
			<div className="component-wrapper">
				<EducationHistory/>
			</div>
			
			<div className="component-wrapper">
				<AboutMe/>
			</div>
			
		</div>


		<style jsx>
			{`

			.about-container{
				height: 630px;

				display: grid;
				grid-template-columns: 40% 60%;
				grid-template-rows: 50% 50%;

				min-height: auto;
				background: rgb(50, 50, 50);
				background: #245454;
				padding: 20px;
			}

			.component-wrapper{
				margin: 15px;
			}

				

			`}
		</style>
		
    </div>
)